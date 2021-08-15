const { User } = require('../models');

const resolvers = {
    // these will fetch information from the data
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, {username}) => {
            // write logic to find by email
            // compare passwords with auth.js
            // sign token based on that
            return User.findOne({username: username});
        }
        // must hash password before it is saved.
        // look at .pre() method documentation on mongoose
    },
    // these will change the database by creating or deleting documents
    Mutation: {
        addUser: async (parent, {username, faveArtist, email, password}) => {
            
            const user = await User.create({username, faveArtist, email, password});
            
            return user;
        },
        // login
            // JWT bullshit goes in here as well
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

    }
};

module.exports = resolvers;