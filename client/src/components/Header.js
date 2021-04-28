import React from 'react';
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

	.title {
		color: black;
		text-decoration: none;
	}
`;

function Header() {

	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<ul className="flex-row">
					<li className="mx-1">
						<Link to="/">
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
				<h1 className="title">
					<Link to="/">
						<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z"/></svg>
						 </span>
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
