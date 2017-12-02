import React, { Component } from 'react';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3005/anatomie')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul>
            {this.state.data.map((anat, index) =>
              <li key={index}>
                <p>Date: {anat.date}</p>
                <p>Titre: {anat.titre}</p>
                <p>Cours: {anat.article}</p>
                <p>Liens: {anat.liens}</p>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
