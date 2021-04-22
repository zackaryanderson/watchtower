const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String!
        email: String!
        firstName: String!
        lastName: String!
        posts: [Post]
    }

    type Post {
        _id: ID
        postText: String!
        createdAt: String!
        username: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        users: [User]
        post(_id: String!): Post
        posts: [Post]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!,firstName: String!, lastName: String!): Auth
        deleteUsers(val: String): User
        login(email: String!, password: String!): Auth
        addPost(postText: String!): Post
    }

`;

module.exports = typeDefs;