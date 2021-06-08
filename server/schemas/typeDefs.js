const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		email: String!
		firstName: String!
		lastName: String!
		sensors: [Sensor]
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
        units: String!
        timeStamp: String
    }

	type Auth {
		token: ID!
		user: User
	}

    type Query {
        user: User
        users: [User]
        sensors: [Sensor]
        sensor(sensorName: String!): Sensor
    }

    
	type Mutation {
		addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
		deleteUsers(val: String): User
		login(email: String!, password: String!): Auth
		addSensor(sensorName: String!): Sensor
		deleteSensors(val: String): Sensor
		deleteSensor(sensorName: String!): Sensor
		addData(sensorName: String!, measurement: Int!, units: String!): Data
	}
`;

module.exports = typeDefs;
