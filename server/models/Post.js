const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;