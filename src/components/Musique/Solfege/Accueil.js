import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/musique/solfege')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((solfege, index) =>
              <li key={index}>
                <p>Date: {solfege.date}</p>
                <p>Titre: {solfege.titre}</p>
                <p>Cours: {solfege.article}</p>
                <p>Liens: {solfege.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
