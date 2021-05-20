import React, { useState, useEffect } from 'react';
import { host } from '../../config.js';
import Nav from '../../components/nav/Nav';

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
    console.log(notes);
  }, []);

  return (
    <section className="section notes">
      <Nav />
      <h1>All your notes</h1>
      <p>Is the server connected? {data.message}</p>
      <ul>
        {notes.map(note => <li key={note.id}>{note.message}</li>)}
      </ul>
    </section>
  )
}

export default Notes;
