import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Header() {

	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<ul className="flex space-x-4 mt-1.5 mr-1.5 text-white">
					<li className="inline">
						<Link to="/">
							<button className="rounded p-1 hover:text-primary hover:bg-fourth">My Dashboard</button>
			  			</Link>
					</li>
					<li className="inline">
						<Link to="/community">
						<button className="rounded p-1 hover:text-primary hover:bg-fourth">My Community</button>
			  			</Link>
					</li>
					<li className="inline">
						<Link to="/guides">
						<button className="rounded p-1 hover:text-primary hover:bg-fourth">Guides</button>
			  			</Link>
					</li>
					<li className="inline">
						{/* this is not using the Link component to logout or user and then refresh the application to the start */}
						<a href="/" onClick={() => Auth.logout()}>
						<button className="rounded p-1 hover:text-primary hover:bg-fourth">Logout</button>
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
		<header className="w-screen flex justify-between h-11 content-end" style={{backgroundColor: "#ff4000"}}>
			<h1 className="text-2xl text-white inline align-middle h-auto">
				<Link to="/">
					<span style={{fill:"white"}} className="font-bold">
						<svg className="inline mx-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" /></svg>
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
