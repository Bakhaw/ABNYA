import React, { Component } from 'react';
import Modal2 from './Modal2';

class EditButton2 extends Component {
  render() {

    const chapitre2 = this.props.infos.chapitres.chapitre_2;

    return (
      <div>
        <Modal2
          url={this.props.url}
          id={this.props.infos._id}
          chapitre={chapitre2.nom}
          soustitre={chapitre2.soustitre.nom}
          cours={chapitre2.soustitre.cours}
          soustitre2={chapitre2.soustitre_2 && chapitre2.soustitre_2.nom}
          cours2={chapitre2.soustitre_2 && chapitre2.soustitre_2.cours}
          soustitre3={chapitre2.soustitre_3 && chapitre2.soustitre_3.nom}
          cours3={chapitre2.soustitre_3 && chapitre2.soustitre_3.cours}
          soustitre4={chapitre2.soustitre_4 && chapitre2.soustitre_4.nom}
          cours4={chapitre2.soustitre_4 && chapitre2.soustitre_4.cours}
          soustitre5={chapitre2.soustitre_5 && chapitre2.soustitre_5.nom}
          cours5={chapitre2.soustitre_5 && chapitre2.soustitre_5.cours}
        />
      </div>
    );
  }
}

export default EditButton2;
