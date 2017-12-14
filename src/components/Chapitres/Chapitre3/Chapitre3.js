import React, { Component } from 'react';
import EditButton3 from './EditButton3';

class Chapitre3 extends Component {

  render() {
    return (
      <div>

        <h3>CHAPITRE 3</h3>

        <p>{this.props.infos.chapitres.chapitre_3.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_3.soustitre.nom}</p>
        <p>{this.props.infos.chapitres.chapitre_3.soustitre.cours}</p>

        {this.props.infos.chapitres.chapitre_3.soustitre_2 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_2.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_2.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_3.soustitre_3 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_3.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_3.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_3.soustitre_4 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_4.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_4.cours}</p>
          </div>
        }

        {this.props.infos.chapitres.chapitre_3.soustitre_5 &&
          <div>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_5.nom}</p>
            <p>{this.props.infos.chapitres.chapitre_3.soustitre_5.cours}</p>
          </div>
        }
        <EditButton3 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }

}

export default Chapitre3;
