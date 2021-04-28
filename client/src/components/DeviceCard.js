import React from 'react';

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
		<div>
			{sensors && sensors.map(sensor => (
				<div key={sensor._id} className="border-2 rounded border-black my-1">
					<div className="font-bold">
						<h3>{sensor.sensorName}</h3>
					</div>
					<div className='cardBody'>
						<div>
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
		</div>
	);
}

export default DeviceCard;
