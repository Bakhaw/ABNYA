import React, { Component } from 'react';
import ChapitreForm from '../../Forms/ChapitreForm';

class Chapitre5Form extends Component {

  render() {
    return (
      <div>
        <ChapitreForm chapitre="chapitres.chapitre_5.nom"
                      chapitreValue={this.props.chapitre}
                      soustitre="chapitres.chapitre_5.soustitre.nom"
                      soustitreValue={this.props.soustitre}
                      cours="chapitres.chapitre_5.soustitre.cours"
                      coursValue={this.props.cours}
                      soustitre2="chapitres.chapitre_5.soustitre_2.nom"
                      soustitre2Value={this.props.soustitre2}
                      cours2="chapitres.chapitre_5.soustitre_2.cours"
                      cours2Value={this.props.cours2}
                      soustitre3="chapitres.chapitre_5.soustitre_3.nom"
                      soustitre3Value={this.props.soustitre3}
                      cours3="chapitres.chapitre_5.soustitre_3.cours"
                      cours3Value={this.props.cours3}
                      soustitre4="chapitres.chapitre_5.soustitre_4.nom"
                      soustitre4Value={this.props.soustitre4}
                      cours4="chapitres.chapitre_5.soustitre_4.cours"
                      cours4Value={this.props.cours4}
                      soustitre5="chapitres.chapitre_5.soustitre_5.nom"
                      soustitre5Value={this.props.soustitre5}
                      cours5="chapitres.chapitre_5.soustitre_5.cours"
                      cours5Value={this.props.cours5}
                    />
        <p onClick={this.props.displayChapitre6} className="text-primary displayFormButton">
          + Ajouter un 6e chapitre
        </p>
      </div>
    );
  }

}

export default Chapitre5Form;
