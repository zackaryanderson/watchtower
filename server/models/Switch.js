const mongoose = require('mongoose');

const { Schema } = mongoose;

const switchSchema = new Schema({

});

const Switch = mongoose.model('Switch', switchSchema);

module.exports = Switch;