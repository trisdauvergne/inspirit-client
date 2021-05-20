import React, { useState, useEffect } from 'react';
import { host } from './config.js';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const data = await fetch(`${host}`);
      const messageData = await data.json();
      setData(messageData);
      console.log(host);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? 'Nothing' : data.message}</p>
      </header>
    </div>
  );
}

export default App;
