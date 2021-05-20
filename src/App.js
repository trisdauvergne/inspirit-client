import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { host } from './config.js';
import './App.css';
import Welcome from './pages/welcome/Welcome';
import About from './pages/about/About';
import Instructions from './pages/instructions/Instructions';
import Home from './pages/home/Home';

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
    <Router>
      <div className="App">
        <header className="App-header">
          <p>{!data ? 'Nothing' : data.message}</p>
          <Route path="/" exact component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/home" component={Home} />
        </header>
      </div>
    </Router>
  );
}

export default App;
