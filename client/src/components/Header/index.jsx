import React from "react";
import "./styles.css";

function Header() {
  function logout() {
    // template for logout function
  }
  return (
    <header>
      <h2>InsiArt</h2>
      <ul>
        <li>
          <a href="/">Search Artists</a>
        </li>
        <li>
          <a href="/">Search Pieces</a>
        </li>
        <li>
          <a href="/">Search Time Periods</a>
        </li>
        <li>
          <a href="/" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
