import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

//import queries
import { QUERY_SENSORS } from '../utils/queries';

const CardBox = styled.div`
	max-width: 600px;
	padding: 0.4rem;

	.cardHeader {
		background-color: lightblue;
		padding: 0.2rem;
	}

	.cardBody {
		border: 3px solid lightblue;
		padding: 0.2rem;
	}
`;

function DeviceCard({sensorName}) {

	const { loading, data } = useQuery(QUERY_SENSORS);

	if (loading) {
		return (
			<h2>Loading...</h2>
		)
	}

	//get specific sensor
	const sensor = data.sensors.find((sensor) => sensor.sensorName === sensorName);
	//get current time
	const now = new Date
	//get time of last posted data
	const lastPostTime = sensor.data[sensor.data.length-1].timeStamp
	//calculate difference in time UTC
	const updateTime = now - lastPostTime;
	//convert time difference from miliseconds to minutes and round
	const formattedTime = Math.round(updateTime / (60*1000));

	//determine units
	let formattedUnits = '';

	if (sensor.data[sensor.data.length-1].units === "degF") {
		formattedUnits = '°F';
	} else if (sensor.data[sensor.data.length-1].units === "degC") {
		formattedUnits = '°C';
	} else if (sensor.data[sensor.data.length-1].units === 'kelvin') {
		formattedUnits = 'K';
	} else {
		formattedUnits = sensor.units;
	}

	return (
		<CardBox>
			<div className='cardHeader'>
				<h3>{sensor.sensorName}</h3>
			</div>
			<div className='cardBody'>
				<div>
					<p>
						<strong>Temperature:</strong>
					</p>
					<h1>{sensor.data[sensor.data.length-1].measurement} {formattedUnits}</h1>
				</div>
				<h4>Last updated {formattedTime} minutes ago</h4>
				<button>View Data</button>
			</div>
		</CardBox>
	);
}

export default DeviceCard;
