import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

//import queries
import { QUERY_USER } from '../utils/queries';

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

function DeviceCard({ user }) {

	const sensors = user.sensors;
	console.log(sensors[0].data)

	// //get specific sensor
	// const sensor = data.user.sensors.find((sensor) => sensor.sensorName === sensorName);
	// //get current time
	// const now = new Date
	// //get time of last posted data
	// const lastPostTime = sensor.data[sensor.data.length-1].timeStamp
	// //calculate difference in time UTC
	// const updateTime = now - lastPostTime;
	// //convert time difference from miliseconds to minutes and round
	// const formattedTime = Math.round(updateTime / (60*1000));

	//calculate time since last update
	const formattedTime = (time) => {
		const now = new Date;

		const elapsedTime = Math.round((now - time) / (60 * 1000));

		return elapsedTime;
	}


	// //determine units
	const formattedUnits = (units) => {
		if (units === "degF") {
			return '°F';
		} else if (units === "degC") {
			return '°C';
		} else if (units === 'kelvin') {
			return 'K';
		} else {
			return units;
		}
	}


	return (
		<CardBox>
			{sensors && sensors.map(sensor => (
				<div key={sensor._id} className="card">
					<div className="cardHeader">
						<h3>{sensor.sensorName}</h3>
					</div>
					<div className='cardBody'>
						<div>
							<p>
								<strong>Temperature:</strong>
							</p>
							{sensor.data ?
								(
									<h1>{sensor.data[sensor.data.length - 1].measurement} {formattedUnits(sensor.data[sensor.data.length - 1].units)}</h1>
								) : (<h4>No Data Yet</h4>)}
						</div>
						{sensor.data ?
							(
								<h4>Last updated {formattedTime(sensor.data[sensor.data.length - 1].timeStamp)} minutes ago</h4>
							) : (<h4></h4>)}
						<button>View Data</button>
					</div>
				</div>
			))}
		</CardBox>
	);
}

export default DeviceCard;
