const { gql } = require('apollo-server-express');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  
  type User {
    username: String
    faveArtist: String
    email: String
    password: String
    collection: [Piece]
  }

  type Piece{
    name: String
    artistName: String
    description: String
    imgUrl: String
    year: String
    style: String
  }
  
  type Query {
    users: [User]
    user(username: String): User
    piece: [Piece]
  }

  type Mutation {
    addUser(username: String!, faveArtist: String!, email: String!, password: String!): User
    setPiece(name: String!, artistName: String!, description: String!, imgUrl: String!, year: String!, style:String!): Piece
  }

  

`;

module.exports = typeDefs;
