import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import HomeHeader from "../../../components/HomeHeader";

import authService from "../../../utils/auth"

import "./styles.css";

function TimePeriodSearchPage() {
  const [searchForm, setSearchForm] = useState({
    artistName: "",
  });

  const token = authService.getToken();
  if (!authService.loggedIn() || authService.isTokenExpired(token)) {
    return <Redirect to="/unauthorised" />;
  }

  function handleFormSubmit(event, error) {
    event.preventDefault();
    console.log("Data read on submit", searchForm);

    //  the data will be read in and used in a fetch to the Met Museum api
  }

  function handleFormChange(event) {
    const { name, value } = event.target;

    setSearchForm({
      ...searchForm,
      [name]: value,
    });
  }
  return (
    <>
      <HomeHeader />
      <section>
        <form action="" name="searchForm" onSubmit={handleFormSubmit}>
          <label htmlFor="artistName">Search an art time period by name:</label>
          <input
            type="text"
            name="artistName"
            value={searchForm.artistName}
            onChange={handleFormChange}
          />
        </form>
        <br />
        <h2>Discover unique art movements throughout time.</h2>
        <br />
        <p>Hi there, user. Ever dipped your toes in Neoclassicism? Tried some Rococo? Care for some
          Art Nouveau?
        </p>
        <p>Type the name of an art movement and discover time periods, their influence in modern times, 
          and the cultural impact felt across centuries.
        </p>
        <p>These searches also influence your personalised suggestions. Curious how? We won't tell,
          we wouldn't be where we are if everyone knew our secret.
        </p>
      </section>
    </>
  );
}

export default TimePeriodSearchPage;
