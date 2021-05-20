import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section about">
      <Link to="/"><button>Back</button></Link>
      <h1>About</h1>
      <h1>Inspirit</h1>
      <h3>verb (used with object)</h3>
      <h3>to infuse spirit or life into; enliven.</h3>
      <Link to="/instructions"><button>Instructions</button></Link>
    </section>
  )
}

export default About
