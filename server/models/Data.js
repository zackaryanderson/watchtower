const mongoose = require('mongoose');

const { Schema } = mongoose;

const dataSchema = new Schema({
	measurement: {
		type: String,
		required: true,
	},
	units: {
		type: String,
		default: null, // not all measurements use a unit, so shouldn't be required (like UV index or AQI)
	},
	timeStamp: {
		type: Date,
		default: Date.now,
	},
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
