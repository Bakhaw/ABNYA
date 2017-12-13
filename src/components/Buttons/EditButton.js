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
            cours2={this.props.infos.chapitres.chapitre.soustitre_2.cours}
            soustitre3={this.props.infos.chapitres.chapitre.soustitre_3.nom}
            cours3={this.props.infos.chapitres.chapitre.soustitre_3.cours}
            soustitre4={this.props.infos.chapitres.chapitre.soustitre_4.nom}
            cours4={this.props.infos.chapitres.chapitre.soustitre_4.cours}
            soustitre5={this.props.infos.chapitres.chapitre.soustitre_5.nom}
            cours5={this.props.infos.chapitres.chapitre.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton;
