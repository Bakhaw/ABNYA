import React, { Component } from 'react';

import Navbar2 from './Navbars/Navbar2';

import DeleteButton from './Lecon/Buttons/DeleteButton';
import EditButton from './Lecon/Buttons/EditButton';

import Chapitre1 from './Chapitres/Chapitre1/Chapitre1';
import Chapitre2 from './Chapitres/Chapitre2/Chapitre2';
import Chapitre3 from './Chapitres/Chapitre3/Chapitre3';
import Chapitre4 from './Chapitres/Chapitre4/Chapitre4';
import Chapitre5 from './Chapitres/Chapitre5/Chapitre5';
import Chapitre6 from './Chapitres/Chapitre6/Chapitre6';
import Chapitre7 from './Chapitres/Chapitre7/Chapitre7';

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
        // Si le tableau contient de la data
          <ul className="container-fluid cours-container">
            {this.state.data.map((infos, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div className="col-md-2">
                    <h1>{infos.date_lecon}</h1>
                  </div>
                  <div className="col-md-8">
                    <h1>{infos.titre_lecon}</h1>
                    <Chapitre1 infos={infos} url={this.state.url}/>

                    {infos.chapitres.chapitre_2 &&
                      <div>
                        <Chapitre2 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_3 &&
                      <div>
                        <Chapitre3 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_4 &&
                      <div>
                        <Chapitre4 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_5 &&
                      <div>
                        <Chapitre5 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_6 &&
                      <div>
                        <Chapitre6 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_7 &&
                      <div>
                        <Chapitre7 infos={infos} url={this.state.url}/>
                      </div>
                    }
                    <p>{infos.liens}</p>
                  </div>
                  <div className="col-md-2 d-flex">
                    <EditButton id={infos._id} url={this.state.url} infos={infos} />
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
