import React, { Component } from 'react';
import Modal2 from './Modal2';

class EditButton2 extends Component {

  render() {

    return (
      <div>
          <Modal2
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={this.props.infos.chapitres.chapitre_2.nom}
            soustitre={this.props.infos.chapitres.chapitre_2.soustitre.nom}
            cours={this.props.infos.chapitres.chapitre_2.soustitre.cours}
            soustitre2={this.props.infos.chapitres.chapitre_2.soustitre_2.nom}
            cours2={this.props.infos.chapitres.chapitre_2.soustitre_2.cours}
            soustitre3={this.props.infos.chapitres.chapitre_2.soustitre_3.nom}
            cours3={this.props.infos.chapitres.chapitre_2.soustitre_3.cours}
            soustitre4={this.props.infos.chapitres.chapitre_2.soustitre_4.nom}
            cours4={this.props.infos.chapitres.chapitre_2.soustitre_4.cours}
            soustitre5={this.props.infos.chapitres.chapitre_2.soustitre_5.nom}
            cours5={this.props.infos.chapitres.chapitre_2.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton2;
