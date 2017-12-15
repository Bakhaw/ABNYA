import React, { Component } from 'react';
import Modal7 from './Modal7';

class EditButton7 extends Component {
  render() {

    const chapitre7 = this.props.infos.chapitres.chapitre_7;

    return (
      <div>
        <Modal7
          url={this.props.url}
          id={this.props.infos._id}
          chapitre={chapitre7.nom}
          soustitre={chapitre7.soustitre.nom}
          cours={chapitre7.soustitre.cours}
          soustitre2={chapitre7.soustitre_2 && chapitre7.soustitre_2.nom}
          cours2={chapitre7.soustitre_2 && chapitre7.soustitre_2.cours}
          soustitre3={chapitre7.soustitre_3 && chapitre7.soustitre_3.nom}
          cours3={chapitre7.soustitre_3 && chapitre7.soustitre_3.cours}
          soustitre4={chapitre7.soustitre_4 && chapitre7.soustitre_4.nom}
          cours4={chapitre7.soustitre_4 && chapitre7.soustitre_4.cours}
          soustitre5={chapitre7.soustitre_5 && chapitre7.soustitre_5.nom}
          cours5={chapitre7.soustitre_5 && chapitre7.soustitre_5.cours}
        />
      </div>
    );
  }
}

export default EditButton7;
