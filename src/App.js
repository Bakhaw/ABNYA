import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Anatomie from './components/Anatomie';
import Danse from './components/Danse';
import Musique from './components/Musique';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/anatomie">Anatomie</Link>
            </li>
            <li>
              <Link to="/danse">Danse</Link>
            </li>
            <li>
              <Link to="/musique">Musique</Link>
            </li>
          </ul>

          <Route exact path="/anatomie" component={Anatomie} />
          <Route path="/danse" component={Danse} />
          <Route path="/musique" component={Musique} />

        </div>
      </Router>
    );
  }
}

export default App;
