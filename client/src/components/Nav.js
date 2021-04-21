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
`;

const NavLi = styled.li`
	padding: 0.5rem;
`;

function Nav() {
	return (
		<nav>
			<NavUl>
				<NavLi>Home</NavLi>
				<NavLi>My Dashboard</NavLi>
				<NavLi>My Community</NavLi>
				<NavLi>Guides</NavLi>
			</NavUl>
		</nav>
	);
}

export default Nav;
