import React, { Component } from 'react';
import Modal3 from './Modal3';

class EditButton3 extends Component {

  render() {

    return (
      <div>
          <Modal3
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={this.props.infos.chapitres.chapitre_3.nom}
            soustitre={this.props.infos.chapitres.chapitre_3.soustitre.nom}
            cours={this.props.infos.chapitres.chapitre_3.soustitre.cours}
            soustitre2={this.props.infos.chapitres.chapitre_3.soustitre_2.nom}
            cours2={this.props.infos.chapitres.chapitre_3.soustitre_2.cours}
            soustitre3={this.props.infos.chapitres.chapitre_3.soustitre_3.nom}
            cours3={this.props.infos.chapitres.chapitre_3.soustitre_3.cours}
            soustitre4={this.props.infos.chapitres.chapitre_3.soustitre_4.nom}
            cours4={this.props.infos.chapitres.chapitre_3.soustitre_4.cours}
            soustitre5={this.props.infos.chapitres.chapitre_3.soustitre_5.nom}
            cours5={this.props.infos.chapitres.chapitre_3.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton3;
