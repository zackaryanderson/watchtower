import React from 'react';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Header() {

	function showNavigation() {

		if (Auth.loggedIn()) {
			return (
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
					<li className="nav-item">
						<a
							className="px-3 py-2 flex items-center text-s uppercase leading-snug text-white hover:opacity-75"
							href="#pablo"
						>
							<Link to="/">
								<button className="rounded hover:text-primary px-1 hover:bg-fourth font-bold">My Dashboard</button>
							</Link>
						</a>
					</li>
					<li className="nav-item">
						<a
							className="px-3 py-2 flex items-center text-s uppercase leading-snug text-white hover:opacity-75"
							href="#pablo"
						>
							<Link to="/community">
								<button className="rounded hover:text-primary px-1 hover:bg-fourth font-bold">Add Sensor</button>
							</Link>
						</a>
					</li>
					<li className="nav-item">
						<a
							className="px-3 py-2 flex items-center text-s uppercase leading-snug text-white hover:opacity-75"
							href="#pablo"
						>
							<a href="/" onClick={() => Auth.logout()}>
								<button className="rounded hover:text-primary px-1 font-bold hover:bg-fourth">Logout</button>
							</a>
						</a>
					</li>
				</ul>
			)
		} else {
			return (
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
					<li className="nav-item">
						<a
							className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75"
							href="#pablo"
						>
							<Link to="/signup">
								Signup
						</Link>
						</a>
					</li>
					<li className="nav-item">
						<a
							className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75"
							href="#pablo"
						>
							<Link to="/login">
								Login
							</Link>
						</a>
					</li>

				</ul>
			);
		}
	}

	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<a
							className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
							href="#pablo"
						>
							<Link to="/">
								<span style={{ fill: "white" }} className="font-bold">
									<svg className="inline mx-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 14.828v9.172h18v-9.172l-9-8.375-9 8.375zm11 7.172h-4v-6h4v6zm10-9.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" /></svg>
	 								Watchtower
	 							</span>
							</Link>
						</a>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center" +
							(navbarOpen ? " flex" : " hidden")
						}
						id="example-navbar-danger"
					>

						{showNavigation()}

					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
