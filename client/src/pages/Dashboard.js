import React from 'react';
import DeviceCard from '../components/DeviceCard';
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';

//import queries
import { QUERY_USER } from '../utils/queries';


function Dashboard() {

	const { loading, data } = useQuery(QUERY_USER);

	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />
	}

	if (loading) {
		return (
			<h2>Loading...</h2>
		)
	}

	const user = data?.user || {};

	console.log(user);

	return (
		<div>
			<div>
				<h2 className="font-bold">My Dashboard</h2>
				<div className="inline ">
					<button className="border-2 border-green-500 p-1 text-white bg-green-500 hover:bg-green-700 hover:text-white rounded mx-1 rounded">Add Sensor</button>
					<button className="border-2 border-red-500 p-1 text-white bg-red-500 hover:bg-red-700 hover:text-white rounded">Remove Sensor</button>
				</div>
			</div>
			{loading ? (
				<h2>Loading...</h2>
			) : (
					<DeviceCard user={user} />)
			}
		</div>
	);
}

export default Dashboard;
