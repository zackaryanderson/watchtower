import React from 'react';
import DeviceCard from '../components/DeviceCard';

import { useQuery } from '@apollo/react-hooks';

//import queries
import { QUERY_USER } from '../utils/queries';


function Dashboard() {

	const { loading, data } = useQuery(QUERY_USER);

	if (loading) {
		return (
			<h2>Loading...</h2>
		)
	}

	const user = data.user;

	return (
		<>
			<h2>My Dashboard</h2>
			<DeviceCard user={user}/>
		</>
	);
}

export default Dashboard;
