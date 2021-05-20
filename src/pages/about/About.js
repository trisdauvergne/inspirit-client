import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section about">
      <Link to="/"><button>Back</button></Link>
      <h1>About</h1>
      <p>A few kind words and explain what Inspirit means</p>
      <Link to="/instructions"><button>Instructions</button></Link>
    </section>
  )
}

export default About
