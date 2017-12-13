import React, { Component } from 'react';

import Navbar2 from './Navbars/Navbar2';

import DeleteButton from './Buttons/DeleteButton';
import EditButton from './Buttons/EditButton';

import Chapitre1 from './Chapitres/Chapitre1';
import Chapitre2 from './Chapitres/Chapitre2';
import Chapitre3 from './Chapitres/Chapitre3';
import Chapitre4 from './Chapitres/Chapitre4';
import Chapitre5 from './Chapitres/Chapitre5';
import Chapitre6 from './Chapitres/Chapitre6';
import Chapitre7 from './Chapitres/Chapitre7';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: `http://localhost:3005/${this.props.url}/`,
    };
    console.log(this.state.url);
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="cours">
        <Navbar2 />
        {this.state.data.length === 0 && (

          // Si le tableau de data est vide
          <h4
            className="d-flex justify-content-center align-items-center"
            style={{ height: '80vh' }}
          >
            Tu n'as toujours pas ajouté de cours ici, c'est pas très sérieux!
          </h4>
        )}
        {this.state.data && (
          <ul className="container-fluid cours-container">
            {this.state.data.map((infos, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div className="col-md-2">
                    <h1>{infos.date_lecon}</h1>
                  </div>
                  <div className="col-md-8">
                    {/* Contenu des chapitres */}
                    <Chapitre1 infos={infos} url={this.state.url}/>
                    {console.log(infos)}

                    <Chapitre2 infos={infos} />
                    <Chapitre3 infos={infos} />
                    <Chapitre4 infos={infos} />
                    <Chapitre5 infos={infos} />
                    <Chapitre6 infos={infos} />
                    <Chapitre7 infos={infos} />
                  </div>
                  <div className="col-md-2 d-flex">
                    {/* <EditButton infos={infos} url={this.state.url} /> */}
                    <DeleteButton id={infos._id} url={this.state.url} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Accueil;
