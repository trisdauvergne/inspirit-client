import React from 'react';
import { Link } from 'react-router-dom';
import './instructions.css'

const Instructions = () => {
  return (
    <section className="section">
      <Link to="/about">
        <button className="nav-btn">Back to about</button>
      </Link>
      <section className="intro-pages intro-pages--less-margin">
        <h1 className="heading instructions__heading fade-in">When to use<br/>INSPIRIT</h1>
        <div className="instructions__div slower-fade-in">
          <h3 className="instruction__txt">when impostor syndrome creeps in...</h3>
          <h3 className="instruction__txt">to remind yourself of your accomplishments...</h3>
          <h3 className="instruction__txt">to reflect over what you're capable of...</h3>
          <h3 className="instruction__txt instruction__txt--last">to immerse yourself in positivity...</h3>
          <Link to="/notes">
            <button className="standard-btn">Notes</button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Instructions
