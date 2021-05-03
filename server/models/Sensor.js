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
		units: {
			type: String
		},
		data: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Data',
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
