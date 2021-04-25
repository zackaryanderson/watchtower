// temp, humidity, pressure, other random sensor input

const mongoose = require('mongoose');

const { Schema } = mongoose;

const sensorSchema = new Schema(
	{
		sensorName: {
			type: String,
			required: true,
			unique: true,
		},
		username: {
			type: String,
			required: true,
		},
		modes: [
			// note sensor can have multiple modes, like a weather station that tracks temp, humidity, and wind speed
			{
				measurementName: {
					// e.g., temperature, this will be checked against posted data's measurement value
					type: String,
					required: true,
				},
				dataFormat: {
					type: String,
					required: true,
					enum: ['integer', 'float', 'string'], // needed for validation scheme
				},
				units: {
					type: String,
					default: null, // not all measurements use a unit, so shouldn't be required (like UV index or AQI)
				},
			},
		],
		data: [
			{
				measurement: {
					type: String,
					required: true,
				},
				value: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

sensorSchema.virtual('validMeasurements').get(function () {
	return this.modes.map(mode => [mode.measurementName, mode.dataFormat]);
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
