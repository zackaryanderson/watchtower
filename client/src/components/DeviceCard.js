import React from 'react';
import { Link } from "react-router-dom";

function DeviceCard({ user }) {

	const sensors = user.sensors;

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
		<div className="flex justify-center">
			<div className="grid grid-cols-2">
				{sensors && sensors.map(sensor => (
					<div key={sensor._id} className="border-2 rounded border-black m-1 p-1">
						<div className="font-bold text-white bg-black rounded-t">
							<h3>{sensor.sensorName}</h3>
						</div>

						<div>
							{sensor.data.length ?
								(
									<div>
										<h1><a className="font-zcool text-4xl inline">{sensor.data[sensor.data.length - 1].measurement}</a> {formattedUnits(sensor.data[sensor.data.length - 1].units)}</h1>
										<h4 className="text-xs">Last updated {formattedTime(sensor.data[sensor.data.length - 1].timeStamp)} minutes ago</h4>
										<Link to={`/sensor/${sensor.sensorName}`}>
											<button className="bg-tertiary text-white hover:bg-secondary rounded mt-2 p-1 text-sm">View Data</button>
										</Link>
									</div>
								) : (<h4>No Data Yet</h4>)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default DeviceCard;
