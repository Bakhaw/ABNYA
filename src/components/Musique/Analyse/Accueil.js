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
    fetch('http://localhost:3005/musique/analyse')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul className="container-fluid">
            {this.state.data.map((analyse, index) =>
              <li key={index} className="d-flex">
                <div>
                  <p>Date: {analyse.date}</p>
                  <p>Titre: {analyse.titre}</p>
                  <p>Cours: {analyse.article}</p>
                  <p>Liens: {analyse.liens}</p>
                </div>
                <div>
                  <EditForm id={analyse._id} date={analyse.date} titre={analyse.titre}
                            article={analyse.article} liens={analyse.liens}/>
                  <DeleteButton id={analyse._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
