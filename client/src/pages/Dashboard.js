import React from 'react';
import DeviceCard from '../components/DeviceCard';
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';


function Dashboard() {

	if (!Auth.loggedIn()) {
		return <Redirect to="/login" />
	}

	return (
		<div>
			<div>
				<h2 className="font-bold">My Dashboard</h2>
			</div>
			
			<DeviceCard />
			
		</div>
	);
}

export default Dashboard;
