const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const dataSchema = new Schema({

    measurement: {
        type: String,
        required: true
    },
    units: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now,
        //get: timestamp => dateFormat(timestamp)
    }

},
{
    toJSON: {
        getters: true
    }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;