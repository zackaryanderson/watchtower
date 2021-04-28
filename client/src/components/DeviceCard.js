import React from 'react';
import styled from 'styled-components';

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

	console.log(user.sensors)

	const sensors = user.sensors;
	console.log(sensors[0].data)

	//calculate time since last update
	const formattedTime = (time) => {
		const now = new Date();

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
							{sensor.data.length ?
								(
									<h1>{sensor.data[sensor.data.length - 1].measurement} {formattedUnits(sensor.data[sensor.data.length - 1].units)}</h1>
								) : (<h4>No Data Yet</h4>)}
						</div>
						{sensor.data.length ?
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
