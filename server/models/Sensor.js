// temp, humidity, pressure, other random sensor input

const mongoose = require('mongoose');

const { Schema } = mongoose;

const sensorSchema = new Schema({

    sensorName: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true
    },
    data: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Data'
        }
    ]

});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;