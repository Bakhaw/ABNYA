import React, { Component } from 'react';
import ChapitreForm from './ChapitreForm';

class EditForm extends Component {

  render() {
    return (
      <div>
        <form action={`${this.props.url}update/${this.props.id}`} method="POST">
          <ChapitreForm chapitre={this.props.chapitre}
                      soustitre={this.props.soustitre}
                      cours={this.props.cours}/>
          <button type="submit" className="btn btn-light">
              Sauvegarder
          </button>
        </form>
      </div>
    );
  }

}

export default EditForm;
