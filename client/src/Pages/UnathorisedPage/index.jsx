import React from "react";
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import "./styles.css";



function UnauthorisedPage() {
  return (
    <>
      <Header />
      <div className="logout">
        <p>You need to be logged in to view this page!</p>
        <br />
        <Link className="link" to="/signup">
          Signup
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </>
  );
}

export default UnauthorisedPage;