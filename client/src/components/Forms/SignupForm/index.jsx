import React from "react";
import "./styles.css";

function SignupForm() {
  function handleFormSubmitEvent(e) {
    if (e.onKeyPress === 'Enter') console.log(e.target.value);
    // request to the server, containing all the information
    // server then creates the user, and adds to database
    
  }
  //   OPTIONAL: DEPENDENT ON HOW DEVELOPMENT IS GOING
  //   function getOptionsByDepartment() {
  //     request to server, to get all the departments available
  //     server then responds with an array of objects
  //     return;
  //   }

  return (
    <section>
      <h3>Signup</h3>
      <p>Discover, explore and browse art.</p>
      <br />
      <form onKeyPress={(e) => {handleFormSubmitEvent(e)}}>
        <label htmlFor="name">Username:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="faveArtist">Favourite Artist:</label>
        <input type="text" id="faveArtist" name="faveArtist" />

        {/* <label htmlFor="departments">Favourite Type:</label>
        <select name="department" id="department">
          {getOptionsByDepartment()}
        </select> */}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </form>
    </section>
  );
}

export default SignupForm;
