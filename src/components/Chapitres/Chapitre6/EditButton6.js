import React, { Component } from 'react';
import Modal6 from './Modal6';

class EditButton6 extends Component {

  render() {

    return (
      <div>
          <Modal6
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={this.props.infos.chapitres.chapitre_6.nom}
            soustitre={this.props.infos.chapitres.chapitre_6.soustitre.nom}
            cours={this.props.infos.chapitres.chapitre_6.soustitre.cours}
            soustitre2={this.props.infos.chapitres.chapitre_6.soustitre_2.nom}
            cours2={this.props.infos.chapitres.chapitre_6.soustitre_2.cours}
            soustitre3={this.props.infos.chapitres.chapitre_6.soustitre_3.nom}
            cours3={this.props.infos.chapitres.chapitre_6.soustitre_3.cours}
            soustitre4={this.props.infos.chapitres.chapitre_6.soustitre_4.nom}
            cours4={this.props.infos.chapitres.chapitre_6.soustitre_4.cours}
            soustitre5={this.props.infos.chapitres.chapitre_6.soustitre_5.nom}
            cours5={this.props.infos.chapitres.chapitre_6.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton6;
