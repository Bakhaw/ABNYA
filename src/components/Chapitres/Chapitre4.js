import React, { Component } from 'react';

class Chapitre4 extends Component {

  render() {
    return (
      <div>
        <p>{this.props.infos.chapitres.chapitre_4.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_4.soustitre.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_4.soustitre.cours}</p>

        {this.props.infos.chapitres.chapitre_4.soustitre_2 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_2.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_2.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_4.soustitre_3 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_3.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_3.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_4.soustitre_4 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_4.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_4.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_4.soustitre_5 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_5.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_4.soustitre_5.cours}</p>
          </div>
        }
        <hr />
      </div>
    );
  }

}

export default Chapitre4;
