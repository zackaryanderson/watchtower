const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Post, Sensor } = require('../models');

const resolvers = {
  Query: {
    //get one user by context
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .populate('post')
        
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    //get all users
    users: async () => {

      const users = await User.find().populate('post')

      return users;
    },
    //get all posts
    posts: async () => {
      return await Post.find().populate('reactions');
    },
    //get single post by id
    post: async (parent, { _id }) => {
      return await Post.findById(_id).populate('reactions')
    },
    //get all sensors and their data
    sensors: async () => {

      return await Sensor.find().populate('data');

    },
    //get one sensor and its data
    sensor: async (parent, { _id} , context) => {

      return await Sensor.findById(_id).populate('data');

    },
  },
  Mutation: {
    //add a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { user, token };
    },
    //delete all users (mainly for testing)
    deleteUsers: async () => {
      await User.deleteMany()

      return console.log("done");
    },
    //login to the site
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect email');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);
      return { token, user };
    },
    // add a post 
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }
      throw new AuthenticationError('Not logged in');
    },
    addSensor: async (parent, args, context) => {
      if (context.user) {
        const sensor = await Sensor.create({...args, username: context.user.username });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { sensors: sensor._id } },
          { new: true }
        );
      }
    }

  }
};

module.exports = resolvers;