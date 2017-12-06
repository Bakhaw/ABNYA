import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import Navbar2 from "./Navbar2";

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: `http://localhost:3005/${this.props.url}/`,
    };
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(data => data.json())
      .then(data => this.setState({ data }));
      console.log(this.state.url);
  }
  
  render() {
    return (
        <div>
          <Navbar2 />
          {this.state.data.length === 0 &&
            <h4 className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '80vh' }}>
              Tu n'as toujours pas ajouté de cours ici, c'est pas très sérieux!
            </h4>
          }
          {this.state.data &&
            <ul className="container-fluid cours-container">
              {this.state.data.map((infos, index) =>
                <li key={index}>
                  <div className="d-flex">
                    <div className="col-md-2">
                      <p>{infos.date}</p>
                      <p>{infos.titre}</p>
                      <p>{infos.soustitre}</p>
                    </div>
                    <div className="col-md-8">
                      <p>{infos.article}</p>
                      <p>Liens: {infos.liens}</p>
                    </div>
                    <div className="col-md-2 d-flex">
                      <EditButton infos={infos} url={this.state.url} />
                      <DeleteButton id={infos._id} url={this.state.url} />
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
