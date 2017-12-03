import React, { Component } from 'react';
import DeleteButton from '../DeleteButton';
import EditForm from '../EditForm';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:3005/anatomie/',
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
            <h4 className="d-flex justify-content-center align-items-center"
                style={{ height: '85vh' }}>
              Tu n'as toujours pas ajouté de cours ici, c'est pas très sérieux!
            </h4>
          }
          {this.state.data &&
            <ul className="container-fluid">
              {this.state.data.map((anat, index) =>
                <li key={index}>
                  <div className="d-flex">
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
                                article={anat.article} liens={anat.liens} url={this.state.url}/>
                      <DeleteButton id={anat._id} url={this.state.url}/>
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
