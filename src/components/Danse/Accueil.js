import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/danse')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((danse, index) =>
              <li key={index}>
                <p>Date: {danse.date}</p>
                <p>Titre: {danse.titre}</p>
                <p>Cours: {danse.article}</p>
                <p>Liens: {danse.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
