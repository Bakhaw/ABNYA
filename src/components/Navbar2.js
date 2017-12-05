import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar2 extends Component {
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar2" style={{ backgroundColor: "#e3f2fd" }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav2">
            <ul className="navbar-nav col-md-12 d-flex justify-content-around">
              {/* Analyse Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Analyse
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/musique/analyse/cours">
                    Mes cours
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="/musique/analyse/ajouter">
                    Ajouter un cours
                  </Link>
                </div>
              </li>

              {/* Culture Générale Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Culture Générale
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/musique/culture-generale/cours">
                    Mes cours
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="/musique/culture-generale/ajouter">
                    Ajouter un cours
                  </Link>
                </div>
              </li>

              {/* Culture RR Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Culture Reconnaissance & Reproduction
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/musique/culture-reconnaissance-et-reproduction/cours">
                    Mes cours
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="/musique/culture-reconnaissance-et-reproduction/ajouter">
                    Ajouter un cours
                  </Link>
                </div>
              </li>

              {/* Solfege Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Solfège
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/musique/solfege/cours">
                    Mes cours
                  </Link>
                  <div className="dropdown-divider" />
                  <Link className="dropdown-item" to="/musique/solfege/ajouter">
                    Ajouter un cours
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>;
  }
}

export default Navbar2;
