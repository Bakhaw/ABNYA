import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/musique/culture-rr')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((cultureRR, index) =>
              <li key={index}>
                <p>Date: {cultureRR.date}</p>
                <p>Titre: {cultureRR.titre}</p>
                <p>Cours: {cultureRR.article}</p>
                <p>Liens: {cultureRR.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
