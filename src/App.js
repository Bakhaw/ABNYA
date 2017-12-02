import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';

// Anatomie
import Anatomie from './components/Anatomie/Anatomie';
import AnatomieAccueil from './components/Anatomie/Accueil';
import AnatomieForm from './components/Anatomie/Form';

// Danse
import Danse from './components/Danse/Danse';
import DanseAccueil from './components/Danse/Accueil';
import DanseForm from './components/Danse/Form';

// Musique
import Musique from './components/Musique/Musique';
import MusiqueAccueil from './components/Musique/Accueil';
import MusiqueForm from './components/Musique/Form';

import './App.css';

class App extends Component {
  render() {
    return (

      // <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Accueil</Link>
      //       </li>
      //       <li>
      //         <Link to="/anatomie">Anatomie</Link>
      //       </li>
      //       <li>
      //         <Link to="/danse">Danse</Link>
      //       </li>
      //       <li>
      //         <Link to="/musique">Musique</Link>
      //       </li>
      //     </ul>
      //
      //     <Route exact path="/" component={Accueil}/>
      //     <Route path="/anatomie" component={Anatomie} />
      //     <Route path="/danse" component={Danse} />
      //     <Route path="/musique" component={Musique} />
      //
      //   </div>
      // </Router>

      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">ABNYA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item col-md-4">
                  <Link to="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item dropdown col-md-4">
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
                <li className="nav-item dropdown col-md-4">
                  <a to="/anatomie" className="nav-link dropdown-toggle" href=""
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
                <li className="nav-item dropdown col-md-4">
                  <a to="/anatomie" className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Musique
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/musique/cours">Mes cours</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/musique/ajouter">Ajouter un cours</Link>
                    </div>
                </li>
              </ul>
            </div>
          </nav>

          <Route exact path ="/" component={Accueil}/>

          <Route exact path="/anatomie" component={Anatomie} />
          <Route exact path="/anatomie/cours" component={AnatomieAccueil}/>
          <Route exact path="/anatomie/ajouter" component={AnatomieForm}/>

          <Route exact path="/danse" component={Danse} />
          <Route exact path="/danse/cours" component={DanseAccueil}/>
          <Route exact path="/danse/ajouter" component={DanseForm}/>

          <Route exact path="/musique" component={Musique} />
          <Route exact path="/musique/cours" component={MusiqueAccueil}/>
          <Route exact path="/musique/ajouter" component={MusiqueForm}/>

        </div>
      </Router>

    );
  }
}

export default App;
