import React, { Component } from 'react';

class EditForm extends Component {

  render() {
    return (
      <div className="containter-fluid">
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <div className="form-group">
            <label>Date</label>
            <input name="date" type="text" className="form-control" defaultValue={this.props.date} placeholder="Là tu mets la date" />
          </div>
          <div className="form-group">
            <label>Titre</label>
            <input name="titre" type="text" className="form-control" defaultValue={this.props.titre} placeholder="Là un titre" />
          </div>
          <div className="form-group">
            <label>Sous-Titre</label>
            <input name="soustitre" type="text" className="form-control" defaultValue={this.props.soustitre} placeholder="Là le fameux sous-titre" />
          </div>
          <div className="form-group">
            <label>Cours</label>
            <textarea name="article" type="text" className="form-control" defaultValue={this.props.article} placeholder="Ici t'écris ton bail" />
          </div>
          <div className="form-group">
            <label>Liens</label>
            <input name="liens" type="text" className="form-control" defaultValue={this.props.liens} placeholder="Et ça c'est pour les liens" />
          </div>
          <button type="submit" className="btn btn-light">
            Sauvegarder
          </button>

        </form>
      </div>
    )
  }

}

export default EditForm;
