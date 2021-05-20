import React, { useState, useEffect } from 'react';
import { host } from '../../config.js';
import Nav from '../../components/nav/Nav';

const Notes = () => {
  const [data, setData] = useState(null);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="section notes">
      <Nav />
      <h1>All your notes</h1>
      {/* <p>Is the server connected? {!data ? 'Loading' : data.message}</p> */}
    </section>
  )
}

export default Notes;
