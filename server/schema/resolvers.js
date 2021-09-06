const { AuthenticationError } = require('apollo-server-express');
const { User } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  // these will fetch information from the database
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      
      return User.findOne({ username: username });
    },
    searchByTerm: async () => {
      const response = await fetch("externalURL");
      return await response.json();
    },
  },
  // these will change the database by creating or deleting documents
  Mutation: {
    addUser: async (parent, { username, faveArtist, email, password }) => {
      console.log("Beginning addUser Mutation invokation")
      const user = await User.create({ username, faveArtist, email, password });
      console.log("Awaited user received, user data is: ", user);
      const token = signToken(user);
      console.log("Token created, token is: ",token)
      return { token, user };
    },
    // login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user: user };
    },
    // addPieceToCollection
    // search the API via piece name
    // get relevant information
    // add the piece to the user's collection
    // deletePieceFromCollection
    // get piece ID
    // find it
    // delete from database
    // logout
    // perhaps more JWT bullshit will go in here
  },
};

module.exports = resolvers;
