import React, { Component } from "react";
import DeleteButton from "./Buttons/DeleteButton";
import EditButton from "./Buttons/EditButton";
import Navbar2 from "./Navbars/Navbar2";

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: `http://localhost:3005/${this.props.url}/`
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
      <div className="cours">
        <Navbar2 />
        {this.state.data.length === 0 && (
          <h4
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80vh" }}
          >
            Tu n'as toujours pas ajouté de cours ici, c'est pas très sérieux!
          </h4>
        )}
        {this.state.data && (
          <ul className="container-fluid cours-container">
            {this.state.data.map((infos, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div className="col-md-2">
                    <h1>{infos.date_lecon}</h1>
                  </div>
                  <div className="col-md-8">
                    <h2>{infos.titre_lecon}</h2>

                    {infos.chapitres.chapitre.soustitre && (
                      // Chapitre 1
                      <div>
                        <h3>{infos.chapitres.chapitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre.soustitre.nom}</h3>
                        <h3>{infos.chapitres.chapitre.soustitre.cours}</h3>
                      </div>
                      )}

                      {infos.chapitres.chapitre.soustitre_2 && (
                        <div>
                          <h3>{infos.chapitres.chapitre.soustitre_2.nom}</h3>
                          <h3>{infos.chapitres.chapitre.soustitre_2.cours}</h3>
                        </div>
                      )}

                      {infos.chapitres.chapitre.soustitre_3 && (
                        <div>
                          <h3>{infos.chapitres.chapitre.soustitre_3.nom}</h3>
                          <h3>{infos.chapitres.chapitre.soustitre_3.cours}</h3>
                        </div>
                      )}

                      {infos.chapitres.chapitre.soustitre_4 && (
                        <div>
                          <h3>{infos.chapitres.chapitre.soustitre_4.nom}</h3>
                          <h3>{infos.chapitres.chapitre.soustitre_4.cours}</h3>
                        </div>
                      )}

                      {infos.chapitres.chapitre.soustitre_5 && (
                        <div>
                          <h3>{infos.chapitres.chapitre.soustitre_5.nom}</h3>
                          <h3>{infos.chapitres.chapitre.soustitre_5.cours}</h3>
                        </div>
                      )}
                    <hr />

                    {infos.chapitres.chapitre_2 && (
                      // Chapitre 2
                      <div>
                        <h3>{infos.chapitres.chapitre_2.nom}</h3>

                        <h3>{infos.chapitres.chapitre_2.soustitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre_2.soustitre.cours}</h3>
                      </div>
                    )}
                    <hr />

                    {infos.chapitres.chapitre_3 && (
                      // Chapitre 3
                      <div>
                        <h3>{infos.chapitres.chapitre_3.nom}</h3>

                        <h3>{infos.chapitres.chapitre_3.soustitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre_3.soustitre.cours}</h3>
                      </div>
                    )}
                    <hr />

                    {infos.chapitres.chapitre_4 && (
                      // Chapitre 4
                      <div>
                        <h3>{infos.chapitres.chapitre_4.nom}</h3>

                        <h3>{infos.chapitres.chapitre_4.soustitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre_4.soustitre.cours}</h3>
                      </div>
                    )}
                    <hr />

                    {infos.chapitres.chapitre_5 && (
                      // Chapitre 5
                      <div>
                        <h3>{infos.chapitres.chapitre_5.nom}</h3>

                        <h3>{infos.chapitres.chapitre_5.soustitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre_5.soustitre.cours}</h3>
                      </div>
                    )}
                    <hr />

                    {infos.chapitres.chapitre_6 && (
                      // Chapitre 6
                      <div>
                        <h3>{infos.chapitres.chapitre_6.nom}</h3>

                        <h3>{infos.chapitres.chapitre_6.soustitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre_6.soustitre.cours}</h3>
                      </div>
                    )}
                    <hr />

                    {infos.chapitres.chapitre_7 && (
                      // Chapitre 7
                      <div>
                        <h3>{infos.chapitres.chapitre_7.nom}</h3>

                        <h3>{infos.chapitres.chapitre_7.soustitre.nom}</h3>

                        <h3>{infos.chapitres.chapitre_7.soustitre.cours}</h3>
                      </div>
                    )}
                    <hr />

                  </div>
                  <div className="col-md-2 d-flex">
                    <EditButton infos={infos} url={this.state.url} />
                    <DeleteButton id={infos._id} url={this.state.url} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Accueil;
