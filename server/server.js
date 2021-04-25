const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const { Sensor, Data } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/api/data', async (req, res) => {
	console.log(req.body);
	const dataset = Object.entries(req.body.data);

	const sensor = await Sensor.findOne({ sensorName: req.body.sensorName });

	const err = [];
	dataset.forEach(([measurement, value]) => {
		const dataCheck = sensor.validMeasurements.find(item => item[0] === measurement);

		if (!dataCheck) {
			err.push(`Measurement '${measurement}' is not configured for this sensor.`);
			return;
		} else if (typeof value === 'string' && dataCheck.dataFormat !== 'string') {
			err.push(`Data submission ${measurement}: Expected ${dataCheck.dataFormat}, received ${typeof value}`);
			return;
		} else if (dataCheck.dataFormat === 'int' && !Number.isInteger(value)) {
			err.push(`Data submission ${measurement}: Expected integer, received float`);
			return;
		} else if (dataCheck.dataFormat === 'float' && isNaN(value)) {
			err.push(`Data submission ${measurement}: Expected number (float), received value isNaN`);
			return;
		}
	});

	if (err.length) {
		res.status(400).json({ [`${err.length > 1 ? 'errors' : error}`]: err });
		return;
	}

	const dataMap = dataset.map(item => {
		return { measurement: item[0], value: item[1] };
	});

	const newData = await Data.create(dataMap);

	const newDataIds = newData.map(item => item._id);

	const dataInput = await Sensor.findOneAndUpdate(
		{ sensorName: req.body.sensorName },
		{ $push: { data: { $each: newDataIds } } },
		{ new: true }
	)
		.select('-__v')
		.populate({ path: 'Data', select: '-__v' });

	res.json(dataInput);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`);
		console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
	});
});
