import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import HomeHeader from "../../../components/HomeHeader";
import authService from "../../../utils/auth"

import "./styles.css";

function PieceNameSearchPage() {
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
          <label htmlFor="artistName">Search a piece by name:</label>
          <input
            type="text"
            name="artistName"
            value={searchForm.artistName}
            onChange={handleFormChange}
          />
        </form>
        <br />
        <h2>Search for a piece that inspires that next profound reflection.</h2>
        <br />
        <p>Greetings, user. Here you can explore our large catalogue of public properties.</p>
        <p>Type a name of a painting, from the renaissance, to the Edo period, to post-modernism.</p>
        <p>These searches also influence your personalised suggestions. Let us worry about the how, 
          and we can let you enjoy deep dives into movements, styles and periods you were previously
          not privy to.
        </p>
      </section>
    </>
  );
}

export default PieceNameSearchPage;
