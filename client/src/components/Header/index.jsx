import React from "react";
import "./styles.css";

function Header() {
  function login() {
    // template for login function
  }
  function signup() {
    // template for signup function
    // will change state to render signup page
  }
  return (
    <header>
      <h2>InsiArt</h2>
      <ul>
        <li>
          <a href="/" onClick={signup}>
            Signup
          </a>
        </li>
        <li>
          <a href="/" onClick={login}>
            Login
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
