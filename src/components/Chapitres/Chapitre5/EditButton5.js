import React, { Component } from 'react';
import Modal5 from './Modal5';

class EditButton5 extends Component {

  render() {

    return (
      <div>
          <Modal5
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={this.props.infos.chapitres.chapitre_5.nom}
            soustitre={this.props.infos.chapitres.chapitre_5.soustitre.nom}
            cours={this.props.infos.chapitres.chapitre_5.soustitre.cours}
            soustitre2={this.props.infos.chapitres.chapitre_5.soustitre_2.nom}
            cours2={this.props.infos.chapitres.chapitre_5.soustitre_2.cours}
            soustitre3={this.props.infos.chapitres.chapitre_5.soustitre_3.nom}
            cours3={this.props.infos.chapitres.chapitre_5.soustitre_3.cours}
            soustitre4={this.props.infos.chapitres.chapitre_5.soustitre_4.nom}
            cours4={this.props.infos.chapitres.chapitre_5.soustitre_4.cours}
            soustitre5={this.props.infos.chapitres.chapitre_5.soustitre_5.nom}
            cours5={this.props.infos.chapitres.chapitre_5.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton5;
