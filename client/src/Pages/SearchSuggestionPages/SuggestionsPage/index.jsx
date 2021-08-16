import React from "react";
import { Redirect } from "react-router";
import HomeHeader from "../../../components/HomeHeader";
import authService from "../../../utils/auth"

import "./styles.css";

function SuggestionsPage() {

  const token = authService.getToken();
  if (!authService.loggedIn() || authService.isTokenExpired(token)) {
    return <Redirect to="/unauthorised" />;
  }
  
  return (
    <>
      <HomeHeader />
      <section>
        <br />
        <h2>Suggestions, our true craft</h2>
        <br />
        <p>
          Welcome to our specialty. Personalised art recommendations based on
          your experience with us.
        </p>
        <p>
          We expect to deliver this feature to you before EOFY 2021. Stay tuned.
        </p>
        <p>We thank you for using our service.</p>
      </section>
    </>
  );
}

export default SuggestionsPage;
