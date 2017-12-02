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
    fetch('http://localhost:3005/musique/culture-rr')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul className="container-fluid">
            {this.state.data.map((cultureRR, index) =>
              <li key={index} className="d-flex">
                <div>
                  <p>Date: {cultureRR.date}</p>
                  <p>Titre: {cultureRR.titre}</p>
                  <p>Cours: {cultureRR.article}</p>
                  <p>Liens: {cultureRR.liens}</p>
                </div>
                <div>
                  <EditForm id={cultureRR._id} date={cultureRR.date}
                            titre={cultureRR.titre} article={cultureRR.article}
                            liens={cultureRR.liens}/>
                  <DeleteButton id={cultureRR._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
