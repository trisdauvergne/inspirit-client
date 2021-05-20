import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';
import { host } from '../../config.js';
import './nav.css';

const Nav = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
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
    setFormOpen(false);
    window.location.reload(true);
  }

  return (
    <nav className="nav">
      <h1>Inspirit</h1>
      {/* <Link to="/instructions"><button>Back to instructions</button></Link> */}
      <button onClick={() => setInstructionsOpen(true)}>What to do</button>
      <Link to="/about"><button>About Inspirit</button></Link>
      <button className="button" onClick={() => setFormOpen(true)}>Add a note</button>
      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <div className="modal-form">
          <button onClick={() => setFormOpen(false)}>Close modal</button>
          <form onSubmit={handleSubmit}>
            <p>Write down something great about yourself in the box below</p>
            <p>(You can even paste a link to a video or pictures)</p>
            <input type="text" name="newmessage" value={newMessage.message} onChange={(e) => setNewMessage({message: e.target.value})} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
      <Modal open={instructionsOpen} onClose={() => setInstructionsOpen(false)}>
        <div className="modal-form">
          <button onClick={() => setInstructionsOpen(false)}>Close modal</button>
          <p>Click on the add a note button and write yourself something nice</p>
        </div>
      </Modal>
    </nav>
  )
}

export default Nav
