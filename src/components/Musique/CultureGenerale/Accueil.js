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
    fetch('http://localhost:3005/musique/culture-generale')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul className="container-fluid">
            {this.state.data.map((cultureGenerale, index) =>
              <li key={index} className="d-flex">
                <div>
                  <p>Date: {cultureGenerale.date}</p>
                  <p>Titre: {cultureGenerale.titre}</p>
                  <p>Cours: {cultureGenerale.article}</p>
                  <p>Liens: {cultureGenerale.liens}</p>
                </div>
                <div>
                  <EditForm id={cultureGenerale._id} date={cultureGenerale.date}
                            titre={cultureGenerale.titre} article={cultureGenerale.article}
                            liens={cultureGenerale.liens}/>
                  <DeleteButton id={cultureGenerale._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
