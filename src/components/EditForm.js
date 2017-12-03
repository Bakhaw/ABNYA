import React, { Component } from 'react';

class EditForm extends Component {

  render() {
    return (
      <div>
        <button type="button" className="btn btn-light" data-toggle="modal"
                data-target="#exampleModal">
          Modifier
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modifier</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action={`${this.props.url}/update/${this.props.id}`}
                      method="POST">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input name="date" type="text" className="form-control" id="date"
                           aria-describedby="date" defaultValue={this.props.date}
                           placeholder="Là tu mets la date"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="titre">Titre</label>
                    <input name="titre" type="text" className="form-control" id="titre"
                           aria-describedby="titre" defaultValue={this.props.titre}
                           placeholder="Là un titre"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="cours">Cours</label>
                    <textarea name="article" type="text" className="form-control" id="cours"
                              aria-describedby="cours" defaultValue={this.props.article}
                              placeholder="Ici t'écris ton bail"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="liens">Liens</label>
                    <input name="liens" type="text" className="form-control" id="liens"
                           aria-describedby="liens" defaultValue={this.props.liens}
                           placeholder="Et ça c'est pour les liens"/>
                  </div>
                  <button type="submit" className="btn btn-light">Sauvegarder</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default EditForm;
