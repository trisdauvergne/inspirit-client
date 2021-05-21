import React from 'react';
import './note.css';

const Note = ({ note }) => {
  return (
    <section className="note fade-in">
      {note.message ? <p className="note__txt">{note.message}</p>: <iframe className="note__video" title="Inspirit Video" width="200" height="120" src={note.video} frameBorder="0"></iframe>}
    </section>
  )
}

export default Note
