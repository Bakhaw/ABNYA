import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/musique/analyse')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((analyse, index) =>
              <li key={index}>
                <p>Date: {analyse.date}</p>
                <p>Titre: {analyse.titre}</p>
                <p>Cours: {analyse.article}</p>
                <p>Liens: {analyse.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
