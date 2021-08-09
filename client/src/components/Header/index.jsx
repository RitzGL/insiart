import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function Header() {
  // function login() {
  //   // template for login function
  // }
  // function signup() {
  //   // template for signup function
  //   // will change state to render signup page
  // }
  return (
    <header>
      <h2>
        <Link className="Name" to="/">
          InsiArt
        </Link>
      </h2>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
