import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/musique/culture-generale')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((cultureGenerale, index) =>
              <li key={index}>
                <p>Date: {cultureGenerale.date}</p>
                <p>Titre: {cultureGenerale.titre}</p>
                <p>Cours: {cultureGenerale.article}</p>
                <p>Liens: {cultureGenerale.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
