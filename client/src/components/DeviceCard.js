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

function DeviceCard() {
	return (
		<CardBox>
			<div className='cardHeader'>
				<h3>Weather Station 1</h3>
				<h4>Last reported 4 minutes ago</h4>
			</div>
			<div className='cardBody'>
				<div>
					<p>
						<strong>Temperature:</strong> 59 °F
					</p>
					<p>
						<strong>Humidity:</strong> 38%
					</p>
					<p>
						<strong>Pressure:</strong> 12.54 PSI
					</p>
				</div>
				<p>Controlling Device: Raspberry Pi 4</p>
				<button>View Data</button>
			</div>
		</CardBox>
	);
}

export default DeviceCard;
