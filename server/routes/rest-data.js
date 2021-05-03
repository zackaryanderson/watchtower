const router = require('express').Router();
const { Sensor, Data } = require('../models');

router.post('/api/data', async (req, res) => {
	console.log(req.body);
	const dataset = req.body.data;

	const sensor = await Sensor.findOne({ sensorName: req.body.sensorName });
	console.log(sensor);

	const dataDocs = await Data.create(dataset);

	const dataInput = await Sensor.findOneAndUpdate(
		{ sensorName: req.body.sensorName },
		{ $push: { data: { $each: dataDocs.map(({ _id }) => _id) } } },
		{ new: true }
	);
	res.json(dataInput);
});

module.exports = router;
