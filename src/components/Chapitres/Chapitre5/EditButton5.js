import React, { Component } from 'react';
import Modal5 from './Modal5';

class EditButton5 extends Component {
  render() {

    const chapitre5 = this.props.infos.chapitres.chapitre_5;

    return (
      <div>
        <Modal5
          url={this.props.url}
          id={this.props.infos._id}
          chapitre={chapitre5.nom}
          soustitre={chapitre5.soustitre.nom}
          cours={chapitre5.soustitre.cours}
          soustitre2={chapitre5.soustitre_2 && chapitre5.soustitre_2.nom}
          cours2={chapitre5.soustitre_2 && chapitre5.soustitre_2.cours}
          soustitre3={chapitre5.soustitre_3 && chapitre5.soustitre_3.nom}
          cours3={chapitre5.soustitre_3 && chapitre5.soustitre_3.cours}
          soustitre4={chapitre5.soustitre_4 && chapitre5.soustitre_4.nom}
          cours4={chapitre5.soustitre_4 && chapitre5.soustitre_4.cours}
          soustitre5={chapitre5.soustitre_5 && chapitre5.soustitre_5.nom}
          cours5={chapitre5.soustitre_5 && chapitre5.soustitre_5.cours}
        />
      </div>
    );
  }
}

export default EditButton5;
