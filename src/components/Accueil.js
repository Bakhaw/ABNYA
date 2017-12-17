import React, { Component } from 'react';

import Navbar2 from './Navbars/Navbar2';

import DeleteButton from './Buttons/DeleteButton';

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
                    <h4>Chapitre 1</h4>
                    <Chapitre1 infos={infos} url={this.state.url}/>

                    {infos.chapitres.chapitre_2 &&
                      <div>
                        <h4>Chapitre 2</h4>
                        <Chapitre2 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_3 &&
                      <div>
                        <h4>Chapitre 3</h4>
                        <Chapitre3 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_4 &&
                      <div>
                        <h4>Chapitre 4</h4>
                        <Chapitre4 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_5 &&
                      <div>
                        <h4>Chapitre 5</h4>
                        <Chapitre5 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_6 &&
                      <div>
                        <h4>Chapitre 6</h4>
                        <Chapitre6 infos={infos} url={this.state.url}/>
                      </div>
                    }

                    {infos.chapitres.chapitre_7 &&
                      <div>
                        <h4>Chapitre 7</h4>
                        <Chapitre7 infos={infos} url={this.state.url}/>
                      </div>
                    }
                  </div>
                  <div className="col-md-2 d-flex">
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
