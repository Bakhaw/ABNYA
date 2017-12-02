import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Accueil from './Accueil';
import Form from './Form';

class Anatomie extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/anatomie/cours">Mes cours</Link>
            </li>
            <li>
              <Link to="/anatomie/ajouter">Ajouter un cours</Link>
            </li>
          </ul>
          <Route exact path="/anatomie/cours" component={Accueil}/>
          <Route path="/anatomie/ajouter" component={Form}/>
        </div>
      </Router>
    );
  }

}

export default Anatomie;
