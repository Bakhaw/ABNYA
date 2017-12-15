import React, { Component } from 'react';
import Modal6 from './Modal6';

class EditButton6 extends Component {
  render() {

    const chapitre6 = this.props.infos.chapitres.chapitre_6;

    return (
      <div>
        <Modal6
          url={this.props.url}
          id={this.props.infos._id}
          chapitre={chapitre6.nom}
          soustitre={chapitre6.soustitre.nom}
          cours={chapitre6.soustitre.cours}
          soustitre2={chapitre6.soustitre_2 && chapitre6.soustitre_2.nom}
          cours2={chapitre6.soustitre_2 && chapitre6.soustitre_2.cours}
          soustitre3={chapitre6.soustitre_3 && chapitre6.soustitre_3.nom}
          cours3={chapitre6.soustitre_3 && chapitre6.soustitre_3.cours}
          soustitre4={chapitre6.soustitre_4 && chapitre6.soustitre_4.nom}
          cours4={chapitre6.soustitre_4 && chapitre6.soustitre_4.cours}
          soustitre5={chapitre6.soustitre_5 && chapitre6.soustitre_5.nom}
          cours5={chapitre6.soustitre_5 && chapitre6.soustitre_5.cours}
        />
      </div>
    );
  }
}

export default EditButton6;
