import React, { Component } from 'react';
import Chapitre1Form from '../Chapitres/Forms/Chapitre1Form';
import Chapitre2Form from '../Chapitres/Forms/Chapitre2Form';

class EditForm extends Component {

  render() {
    return (
      <div>
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <Chapitre1Form {...this.props}/>
          <Chapitre2Form {...this.props}/>
          <button type="submit" className="btn btn-light">
              Sauvegarder
          </button>
        </form>
      </div>
    );
  }

}

export default EditForm;
