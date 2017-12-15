import React, { Component } from 'react';
import EditButton3 from './EditButton3';

class Chapitre3 extends Component {

  render() {

    const chapitre3 = this.props.infos.chapitres.chapitre_3;

    return (
      <div>
        <div>
          <p>{chapitre3.nom}</p>
          <p>{chapitre3.soustitre.nom}</p>
          <p>{chapitre3.soustitre.cours}</p>
        </div>

        {chapitre3.soustitre_2 &&
          <div>
            <p>{chapitre3.soustitre_2.nom}</p>
            <p>{chapitre3.soustitre_2.cours}</p>
          </div>
        }
        {chapitre3.soustitre_3 &&
          <div>
            <p>{chapitre3.soustitre_3.nom}</p>
            <p>{chapitre3.soustitre_3.cours}</p>
          </div>
        }
        {chapitre3.soustitre_4 &&
          <div>
            <p>{chapitre3.soustitre_4.nom}</p>
            <p>{chapitre3.soustitre_4.cours}</p>
          </div>
        }
        {chapitre3.soustitre_5 &&
          <div>
            <p>{chapitre3.soustitre_5.nom}</p>
            <p>{chapitre3.soustitre_5.cours}</p>
          </div>
        }
        <EditButton3 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }
}

export default Chapitre3;
