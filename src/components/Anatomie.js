import React, { Component } from 'react';

class Anatomie extends Component {

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
              {anat.titre}
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default Anatomie;
