import React from 'react';
import './note.css';

const Note = ({ message }) => {
  return (
    <section className="note">
      <h3>Individual note</h3>
      <p>{message}</p>
    </section>
  )
}

export default Note