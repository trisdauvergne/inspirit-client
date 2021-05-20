import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <section className="section intro-pages fade-in">
      <h1 className="heading">Need some encouragement?</h1>
      <Link to="/about"><button className="standard-btn">Enter</button></Link>
    </section>
  )
}

export default Welcome
