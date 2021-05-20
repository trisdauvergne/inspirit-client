import React, { useState, useEffect } from 'react';
import { host } from '../../config.js';
import Nav from '../../components/nav/Nav';
import Note from '../../components/note/Note';

const Notes = () => {
  const [data, setData] = useState({message: 'Loading from Heroku'});
  const [notes, setNotes] = useState([]);

  const getData = async () => {
    try {
      console.log(host);
      const data = await fetch(`${host}`);
      const messageData = await data.json();
      console.log(messageData);
      setData(messageData);
    } catch (error) {
      console.log(error);
    }
  };

  const getNotes = async () => {
    try {
      console.log(host);
      const data = await fetch(`${host}/notes`);
      const notesData = await data.json();
      console.log(notesData);
      setNotes(notesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getNotes();
  }, []);

  return (
    <section className="section notes">
      <Nav />
      <h1>All your notes</h1>
      <p>Is the server connected? {data.message}</p>
      {notes.map(note => <Note key={note.id} message={note.message}/>)}
    </section>
  )
}

export default Notes;
