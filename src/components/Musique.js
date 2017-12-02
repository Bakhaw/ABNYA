import React, { Component } from 'react';

class Musique extends Component {

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
              {musique.titre}
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default Musique;
