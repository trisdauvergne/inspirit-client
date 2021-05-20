import React from 'react';
import { Link } from 'react-router-dom';
import './instructions.css'

const Instructions = () => {
  return (
    <section className="section">
      <Link to="/about">
        <button>Back to about</button>
      </Link>
      <section className="intro-pages extra-spacing">
        <h1 className="sub-heading fade-in">Use Inspirit when imposter syndrome is creeping in</h1>
        <div className="slower-fade-in">
          <h3>to remind yourself of your accomplishments...</h3>
          <h3>to reflect over what you're capable of...</h3>
          <h3>to immerse yourself in positivity...</h3>
          <h3>(or to just look at a few things that make you smile)</h3>
          <Link to="/notes">
            <button className="standard-btn">Notes</button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Instructions
