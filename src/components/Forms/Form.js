import React, { Component } from 'react';
import Chapitre1Form from '../Chapitres/Forms/Chapitre1Form';
import Chapitre2Form from '../Chapitres/Forms/Chapitre2Form';
import Chapitre3Form from '../Chapitres/Forms/Chapitre3Form';
import Chapitre4Form from '../Chapitres/Forms/Chapitre4Form';
import Chapitre5Form from '../Chapitres/Forms/Chapitre5Form';
import Chapitre6Form from '../Chapitres/Forms/Chapitre6Form';
import Chapitre7Form from '../Chapitres/Forms/Chapitre7Form';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: `http://localhost:3005/${this.props.url}`,
    };
  }

  render() {

    return <div className="container-fluid">
      <form action={`${this.state.url}/add`} method="POST">
        <div className="form-group">
          <label htmlFor="date_lecon">Date</label>
          <input name="date_lecon" type="text" className="form-control"
                 id="date_lecon" aria-describedby="date_lecon" placeholder="Là tu mets la date"/>
        </div>
        <div className="form-group">
          <label htmlFor="titre_lecon">Leçon</label>
          <input name="titre_lecon" type="text" className="form-control"
                 id="titre_lecon" aria-describedby="titre_lecon" placeholder="Leçon"/>
        </div>

        <Chapitre1Form />
        <Chapitre2Form />
        <Chapitre3Form />
        <Chapitre4Form />
        <Chapitre5Form />
        <Chapitre6Form />
        <Chapitre7Form />

        <div className="form-group">
          <label htmlFor="liens">Liens</label>
          <input name="liens" type="text" className="form-control" id="liens" aria-describedby="liens" placeholder="Et ça c'est pour les liens"/>
        </div>
        <button type="submit" className="btn btn-light">
          Ajouter
        </button>
      </form>
    </div>;
  }
}

export default Form;
