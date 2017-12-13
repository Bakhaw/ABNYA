import React, { Component } from 'react';
import Modal from '../Forms/Modal';

class EditButton extends Component {

  render() {

    return (
      <div>
          <Modal
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={this.props.infos.chapitres.chapitre.nom}
            soustitre={this.props.infos.chapitres.chapitre.soustitre.nom}
            cours={this.props.infos.chapitres.chapitre.soustitre.cours}
            soustitre2={this.props.infos.chapitres.chapitre.soustitre_2.nom}
          />
      </div>
    );
  }
}

export default EditButton;
