const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        firstName: String
        lastName: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): User
    }

`;

module.exports = typeDefs;