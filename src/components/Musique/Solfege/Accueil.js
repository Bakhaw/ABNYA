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
    fetch('http://localhost:3005/musique/solfege')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul className="container-fluid">
            {this.state.data.map((solfege, index) =>
              <li key={index} className="d-flex">
                <div>
                  <p>Date: {solfege.date}</p>
                  <p>Titre: {solfege.titre}</p>
                  <p>Cours: {solfege.article}</p>
                  <p>Liens: {solfege.liens}</p>
                </div>
                <div>
                  <EditForm id={solfege._id} date={solfege.date}
                            titre={solfege.titre} article={solfege.article}
                            liens={solfege.liens}/>
                  <DeleteButton id={solfege._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
