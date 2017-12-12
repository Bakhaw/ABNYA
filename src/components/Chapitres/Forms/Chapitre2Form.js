import React, { Component } from 'react';
import ChapitreForm from '../../Forms/ChapitreForm';

class Chapitre2Form extends Component {

  render() {
    return (
      <div>
        <ChapitreForm chapitre="chapitres.chapitre_2.nom"
                      soustitre="chapitres.chapitre_2.soustitre.nom"
                      cours="chapitres.chapitre_2.soustitre.cours"
                      soustitre2="chapitres.chapitre_2.soustitre_2.nom"
                      cours2="chapitres.chapitre_2.soustitre_2.cours"
                      soustitre3="chapitres.chapitre_2.soustitre_3.nom"
                      cours3="chapitres.chapitre_2.soustitre_3.cours"
                      soustitre4="chapitres.chapitre_2.soustitre_4.nom"
                      cours4="chapitres.chapitre_2.soustitre_4.cours"
                      soustitre5="chapitres.chapitre_2.soustitre_5.nom"
                      cours5="chapitres.chapitre_2.soustitre_5.cours"/>
      </div>
    );
  }

}

export default Chapitre2Form;