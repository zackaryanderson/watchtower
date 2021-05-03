import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.css';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import DataUpload from './pages/DataUpload';
import Login from './pages/Login';
import Sensor from './pages/Sensor';
import DeleteSensor from './pages/DeleteSensor';
import AddSensor from './pages/AddSensor';
import Signup from './pages/Signup';

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem('id_token')
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		})
	},
	uri: '/graphql',
})


function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/data/dump" component={DataUpload} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/sensor/:id" component={Sensor} />
						<Route exact path="/delete/:id" component={DeleteSensor} />
						<Route exact path="/addsensor" component={AddSensor} />
						<Route exact path="/signup" component={Signup}/>
					</Switch>
				</div>
			</Router>
		</ApolloProvider >
	);
}

export default App;

