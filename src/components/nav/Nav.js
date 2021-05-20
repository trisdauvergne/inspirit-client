import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';
import { host } from '../../config.js';
import './nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [newMessage, setNewMessage] = useState({message: ''});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('message to send: ', newMessage);
    console.log('current host: ', host);
    await fetch(`${host}/notes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage)
    });
    setNewMessage({
      message: ''
    });
    setIsOpen(false);
    window.location.reload(true);
  }

  return (
    <nav className="nav">
      <h1>Navbar</h1>
      <Link to="/instructions"><button>Back to instructions</button></Link>
      <Link to="/about"><button>About Inspirit</button></Link>
      <button className="button" onClick={() => setIsOpen(true)}>Add a note</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-form">
          <button onClick={() => setIsOpen(false)}>Close modal</button>
          <form onSubmit={handleSubmit}>
            <p>Write down something great about yourself in the box below</p>
            <p>(You can even paste a link to a video or pictures)</p>
            <input type="text" name="newmessage" value={newMessage.message} onChange={(e) => setNewMessage({message: e.target.value})} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </nav>
  )
}

export default Nav
