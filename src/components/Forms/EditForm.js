import React, { Component } from 'react';
import ChapitreForm from './ChapitreForm';

class EditForm extends Component {

  state = {
    chapitre2: false,
    chapitre3: false,
    chapitre4: false,
    chapitre5: false,
    chapitre6: false,
  }

  displayChapitre2 = () => {
    this.setState({
      chapitre2: !this.state.chapitre2,
    });
  }

  displayChapitre3 = () => {
    this.setState({
      chapitre3: !this.state.chapitre3,
    });
  }

  displayChapitre4 = () => {
    this.setState({
      chapitre4: !this.state.chapitre4,
    });
  }

  displayChapitre5 = () => {
    this.setState({
      chapitre5: !this.state.chapitre5,
    });
  }

  displayChapitre6 = () => {
    this.setState({
      chapitre6: !this.state.chapitre6,
    });
  }

  render() {

    return (
      <div className="containter-fluid">
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <div className="form-group">
            <label>Date</label>
            <input name="date_lecon" type="text" className="form-control" defaultValue={this.props.date} placeholder="Là tu mets la date" />
          </div>
          <div className="form-group">
            <label>Titre</label>
            <input name="titre_lecon" type="text" className="form-control" defaultValue={this.props.titre} placeholder="Là un titre" />
          </div>
          <div className="form-group">
            <label>Nom du Chapitre</label>
            <input name="chapitres.chapitre.nom" type="text" className="form-control"
                   defaultValue={this.props.chapitre} placeholder="Nom du chapitre" />
          </div>
          <div className="form-group">
            <label>Sous-Titre</label>
            <textarea name="chapitres.chapitre.soustitre.nom" type="text" className="form-control"
                      defaultValue={this.props.soustitre} placeholder="Nom du sous-titre" />
          </div>
          <div className="form-group">
            <label>Cours</label>
            <textarea name="chapitres.chapitre.soustitre.cours" type="text" className="form-control"
                      defaultValue={this.props.cours} placeholder="Cours" />
          </div>
          <div className="form-group">
            <label>Liens</label>
            <input name="liens" type="text" className="form-control"
                   defaultValue={this.props.liens} placeholder="Et ça c'est pour les liens" />
          </div>

          <p onClick={this.displayChapitre2} className="text-primary displayFormButton">
            + Ajouter un 2e chapitre
          </p>

          {this.state.chapitre2 &&
            <div>
              <ChapitreForm chapitre="chapitres.chapitre_2.nom"
                soustitre="chapitres.chapitre_2.soustitre.nom"
                cours="chapitres.chapitre_2.soustitre.cours"/>
              <p onClick={this.displayChapitre3} className="text-primary displayFormButton">
                + Ajouter un 3e chapitre
              </p>
            </div>
          }

          {this.state.chapitre3 &&
            <div>
              <ChapitreForm chapitre="chapitres.chapitre_3.nom"
                        soustitre="chapitres.chapitre_3.soustitre.nom"
                        cours="chapitres.chapitre_3.soustitre.cours"/>
              <p onClick={this.displayChapitre4} className="text-primary displayFormButton">
                + Ajouter un 4e chapitre
              </p>
           </div>
          }

          {this.state.chapitre4 &&
            <div>
              <ChapitreForm chapitre="chapitres.chapitre_4.nom"
                        soustitre="chapitres.chapitre_4.soustitre.nom"
                        cours="chapitres.chapitre_4.soustitre.cours"/>
              <p onClick={this.displayChapitre5} className="text-primary displayFormButton">
                + Ajouter un 5e chapitre
              </p>
           </div>
          }

          {this.state.chapitre5 &&
            <div>
              <ChapitreForm chapitre="chapitres.chapitre_5.nom"
                        soustitre="chapitres.chapitre_5.soustitre.nom"
                        cours="chapitres.chapitre_5.soustitre.cours"/>
              <p onClick={this.displayChapitre6} className="text-primary displayFormButton">
                + Ajouter un 6e chapitre
              </p>
           </div>
          }

          {this.state.chapitre6 &&
            <div>
              <ChapitreForm chapitre="chapitres.chapitre_6.nom"
                        soustitre="chapitres.chapitre_6.soustitre.nom"
                        cours="chapitres.chapitre_6.soustitre.cours"/>
           </div>
          }

          <button type="submit" className="btn btn-light">
            Sauvegarder
          </button>
        </form>
      </div>
    )
  }

}

export default EditForm;
