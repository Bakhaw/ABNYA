import React, { Component } from 'react';

class Chapitre1 extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.infos.titre_lecon}</h2>

        <p>{this.props.infos.chapitres.chapitre.nom}</p>
        <p>{this.props.infos.chapitres.chapitre.soustitre.nom}</p>
        <p>{this.props.infos.chapitres.chapitre.soustitre.cours}</p>

        {this.props.infos.chapitres.chapitre.soustitre_2 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre.soustitre_2.nom}</p>
            <p>{this.props.infos.chapitres.chapitre.soustitre_2.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre.soustitre_3 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre.soustitre_3.nom}</p>
            <p>{this.props.infos.chapitres.chapitre.soustitre_3.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre.soustitre_4 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre.soustitre_4.nom}</p>
            <p>{this.props.infos.chapitres.chapitre.soustitre_4.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre.soustitre_5 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre.soustitre_5.nom}</p>
            <p>{this.props.infos.chapitres.chapitre.soustitre_5.cours}</p>
          </div>
        }
        <hr />
      </div>
    );
  }

}

export default Chapitre1;
