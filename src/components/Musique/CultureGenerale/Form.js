import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div className="container-fluid">
        <form action="http://localhost:3005/musique/culture-generale/add" method="POST">
          <div className="form-group">
            <label for="date">Date</label>
            <input name="date" type="text" className="form-control" id="date"
                   aria-describedby="date" placeholder="Là tu mets la date"/>
          </div>
          <div className="form-group">
            <label for="titre">Titre</label>
            <input name="titre" type="text" className="form-control" id="titre"
                   aria-describedby="titre" placeholder="Là un titre"/>
          </div>
          <div className="form-group">
            <label for="cours">Cours</label>
            <textarea name="article" type="text" className="form-control" id="cours"
                      aria-describedby="cours" placeholder="Ici t'écris ton bail"/>
          </div>
          <div className="form-group">
            <label for="liens">Liens</label>
            <input name="liens" type="text" className="form-control" id="liens"
                   aria-describedby="liens" placeholder="Et ça c'est pour les liens"/>
          </div>
          <button type="submit" className="btn btn-light">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default Form;
