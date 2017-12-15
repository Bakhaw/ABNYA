import React, { Component } from 'react';
import Modal3 from './Modal3';

class EditButton3 extends Component {
  render() {

    const chapitre3 = this.props.infos.chapitres.chapitre_3;

    return (
      <div>
        <Modal3
          url={this.props.url}
          id={this.props.infos._id}
          chapitre={chapitre3.nom}
          soustitre={chapitre3.soustitre.nom}
          cours={chapitre3.soustitre.cours}
          soustitre2={chapitre3.soustitre_2 && chapitre3.soustitre_2.nom}
          cours2={chapitre3.soustitre_2 && chapitre3.soustitre_2.cours}
          soustitre3={chapitre3.soustitre_3 && chapitre3.soustitre_3.nom}
          cours3={chapitre3.soustitre_3 && chapitre3.soustitre_3.cours}
          soustitre4={chapitre3.soustitre_4 && chapitre3.soustitre_4.nom}
          cours4={chapitre3.soustitre_4 && chapitre3.soustitre_4.cours}
          soustitre5={chapitre3.soustitre_5 && chapitre3.soustitre_5.nom}
          cours5={chapitre3.soustitre_5 && chapitre3.soustitre_5.cours}
        />
      </div>
    );
  }
}

export default EditButton3;
