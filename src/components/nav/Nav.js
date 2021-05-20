import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <h1>Navbar</h1>
      <Link to="/instructions"><button>Back to instructions</button></Link>
      <Link to="/about"><button>About Inspirit</button></Link>
    </nav>
  )
}

export default Nav
