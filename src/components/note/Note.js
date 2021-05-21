import React from 'react';
import './note.css';

const Note = ({ message }) => {
  return (
    <section className="note fade-in">
      <p className="note__txt">{message}</p>
    </section>
  )
}

export default Note
