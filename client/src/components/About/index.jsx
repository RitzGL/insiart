import React from "react";
import Button from '../Button'
import { Link } from "react-router-dom";
import "./styles.css";
function About() {
  return (
    <article>
      <h1>Discover Art. Tailored to you.</h1>
      <br />
      <p>We're InsiArt. Inside. Art.</p>
      <br />
      <p>Our service provides you with a unique art searching experience.</p>
      <br />
      <p>
        Tell us about yourself, we search artists tailored to your taste. You
        can then create a gallery based on your personalised resutls.
      </p>
      <br />
      <p>Sound good? We thought so, too.</p>
      <br />
      <Link to="/signup"><Button /></Link>
    </article>
  );
}

export default About;
