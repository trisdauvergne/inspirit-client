import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <section className="section intro-pages fade-in">
      <h1>Welcome page</h1>
      <h2>Need some encouragement</h2>
      <Link to="/about"><button>Enter</button></Link>
    </section>
  )
}

export default Welcome
