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
    <nav className="header">
      <div className="header-content">
        <Link to="/"><h1 className="heading header-content__heading">Inspirit</h1></Link>
        <div className="header-btns">
          <Link to="/about"><button className="header-btn btn-hover">About Inspirit</button></Link>
          <button className="header-btn btn-hover" onClick={() => setInstructionsOpen(true)}>What to do</button>
          <button className="header-btn btn-hover" onClick={() => setFormOpen(true)}>Add a note</button>
        </div>
      </div>
      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <div className="modal modal-form">
          <button  className="modal-btn" onClick={() => setFormOpen(false)}>X</button>
          <form onSubmit={handleSubmit}>
            <p>Enter your message to yourself in the box below</p>
            <br/>
            <p>Or paste a link to a YouTube video</p>
            <div className="modal-form-div">
              <textarea className="modal-form__input" type="text" name="newmessage" value={newMessage.message} onChange={(e) => setNewMessage({message: e.target.value})} />
              <button className="modal-submit-btn button" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal open={instructionsOpen} onClose={() => setInstructionsOpen(false)}>
        <div className="modal modal-instructions">
          <button className="modal-btn" onClick={() => setInstructionsOpen(false)}>x</button>
          <div className="modal-instructions__txt">
            <p>Use Inspirit when impostor syndrome creeps in, to remind yourself of everything you have achieved.</p>
            <br/>
            <p>Click on the 'Add a note' button and leave yourself a note.</p>
            <br/>
            <p>The note can be about something you are proud of or you are great at, or just messages to remind yourself of how great you are.</p>
            <br/>
            <p>You can even paste a link to your favourite song. Just paste a YouTube link.</p>
          </div>
        </div>
      </Modal>
    </nav>
  )
}

export default Nav
