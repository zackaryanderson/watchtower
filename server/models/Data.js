const mongoose = require('mongoose');

const { Schema } = mongoose;

const dataSchema = new Schema({
	measurement: {
		type: String,
		required: true,
	},
	units: {
		type: String,
		required: true,
	},
	timeStamp: {
		type: Date,
		default: Date.now,
	},
},
{
    toJSON: {
        getters: true
    }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
