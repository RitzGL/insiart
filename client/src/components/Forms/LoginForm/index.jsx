import React from "react";
import { useState } from "react";
import { LOGIN_USER } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";


import "./styles.css";

function LoginForm() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <section>
      {data ? (
        <>
          { <p>Success! You've logged in!</p> }
        </>
      ) : (
        <>
          <h3>Login</h3>
          <p>Curate your collection, keep browsing, keep discovering.</p>
          <br />
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={FormData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={FormData.password}
              onChange={handleChange}
            />
            <button type="submit">Log in</button>
          </form>
        </>
      )}
      {
        error && (
          <p style={{color: 'red'}}>
            No user with that email or password found!
          </p>
        )
      }
    </section>
  );
}

export default LoginForm;
