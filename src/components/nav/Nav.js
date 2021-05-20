import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <h1>Navbar</h1>
      <Link to="/instructions"><button>Back to instructions</button></Link>
      <Link to="/about"><button>About Inspirit</button></Link>
      <button className="button" onClick={() => setIsOpen(true)}>Add a note</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <form>
          <p>Write down something great about yourself in the box below</p>
          <p>(You can even paste a link to a video or pictures)</p>
          <input type="text" name="message" />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </nav>
  )
}

export default Nav
