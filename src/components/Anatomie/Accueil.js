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
    fetch('http://localhost:3005/anatomie')
      .then(data => data.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
        <div>
          <ul className="container-fluid">
            {this.state.data.map((anat, index) =>
              <li key={index} className="d-flex">
                <div>
                  <p>Date: {anat.date}</p>
                  <p>Titre: {anat.titre}</p>
                  <p>Cours: {anat.article}</p>
                  <p>Liens: {anat.liens}</p>
                </div>
                <div>
                  <EditForm id={anat._id} date={anat.date} titre={anat.titre} article={anat.article}
                            liens={anat.liens}/>
                  <DeleteButton id={anat._id}/>
                </div>
              </li>
            )}
          </ul>
        </div>
    );
  }

}

export default Accueil;
