import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Analyse
import AnalyseAccueil from './Analyse/Accueil';
import AnalyseForm from './Analyse/Form';

// Culture Générale
import CultureGeneraleAccueil from './CultureGenerale/Accueil';
import CultureGeneraleForm from './CultureGenerale/Form';

// Culture RR
import CultureRRAccueil from './CultureRR/Accueil';
import CultureRRForm from './CultureRR/Form';

// Solfège
import SolfegeAccueil from './Solfege/Accueil';
import SolfegeForm from './Solfege/Form';

class Accueil extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light"
               style={{ backgroundColor: '#e3f2fd' }}>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav2">
              <ul className="navbar-nav col-md-12 d-flex justify-content-around">

                {/* Analyse Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Analyse
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/musique/analyse/cours">Mes cours</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/musique/analyse/ajouter">
                        Ajouter un cours
                      </Link>
                    </div>
                </li>

                {/* Culture Générale Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Culture Générale
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item"
                            to="/musique/culture-generale/cours">
                        Mes cours
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item"
                            to="/musique/culture-generale/ajouter">
                        Ajouter un cours
                      </Link>
                    </div>
                </li>

                {/* Culture RR Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Culture Reconnaissance & Reproduction
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item"
                            to="/musique/culture-reconnaissance-et-reproduction/cours">
                        Mes cours
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item"
                            to="/musique/culture-reconnaissance-et-reproduction/ajouter">
                        Ajouter un cours
                      </Link>
                    </div>
                </li>

                {/* Solfege Dropdown */}
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href=""
                        id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Solfège
                  </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/musique/solfege/cours">Mes cours</Link>
                      <div className="dropdown-divider"></div>
                      <Link className="dropdown-item" to="/musique/solfege/ajouter">
                        Ajouter un cours
                      </Link>
                    </div>
                </li>

              </ul>
            </div>
          </nav>

          {/* Routes musique/analyse */}
          <Route path="/musique/analyse/cours" component={AnalyseAccueil}/>
          <Route path="/musique/analyse/ajouter" component={AnalyseForm}/>

          {/* Routes musique/culture-generale */}
          <Route path="/musique/culture-generale/cours" component={CultureGeneraleAccueil}/>
          <Route path="/musique/culture-generale/ajouter" component={CultureGeneraleForm}/>

          {/* Routes musique/culture-reconnaissance-et-reproduction */}
          <Route path="/musique/culture-reconnaissance-et-reproduction/cours"
                 component={CultureRRAccueil}/>
          <Route path="/musique/culture-reconnaissance-et-reproduction/ajouter"
                 component={CultureRRForm}/>

          {/* Routes musique/solfege */}
          <Route path="/musique/solfege/cours" component={SolfegeAccueil}/>
          <Route path="/musique/solfege/ajouter" component={SolfegeForm}/>

        </div>
      </Router>
    );
  }

}

export default Accueil;
