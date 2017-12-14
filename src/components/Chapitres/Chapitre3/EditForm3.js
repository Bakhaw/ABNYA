import React, { Component } from 'react';
import Chapitre3Form from './Chapitre3Form';

class EditForm3 extends Component {

  render() {
    return (
      <div>
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <Chapitre3Form {...this.props}/>
          <button type="submit" className="btn btn-light">
              Sauvegarder
          </button>
        </form>
      </div>
    );
  }

}

export default EditForm3;
