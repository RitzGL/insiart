const dotenv = require('dotenv');

dotenv.config();

const path = require('path');

const PORT = process.env.PORT || 3001;

const express = require('express');

const app = express();

const mongoose_connection = require('./config/connection');

const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

mongoose_connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});