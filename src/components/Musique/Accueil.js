import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/musique')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((musique, index) =>
              <li key={index}>
                <p>Date: {musique.date}</p>
                <p>Titre: {musique.titre}</p>
                <p>Cours: {musique.article}</p>
                <p>Liens: {musique.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
