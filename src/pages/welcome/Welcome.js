import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <section className="section intro-pages fade-in">
      <h1 className="welcome heading">Inspirit</h1>
      <Link to="/about"><button className="standard-btn">Enter</button></Link>
    </section>
  )
}

export default Welcome
