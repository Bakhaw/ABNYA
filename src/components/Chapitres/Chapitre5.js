import React, { Component } from 'react';

class Chapitre5 extends Component {

  render() {
    return (
      <div>

        <h3>CHAPITRE 5</h3>

        <p>{this.props.infos.chapitres.chapitre_5.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_5.soustitre.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_5.soustitre.cours}</p>

        {this.props.infos.chapitres.chapitre_5.soustitre_2 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_2.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_2.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_5.soustitre_3 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_3.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_3.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_5.soustitre_4 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_4.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_4.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_5.soustitre_5 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_5.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_5.soustitre_5.cours}</p>
          </div>
        }
        <hr />
      </div>
    );
  }

}

export default Chapitre5;
