import React, { Component } from 'react';
import Modal4 from './Modal4';

class EditButton4 extends Component {

  render() {

    return (
      <div>
          <Modal4
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={this.props.infos.chapitres.chapitre_4.nom}
            soustitre={this.props.infos.chapitres.chapitre_4.soustitre.nom}
            cours={this.props.infos.chapitres.chapitre_4.soustitre.cours}
            soustitre2={this.props.infos.chapitres.chapitre_4.soustitre_2.nom}
            cours2={this.props.infos.chapitres.chapitre_4.soustitre_2.cours}
            soustitre3={this.props.infos.chapitres.chapitre_4.soustitre_3.nom}
            cours3={this.props.infos.chapitres.chapitre_4.soustitre_3.cours}
            soustitre4={this.props.infos.chapitres.chapitre_4.soustitre_4.nom}
            cours4={this.props.infos.chapitres.chapitre_4.soustitre_4.cours}
            soustitre5={this.props.infos.chapitres.chapitre_4.soustitre_5.nom}
            cours5={this.props.infos.chapitres.chapitre_4.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton4;
