import React from 'react';
import DeviceCard from '../components/DeviceCard';

function Dashboard() {
	return (
		<>
			<h2>My Dashboard</h2>
			<DeviceCard sensorName="temp-sensor"/>
		</>
	);
}

export default Dashboard;
