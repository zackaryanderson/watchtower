// temp, humidity, pressure, other random sensor input

const mongoose = require('mongoose');

const { Schema } = mongoose;

const sensorSchema = new Schema({

});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;