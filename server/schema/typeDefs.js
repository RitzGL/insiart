const { gql } = require('apollo-server-express');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  
  type User {
    _id: ID
    username: String
    faveArtist: String
    email: String
    password: String
    artCollection: [Piece]
  }

  type Piece{
    _id: ID
    name: String
    artistName: String
    description: String
    imgUrl: String
    year: String
  }
  
  type Auth{
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String): User
    piece: [Piece]
  }

  type Mutation {
    addUser(username: String!, faveArtist: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    setPiece(name: String!, artistName: String!, description: String!, imgUrl: String!, year: String!, style:String!): Piece
  }

  

`;

module.exports = typeDefs;
