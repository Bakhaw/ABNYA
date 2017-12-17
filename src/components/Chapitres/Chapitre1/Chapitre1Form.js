import React, { Component } from 'react';
import ChapitreForm from '../../Forms/ChapitreForm';
import Chapitre2Form from '../Chapitre2/Chapitre2Form';

class Chapitre1Form extends Component {

state = {
      chapitre2: false,
    };

  displayChapitre2 = () => {
    this.setState({
      chapitre2: !this.state.chapitre2,
    });
  };

  render() {
    return (
      <div>
        <ChapitreForm chapitre="chapitres.chapitre.nom"
                      chapitreValue={this.props.chapitre}
                      soustitre="chapitres.chapitre.soustitre.nom"
                      soustitreValue={this.props.soustitre}
                      cours="chapitres.chapitre.soustitre.cours"
                      coursValue={this.props.cours}
                      soustitre2="chapitres.chapitre.soustitre_2.nom"
                      soustitre2Value={this.props.soustitre2}
                      cours2="chapitres.chapitre.soustitre_2.cours"
                      cours2Value={this.props.cours2}
                      soustitre3="chapitres.chapitre.soustitre_3.nom"
                      soustitre3Value={this.props.soustitre3}
                      cours3="chapitres.chapitre.soustitre_3.cours"
                      cours3Value={this.props.cours3}
                      soustitre4="chapitres.chapitre.soustitre_4.nom"
                      soustitre4Value={this.props.soustitre4}
                      cours4="chapitres.chapitre.soustitre_4.cours"
                      cours4Value={this.props.cours4}
                      soustitre5="chapitres.chapitre.soustitre_5.nom"
                      soustitre5Value={this.props.soustitre5}
                      cours5="chapitres.chapitre.soustitre_5.cours"
                      cours5Value={this.props.cours5}
                    />
        <p onClick={this.displayChapitre2} className="text-primary displayFormButton">
          + Ajouter un 2e chapitre
        </p>
        {this.state.chapitre2 &&
          <Chapitre2Form />
        }
      </div>  
    );
  }

}

export default Chapitre1Form;
