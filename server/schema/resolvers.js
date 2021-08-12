const { User } = require('../models');

const resolvers = {

    Query: {
        users: async () => {
            return User.find();
        },

        user: async (parent, {username}) => {
            return User.findOne({username: username});
        }
    },

    Mutation: {

        addUser: async (parent, {username, faveArtist, email, password}) => {
            
            const user = await User.create({username, faveArtist, email, password});
            
            return user;
        },

    }
};

module.exports = resolvers;