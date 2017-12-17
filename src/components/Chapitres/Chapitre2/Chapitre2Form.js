import React, { Component } from 'react';
import ChapitreForm from '../../Forms/ChapitreForm';
import Chapitre3Form from '../Chapitre3/Chapitre3Form';

class Chapitre2Form extends Component {

  state = {
    chapitre3: false,
  };

  displayChapitre3 = () => {
    this.setState({
      chapitre3: !this.state.chapitre3,
    });
  };

  render() {
    return (
      <div>
        <ChapitreForm chapitre="chapitres.chapitre_2.nom"
                      chapitreValue={this.props.chapitre}
                      soustitre="chapitres.chapitre_2.soustitre.nom"
                      soustitreValue={this.props.soustitre}
                      cours="chapitres.chapitre_2.soustitre.cours"
                      coursValue={this.props.cours}
                      soustitre2="chapitres.chapitre_2.soustitre_2.nom"
                      soustitre2Value={this.props.soustitre2}
                      cours2="chapitres.chapitre_2.soustitre_2.cours"
                      cours2Value={this.props.cours2}
                      soustitre3="chapitres.chapitre_2.soustitre_3.nom"
                      soustitre3Value={this.props.soustitre3}
                      cours3="chapitres.chapitre_2.soustitre_3.cours"
                      cours3Value={this.props.cours3}
                      soustitre4="chapitres.chapitre_2.soustitre_4.nom"
                      soustitre4Value={this.props.soustitre4}
                      cours4="chapitres.chapitre_2.soustitre_4.cours"
                      cours4Value={this.props.cours4}
                      soustitre5="chapitres.chapitre_2.soustitre_5.nom"
                      soustitre5Value={this.props.soustitre5}
                      cours5="chapitres.chapitre_2.soustitre_5.cours"
                      cours5Value={this.props.cours5}
                    />
         <p onClick={this.displayChapitre3} className="text-primary displayFormButton">
          + Ajouter un 3e chapitre
        </p>
        {this.state.chapitre3 &&
          <Chapitre3Form />
        }
      </div>
    );
  }

}

export default Chapitre2Form;
