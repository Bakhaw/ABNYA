import React, { Component } from 'react';
import DeleteButton from '../../DeleteButton';
import EditForm from '../../EditForm';

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:3005/musique/culture-rr',
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
                style={{ height: '80vh' }}>
              Tu n'as toujours pas ajouté de cours ici, c'est pas très sérieux!
            </h4>
          }
          {this.state.data &&
            <ul className="container-fluid">
              {this.state.data.map((cultureRR, index) =>
                <li key={index}>
                  <div className="d-flex">
                    <div className="col-md-2">
                      <p>Date: {cultureRR.date}</p>
                      <p>Titre: {cultureRR.titre}</p>
                    </div>
                    <div className="col-md-8">
                      <p>Cours: {cultureRR.article}</p>
                      <p>Liens: {cultureRR.liens}</p>
                    </div>
                    <div className="col-md-2">
                      <EditForm id={cultureRR._id} date={cultureRR.date}
                                titre={cultureRR.titre} article={cultureRR.article}
                                liens={cultureRR.liens} url={this.state.url}/>
                      <DeleteButton id={cultureRR._id} url={this.state.url}/>
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
