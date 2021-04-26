import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const HeaderBar = styled.header`
	background-color: #ff4000;
	display: flex;
	padding: 1em;
	color: white;
	justify-content: space-between;
	align-items: center;
`;

function Header() {

	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<ul className="flex-row">
					<li className="mx-1">
						<Link to="/dashboard">
							My Dashboard
			  </Link>
					</li>
					<li className="mx-1">
						<Link to="/community">
							My Community
			  </Link>
					</li>
					<li className="mx-1">
						<Link to="/guides">
							Guides
			  </Link>
					</li>
					<li className="mx-1">
						{/* this is not using the Link component to logout or user and then refresh the application to the start */}
						<a href="/" onClick={() => Auth.logout()}>
							Logout
			  </a>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="flex-row">
					<li className="mx-1">
						<Link to="/signup">
							Signup
			  </Link>
					</li>
					<li className="mx-1">
						<Link to="/login">
							Login
			  </Link>
					</li>
				</ul>
			);
		}
	}

	return (
		<HeaderBar>
			<header className="flex-row px-1">
				<h1>
					<Link to="/">
						Watchtower
		  </Link>
				</h1>

				<nav>
					{showNavigation()}
				</nav>
			</header>
		</HeaderBar>
	);
}

export default Header;
