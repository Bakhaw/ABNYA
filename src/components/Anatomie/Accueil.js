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
              <li key={index}>
                <div className="d-flex flex-nowrap flex-row justify-content-start">
                  <div className="col-md-2">
                    <p>Date: {anat.date}</p>
                    <p>Titre: {anat.titre}</p>
                  </div>
                  <div className="col-md-8">
                    <p>Cours: {anat.article}</p>
                    <p>Liens: {anat.liens}</p>
                  </div>
                  <div className="col-md-2">
                    <EditForm id={anat._id} date={anat.date} titre={anat.titre}
                              article={anat.article} liens={anat.liens}/>
                    <DeleteButton id={anat._id}/>
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
