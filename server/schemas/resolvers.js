const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Post, Sensor, Data, Reaction } = require('../models');

const resolvers = {
  Query: {
    //get one user by context
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id })
          .populate('posts')
          .populate('sensors')
          .populate('reactions')
          .populate({
            path: 'sensors',
            populate: 'data'
          })


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
      return await Post.find().populate('reaction');
    },
    //get single post by id
    post: async (parent, { _id }) => {
      return await Post.findById(_id).populate('reaction')
    },
    //get all sensors and their data
    sensors: async () => {

      return await Sensor.find().populate('data');

    },
    //get one sensor and its data
    sensor: async (parent, { sensorName}, context) => {

      return await Sensor.findOne(sensorName).populate('data');

    }
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
    deleteSensors: async () => {
      await Sensor.deleteMany()

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
        const sensor = await Sensor.create({ ...args, username: context.user.username });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { sensors: sensor._id } },
          { new: true }
        );

        return sensor;
      }
      throw new AuthenticationError('Not logged in');
    },
    addData: async (parent, args) => {
      //if (context.user) {
        //destructure to not push sensor name
        const { measurement, units } = args;
        //create data
        const data = await Data.create({ measurement: measurement, units: units })
        //find sensor and add data id to array of data
        await Sensor.findOneAndUpdate(
          { sensorName: args.sensorName },
          { $push: { data: data._id } },
          { new: true }
        );

        return data;
      //}
      //throw new AuthenticationError('Not logged in');
    },
    addReaction: async (parent, { postId, reactionBody }, context) => {
      if (context.user) {
        //create reaction
        const reaction = await Reaction.create({reactionBody: reactionBody, username: context.user._id})

        //update post
        await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { reactions: reaction._id } },
          { new: true }
        );
        return reaction;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;