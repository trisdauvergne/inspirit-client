import React from 'react';
import { Link } from 'react-router-dom';

const Instructions = () => {
  return (
    <section className="section instructions">
      <Link to="/about"><button>Back to about</button></Link>
      <h1>Instructions</h1>
      <Link to="/notes"><button>Notes</button></Link>
    </section>
  )
}

export default Instructions
