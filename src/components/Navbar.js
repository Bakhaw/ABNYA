import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">
                ABNYA
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav col-md-12 d-flex justify-content-around">
                  {/* Anatomie Dropdown */}
                  <li className="nav-item dropdown">
                    <a to="/anatomie" className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Anatomie
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/anatomie/cours">
                        Mes cours
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to="/anatomie/ajouter">
                        Ajouter un cours
                      </Link>
                    </div>
                  </li>

                  {/* Danse Dropdown */}
                  <li className="nav-item dropdown">
                    <a to="/danse" className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Danse
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="/danse/cours">
                        Mes cours
                      </Link>
                      <div className="dropdown-divider" />
                      <Link className="dropdown-item" to="/danse/ajouter">
                        Ajouter un cours
                      </Link>
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
          </div>;
    }
}

export default Navbar;