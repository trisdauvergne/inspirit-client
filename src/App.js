import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './pages/welcome/Welcome';
import About from './pages/about/About';
import Instructions from './pages/instructions/Instructions';
import Notes from './pages/notes/Notes';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route path="/" exact component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/notes" component={Notes} />
        </header>
      </div>
    </Router>
  );
}

export default App;
