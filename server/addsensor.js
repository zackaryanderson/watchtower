const { Sensor } = require('./models');
const db = require('./config/connection');

db.once('open', async () => {
	Sensor.create({
		sensorName: 'rpi4test',
		username: 'testuser',
		modes: [
			{
				measurementName: 'temperature',
				dataFormat: 'float',
				units: 'Fahrenheit',
			},
			{
				measurementName: 'humidity',
				dataFormat: 'float',
				units: '%',
			},
			{
				measurementName: 'windspeed',
				dataFormat: 'float',
				units: 'mph',
			},
		],
	})
		.then(res => console.log('sensor added'))
		.catch(err => console.log(err));
});
