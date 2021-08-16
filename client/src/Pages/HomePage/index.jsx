import React from "react";
import HomeHeader from "../../components/HomeHeader";
import { Redirect } from "react-router";
import authService from "../../utils/auth";

import Main from "../../components/Main";
function HomePage() {
  // either redirect from here
  // or do a ternary to check the authService functions
  // either way, the route is not conditionally rendered.
  // must be conditionally rendered
  const token = authService.getToken();
  if (!authService.loggedIn() || authService.isTokenExpired(token)) {
    return <Redirect to="/unauthorised" />;
  }

  return (
    <>
      <HomeHeader />
      <Main />
    </>
  );
}

export default HomePage;
