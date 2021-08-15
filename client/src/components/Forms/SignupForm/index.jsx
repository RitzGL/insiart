import React from "react";
import { useState } from "react";
import { ADD_USER } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../../../utils/auth";

import "./styles.css";

function SignupForm() {
  // creating component state
  const [formState, setFormState] = useState({
    username: "",
    faveArtist: "",
    email: "",
    password: "",
  });
  // destructuring 2-element array
  // second index being an object being destructured
  const [addUser, { error, data }] = useMutation(ADD_USER);

  console.log("Add user resolver in front end",addUser)
  console.log("Data obtained from useMutation",data)
  //  handling onChange, constantly changing input field
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({ // unable to see data in here
        variables: { ...formState },
      });

      console.log("Data obtained from addUser", data) // not executing

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <section>
      <h3>Signup</h3>
      <p>Discover, explore and browse art.</p>
      <br />
      <form onSubmit={(event)=>{handleFormSubmit(event)}}>
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />

        <label htmlFor="faveArtist">Favourite Artist:</label>
        <input
          type="text"
          name="faveArtist"
          value={formState.faveArtist}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button
        type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
}

export default SignupForm;
