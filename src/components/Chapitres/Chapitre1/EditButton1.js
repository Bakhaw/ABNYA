import React, { Component } from 'react';
import Modal1 from './Modal1';

class EditButton1 extends Component {
  render() {

    const chapitre = this.props.infos.chapitres.chapitre;

    return (
      <div>
          <Modal1
            url={this.props.url}
            id={this.props.infos._id}
            chapitre={chapitre.nom}
            soustitre={chapitre.soustitre.nom}
            cours={chapitre.soustitre.cours}
            soustitre2={chapitre.soustitre_2 && chapitre.soustitre_2.nom}
            cours2={chapitre.soustitre_2 && chapitre.soustitre_2.cours}
            soustitre3={chapitre.soustitre_3 && chapitre.soustitre_3.nom}
            cours3={chapitre.soustitre_3 && chapitre.soustitre_3.cours}
            soustitre4={chapitre.soustitre_4 && chapitre.soustitre_4.nom}
            cours4={chapitre.soustitre_4 && chapitre.soustitre_4.cours}
            soustitre5={chapitre.soustitre_5 && chapitre.soustitre_5.nom}
            cours5={chapitre.soustitre_5 && chapitre.soustitre_5.cours}
          />
      </div>
    );
  }
}

export default EditButton1;
