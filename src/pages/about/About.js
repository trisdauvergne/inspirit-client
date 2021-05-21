import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
  return (
    <section className="section">
      <Link to="/"><button className="nav-btn btn-hover">Back</button></Link>
      <section className="intro-pages fade-in">
        <h1 className="heading intro">Inspirit</h1>
        <h3 className="intro__txt">verb (used with object)</h3>
        <h3 className="intro__txt">to infuse spirit or life into; enliven.</h3>
        <Link to="/instructions"><button className="standard-btn">Continue</button></Link>
      </section>
    </section>
  )
}

export default About
