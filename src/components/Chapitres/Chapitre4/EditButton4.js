import React, { Component } from 'react';
import Modal4 from './Modal4';

class EditButton4 extends Component {
  render() {

    const chapitre4 = this.props.infos.chapitres.chapitre_4;

    return (
      <div>
        <Modal4
          url={this.props.url}
          id={this.props.infos._id}
          chapitre={chapitre4.nom}
          soustitre={chapitre4.soustitre.nom}
          cours={chapitre4.soustitre.cours}
          soustitre2={chapitre4.soustitre_2 && chapitre4.soustitre_2.nom}
          cours2={chapitre4.soustitre_2 && chapitre4.soustitre_2.cours}
          soustitre3={chapitre4.soustitre_3 && chapitre4.soustitre_3.nom}
          cours3={chapitre4.soustitre_3 && chapitre4.soustitre_3.cours}
          soustitre4={chapitre4.soustitre_4 && chapitre4.soustitre_4.nom}
          cours4={chapitre4.soustitre_4 && chapitre4.soustitre_4.cours}
          soustitre5={chapitre4.soustitre_5 && chapitre4.soustitre_5.nom}
          cours5={chapitre4.soustitre_5 && chapitre4.soustitre_5.cours}
        />
      </div>
    );
  }
}

export default EditButton4;
