import React from "react"
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './App.css';
import Community from './pages/Community'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const client = new ApolloClient({
	uri: '/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Header />
			{/* <Dashboard /> */}
			<Community />
		</ApolloProvider>
	);
}

export default App;
