import React, { Component } from 'react';
import ChapitreForm from '../../Forms/ChapitreForm';

class Chapitre1Form extends Component {

  render() {
    return (
      <div>
        <ChapitreForm chapitre="chapitres.chapitre.nom"
                      soustitre="chapitres.chapitre.soustitre.nom"
                      cours="chapitres.chapitre.soustitre.cours"
                      soustitre2="chapitres.chapitre.soustitre_2.nom"
                      cours2="chapitres.chapitre.soustitre_2.cours"
                      soustitre3="chapitres.chapitre.soustitre_3.nom"
                      cours3="chapitres.chapitre.soustitre_3.cours"
                      soustitre4="chapitres.chapitre.soustitre_4.nom"
                      cours4="chapitres.chapitre.soustitre_4.cours"
                      soustitre5="chapitres.chapitre.soustitre_5.nom"
                      cours5="chapitres.chapitre.soustitre_5.cours"/>
      </div>
    );
  }

}

export default Chapitre1Form;
