const mongoose = require('mongoose');

const { Schema } = mongoose;

const dataSchema = new Schema({

    measurment: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }

});

const Data = mongoose.model('Switch', dataSchema);

module.exports = Data;