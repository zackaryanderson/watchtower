import React from 'react';
import styled from 'styled-components';

const NavUl = styled.ul`
	display: flex;
	list-style-type: none;
	font-size: 1.5rem;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff88;
	padding: 0;

	li {
		padding: 0.5rem;
	}
`;

function Nav() {
	return (
		<nav>
			<NavUl>
				<li>Home</li>
				<li>My Dashboard</li>
				<li>My Community</li>
				<li>Guides</li>
			</NavUl>
		</nav>
	);
}

export default Nav;
