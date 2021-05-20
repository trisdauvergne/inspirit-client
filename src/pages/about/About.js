import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <section className="section">
      <Link to="/"><button>Back</button></Link>
      <section className="intro-pages fade-in">
        <h1 className="heading">Inspirit</h1>
        <h3>verb (used with object)</h3>
        <h3>to infuse spirit or life into; enliven.</h3>
        <Link to="/instructions"><button className="standard-btn">Instructions</button></Link>
      </section>
    </section>
  )
}

export default About
