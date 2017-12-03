import React, { Component } from 'react';
import DeleteButton from '../../DeleteButton';
import EditForm from '../../EditForm';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:3005/musique/solfege',
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
            {this.state.data.map((solfege, index) =>
              <li key={index}>
                <div className="d-flex">
                  <div className="col-md-2">
                    <p>Date: {solfege.date}</p>
                    <p>Titre: {solfege.titre}</p>
                  </div>
                  <div className="col-md-8">
                    <p>Cours: {solfege.article}</p>
                    <p>Liens: {solfege.liens}</p>
                  </div>
                  <div className="col-md-2">
                    <EditForm id={solfege._id} date={solfege.date}
                              titre={solfege.titre} article={solfege.article}
                              liens={solfege.liens} url={this.state.url}/>
                    <DeleteButton id={solfege._id} url={this.state.url}/>
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
