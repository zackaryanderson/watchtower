const mongoose = require('mongoose');

const { Schema } = mongoose;

const switchSchema = new Schema({

    name: {
        type: String,
        required: true
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

const Switch = mongoose.model('Switch', switchSchema);

module.exports = Switch;