import React from 'react';
import styled from 'styled-components';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const NavUl = styled.ul`
	display: flex;
	list-style-type: none;
	font-size: 1.5rem;
	justify-content: space-between;
	align-items: center;
	background-color: #ff4000;
	padding: 0;

	li {
		padding: 0.5rem;
	}
`;


function Nav() {

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
  );
}

export default Nav;

