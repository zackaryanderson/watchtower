import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const HeaderBar = styled.header`
	background-color: blue;
	display: flex;
	padding: 1em;
	color: white;
	justify-content: space-between;
	align-items: center;
`;

function Header() {
	return (
		<HeaderBar>
			<h1>Watchtower</h1>
			<Nav />
		</HeaderBar>
	);
}

export default Header;
