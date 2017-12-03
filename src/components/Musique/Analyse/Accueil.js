import React, { Component } from 'react';
import DeleteButton from '../../DeleteButton';
import EditForm from '../../EditForm';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:3005/musique/analyse/',
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
          <ul className="container-fluid">
            {this.state.data.map((analyse, index) =>
              <li key={index}>
                <div className="d-flex">
                  <div className="col-md-2">
                    <p>Date: {analyse.date}</p>
                    <p>Titre: {analyse.titre}</p>
                  </div>
                  <div className="col-md-8">
                    <p>Cours: {analyse.article}</p>
                    <p>Liens: {analyse.liens}</p>
                  </div>
                  <div className="col-md-2">
                    <EditForm id={analyse._id} date={analyse.date} titre={analyse.titre}
                              article={analyse.article} liens={analyse.liens}
                              url={this.state.url}/>
                    <DeleteButton id={analyse._id} url={this.state.url}/>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
