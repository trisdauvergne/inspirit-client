import React from 'react';
import { Link } from 'react-router-dom';

const Instructions = () => {
  return (
    <section className="section">
      <Link to="/about">
        <button>Back to about</button>
      </Link>
      <section className="intro-pages fade-in">
        <h1>Instructions</h1>
        <h2>Use Inspirit when imposter syndrome is creeping in</h2>
        <h3>to remind yourself of your accomplishments...</h3>
        <h3>to reflect over what you're capable of...</h3>
        <h3>to immerse yourself in positivity...</h3>
        <h3>(or to just look at a few things that make you smile)</h3>
        <Link to="/notes">
          <button>Notes</button>
        </Link>
      </section>
    </section>
  )
}

export default Instructions
