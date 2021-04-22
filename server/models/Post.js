const mongoose = require('mongoose');

const { Schema } = mongoose;
const Reaction = require('./Reaction');
const User = require('./User');

const postSchema = new Schema({

    postText: {
        type: String,
        required: 'You have to write a post!',
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
    }

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;