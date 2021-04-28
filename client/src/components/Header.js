import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Header() {

	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<ul className="flex space-x-4">
					<li className="inline">
						<Link to="/">
							My Dashboard
			  			</Link>
					</li>
					<li className="inline">
						<Link to="/community">
							My Community
			  			</Link>
					</li>
					<li className="inline">
						<Link to="/guides">
							Guides
			  			</Link>
					</li>
					<li className="inline">
						{/* this is not using the Link component to logout or user and then refresh the application to the start */}
						<a href="/" onClick={() => Auth.logout()}>
							Logout
			  			</a>
					</li>
				</ul>
			);
		} else {
			return (
				<ul >
					<li >
						<Link to="/signup">
							Signup
			  			</Link>
					</li>
					<li >
						<Link to="/login">
							Login
			  			</Link>
					</li>
				</ul>
			);
		}
	}

	return (
		<header className="w-screen flex justify-between h-20" style={{backgroundColor: "#ff4000"}}>
			<h1 className="text-2xl text-white inline align-middle">
				<Link to="/">
					<span style={{fill:"white"}}>
						<svg className="inline" style={{marginRight: "2px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" /></svg>
						Watchtower
					</span>
		  		</Link>
			</h1>

			<nav className="inline justify-end">
				{showNavigation()}
			</nav>
		</header>
	);
}

export default Header;
