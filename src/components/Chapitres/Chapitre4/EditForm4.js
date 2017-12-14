import React, { Component } from 'react';
import Chapitre4Form from './Chapitre4Form';

class EditForm4 extends Component {

  render() {
    return (
      <div>
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <Chapitre4Form {...this.props}/>
          <button type="submit" className="btn btn-light">
              Sauvegarder
          </button>
        </form>
      </div>
    );
  }

}

export default EditForm4;
