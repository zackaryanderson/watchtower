const { Sensor, Data } = require('./models');
const db = require('./config/connection');

const sensorData = {
	_id: '6085156541d737267a408985',
	data: [
		{
			measurement: 52.3,
			units: 'degreeF',
		},
		{
			measurement: 58,
			units: 'humidity%',
		},
		{
			measurement: 4.72,
			units: 'mph',
		},
	],
	timeStamp: '2021-04-25T07:08:21.493Z',
	__v: 0,
};

db.once('open', async () => {
	await Sensor.findOneAndDelete({ sensorName: 'rpi4test' });

	Sensor.create({
		sensorName: 'rpi4test',
		username: 'testuser',
		data: sensorData.map(item => item._id),
	})
		.then(res => console.log('sensor added'))
		.then(async res => {
			await Data.deleteMany({});
			await Data.create(sensorData);
			console.log('sensor data added');
		})
		.catch(err => console.log(err));
});
