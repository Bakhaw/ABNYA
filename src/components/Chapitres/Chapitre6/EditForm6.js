import React, { Component } from 'react';
import Chapitre6Form from './Chapitre6Form';

class EditForm6 extends Component {

  render() {
    return (
      <div>
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <Chapitre6Form {...this.props}/>
          <button type="submit" className="btn btn-light">
              Sauvegarder
          </button>
        </form>
      </div>
    );
  }

}

export default EditForm6;
