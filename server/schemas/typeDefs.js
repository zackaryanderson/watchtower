const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		email: String!
		firstName: String!
		lastName: String!
		posts: [Post]
		reactions: [Reaction]
		sensors: [Sensor]
	}

	type Post {
		_id: ID
		postText: String!
		createdAt: String!
		username: String!
		reactions: [Reaction]
	}

	type Sensor {
		_id: ID
		sensorName: String!
		username: String!
		data: [Data]
	}

	type Data {
		_id: ID
		measurement: Int!
		dataFormat: String!
		units: String!
		timeStamp: String!
	}

	type Reaction {
		_id: ID
		reactionBody: String
		createdAt: String
		username: String
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
		sensors: [Sensor]
		sensor(_id: String!): Sensor
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
		deleteUsers(val: String): User
		login(email: String!, password: String!): Auth
		addPost(postText: String!): Post
		addSensor(sensorName: String!): Sensor
		deleteSensors(val: String): Sensor
		addData(sensorName: String!, measurement: Int!, units: String!): Data
		addReaction(postId: String!, reactionBody: String!): Reaction
	}
`;

module.exports = typeDefs;
