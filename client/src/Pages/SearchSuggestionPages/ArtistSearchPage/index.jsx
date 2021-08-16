import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import HomeHeader from "../../../components/HomeHeader";
import authService from "../../../utils/auth"


import "./styles.css";

function ArtistSearchPage() {

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
          <label htmlFor="artistName">Search an artist by name:</label>
          <input
            type="text"
            name="artistName"
            value={searchForm.artistName}
            onChange={handleFormChange}
          />
        </form>
        <br />
        <h2>Search for an artist, old and new.</h2>
        <br />
        <p>Hello, user. Here you can begin your experience</p>
        <p>It is recommended you start your journey with us here.</p>
        <p>Begin by typing the name of your favourite artist, modern or old. The more searches you complete,
            the better your suggestions will become. Suggestions will be made based on time period, movement and style.
        </p>
      </section>
    </>
  );
}

export default ArtistSearchPage;
