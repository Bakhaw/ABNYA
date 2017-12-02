import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditForm from './EditForm';

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
          <ul className="container-fluid">
            {this.state.data.map((danse, index) =>
              <li key={index} className="d-flex">
                <div>
                  <p>Date: {danse.date}</p>
                  <p>Titre: {danse.titre}</p>
                  <p>Cours: {danse.article}</p>
                  <p>Liens: {danse.liens}</p>
                </div>
                <div>
                  <EditForm id={danse._id} date={danse.date} titre={danse.titre}
                            article={danse.article} liens={danse.liens}/>
                  <DeleteButton id={danse._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
