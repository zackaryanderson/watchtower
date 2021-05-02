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

	return (
		<div>
			<div>
				<h2 className="font-bold">My Dashboard</h2>
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
