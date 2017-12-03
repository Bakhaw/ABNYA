import React, { Component } from 'react';
import DeleteButton from '../../DeleteButton';
import EditForm from '../../EditForm';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:3005/musique/culture-generale',
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
            {this.state.data.map((cultureGenerale, index) =>
              <li key={index}>
                <div className="d-flex">
                  <div className="col-md-2">
                    <p>Date: {cultureGenerale.date}</p>
                    <p>Titre: {cultureGenerale.titre}</p>
                  </div>
                  <div className="col-md-8">
                    <p>Cours: {cultureGenerale.article}</p>
                    <p>Liens: {cultureGenerale.liens}</p>
                  </div>
                  <div className="col-md-2">
                    <EditForm id={cultureGenerale._id} date={cultureGenerale.date}
                              titre={cultureGenerale.titre} article={cultureGenerale.article}
                              liens={cultureGenerale.liens} url={this.state.url}/>
                    <DeleteButton id={cultureGenerale._id} url={this.state.url}/>
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
