import React, { Component } from 'react';
import DeleteButton from '../DeleteButton';
import EditForm from '../EditForm';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:3005/danse/',
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          {this.state.data.length === 0 &&
            <h4 className="d-flex justify-content-center align-items-center">
              Tu n'as toujours pas ajouté de cours ici, c'est pas très sérieux!
            </h4>
          }
          {this.state.data &&
            <ul className="container-fluid cours-container">
              {this.state.data.map((danse, index) =>
                <li key={index}>
                  <div className="d-flex">
                    <div className="col-md-2">
                      <p>Date: {danse.date}</p>
                      <p>Titre: {danse.titre}</p>
                    </div>
                    <div className="col-md-8">
                      <p>Cours: {danse.article}</p>
                      <p>Liens: {danse.liens}</p>
                    </div>
                    <div className="col-md-2">
                      <EditForm id={danse._id} date={danse.date} titre={danse.titre}
                                article={danse.article} liens={danse.liens} url={this.state.url}/>
                      <DeleteButton id={danse._id} url={this.state.url}/>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          }
        </div>
    );
  }

}

export default Accueil;
