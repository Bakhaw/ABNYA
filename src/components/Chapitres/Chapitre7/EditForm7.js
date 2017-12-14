import React, { Component } from 'react';
import Chapitre7Form from './Chapitre7Form';

class EditForm7 extends Component {

  render() {
    return (
      <div>
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <Chapitre7Form {...this.props}/>
          <button type="submit" className="btn btn-light">
              Sauvegarder
          </button>
        </form>
      </div>
    );
  }

}

export default EditForm7;
