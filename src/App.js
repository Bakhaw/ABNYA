import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Accueil
import Accueil from './components/Accueil/Accueil';

// Anatomie
import AnatomieAccueil from './components/Anatomie/Accueil';
import AnatomieForm from './components/Anatomie/Form';

// Danse
import DanseAccueil from './components/Danse/Accueil';
import DanseForm from './components/Danse/Form';

// Musique
import MusiqueAccueil from './components/Musique/Accueil';

import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to ="/" className="navbar-brand">ABNYA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav col-md-12 d-flex justify-content-around">

                {/* Anatomie Dropdown */}
                <li className="nav-item dropdown">
                  <a to="/anatomie" className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Anatomie
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/anatomie/cours">Mes cours</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/anatomie/ajouter">Ajouter un cours</Link>
                    </div>
                </li>

                {/* Danse Dropdown */}
                <li className="nav-item dropdown">
                  <a to="/danse" className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Danse
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/danse/cours">Mes cours</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/danse/ajouter">Ajouter un cours</Link>
                    </div>
                </li>

                {/* Musique Dropdown */}
                <li className="nav-item">
                  <Link to="/musique" className="nav-link" href="" role="button">
                        Musique
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path ="/" component={Accueil}/>

          {/* Routes Anatomie */}
          <Route path="/anatomie/cours" component={AnatomieAccueil}/>
          <Route path="/anatomie/ajouter" component={AnatomieForm}/>

          {/* Routes Danse */}
          <Route path="/danse/cours" component={DanseAccueil}/>
          <Route path="/danse/ajouter" component={DanseForm}/>

          {/* Routes Musique */}
          <Route exact path="/musique" component={MusiqueAccueil}/>

        </div>
      </Router>

    );
  }
}

export default App;
