import React from "react";
import "./styles.css";
import { Link } from "react-router-dom"; 

import authService from '../../utils/auth'

function Header() {
  function logout() {
    authService.logout();
    alert("You have been successfully logged out!")
  }
  return (
    <header>
      <h2>InsiArt</h2>
      <ul>
        <li>
          <Link to="/homepage/search-artist">Search Artists</Link>
        </li>
        <li>
          <a href="/homepage/search-pieces">Search Pieces</a>
        </li>
        <li>
          <a href="/homepage/search-time-periods">Search Time Periods</a>
        </li>
        <li>
          <a href="/homepage/suggestions">Your Suggestions</a>
        </li>
        <li>
          <a href="/login" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
