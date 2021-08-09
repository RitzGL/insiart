import React from "react";
import "./styles.css";

function LoginForm() {
  function submitForm() {
    // This will submit the form
    // server wil be requested to authenticate user
    // serve will also create a JWT, to authorize user
  }

  return (
    <section>
      <h3>Login</h3>
      <p>Curate your collection, keep browsing, keep discovering.</p>
      <br />
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </form>
    </section>
  );
}

export default LoginForm;
