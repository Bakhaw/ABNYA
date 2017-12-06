import React, { Component } from 'react';

class Form extends Component {
  
  state = {
    url: `http://localhost:3005/${this.props.url}`
  };

  render() {
    return <div className="container-fluid">
        <form action={`${this.state.url}/add`} method="POST">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input name="date" type="text" className="form-control" id="date" aria-describedby="date" placeholder="Là tu mets la date" />
          </div>
          <div className="form-group">
            <label htmlFor="titre">Titre</label>
            <input name="titre" type="text" className="form-control" id="titre" aria-describedby="titre" placeholder="Là un titre" />
          </div>
          <div className="form-group">
            <label htmlFor="soustitre">Sous-Titre</label>
            <input name="soustitre" type="text" className="form-control" id="titre"
                   aria-describedby="soustitre" placeholder="Le fameux sous-titre" />
          </div>
          <div className="form-group">
            <label htmlFor="cours">Cours</label>
            <textarea name="article" type="text" className="form-control" id="cours" aria-describedby="cours" placeholder="Ici t'écris ton bail" />
          </div>
          <div className="form-group">
            <label htmlFor="liens">Liens</label>
            <input name="liens" type="text" className="form-control" id="liens" aria-describedby="liens" placeholder="Et ça c'est pour les liens" />
          </div>
          <button type="submit" className="btn btn-light">
            Ajouter
          </button>
        </form>
      </div>;
  }
}

export default Form;
