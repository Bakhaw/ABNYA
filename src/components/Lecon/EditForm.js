import React, { Component } from 'react';

class EditForm extends Component {

  render() {
    return (
      <div className="form-group">
        <form action={`${this.props.url}update/${this.props.id}`} method="POST" className="d-flex">
        <div className="col-md-6">
          <label>Date</label>
          <input className="form-control" type="text" name="date_lecon"
                 placeholder="Date de la leçon" defaultValue={this.props.date}/>
          <label>Leçon</label>
          <input className="form-control" type="text" name="titre_lecon"
                 placeholder="Titre de la leçon" defaultValue={this.props.titre}/>
        </div>
        <div className="col-md-6">
          <label>Liens</label>
          <input className="form-control" type="text" name="liens"
                 placeholder="Et là tu met tes liens" defaultValue={this.props.liens}/>
          <button type="submit" className="btn btn-secondary">
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>
        </div>
        </form>
      </div>
    );
  }

}

export default EditForm;
