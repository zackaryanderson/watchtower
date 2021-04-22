const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return await User.find();
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { user, token };
    },
    deleteUsers: async () => {
      await User.deleteMany()

      return console.log("done");
    }
  }
};

module.exports = resolvers;