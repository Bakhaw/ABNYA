import React, { Component } from 'react';

class Danse extends Component {

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
              {danse.titre}
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default Danse;
