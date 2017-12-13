import React, { Component } from 'react';
import EditButton2 from '../Buttons/EditButton2';

class Chapitre2 extends Component {

  render() {
    return (
      <div>

        <h3>CHAPITRE 2</h3>

        <p>{this.props.infos.chapitres.chapitre_2.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_2.soustitre.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_2.soustitre.cours}</p>

        {this.props.infos.chapitres.chapitre_2.soustitre_2 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_2.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_2.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_2.soustitre_3 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_3.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_3.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_2.soustitre_4 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_4.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_4.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_2.soustitre_5 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_5.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_2.soustitre_5.cours}</p>
          </div>
        }
        <EditButton2 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }

}

export default Chapitre2;
