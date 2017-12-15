import React, { Component } from 'react';
import EditButton5 from './EditButton5';

class Chapitre5 extends Component {

  render() {

    const chapitre5 = this.props.infos.chapitres.chapitre_5;

    return (
      <div>
        <div>
          <p>{chapitre5.nom}</p>
          <p>{chapitre5.soustitre.nom}</p>
          <p>{chapitre5.soustitre.cours}</p>
        </div>

        {chapitre5.soustitre_2 &&
          <div>
            <p>{chapitre5.soustitre_2.nom}</p>
            <p>{chapitre5.soustitre_2.cours}</p>
          </div>
        }
        {chapitre5.soustitre_3 &&
          <div>
            <p>{chapitre5.soustitre_3.nom}</p>
            <p>{chapitre5.soustitre_3.cours}</p>
          </div>
        }
        {chapitre5.soustitre_4 &&
          <div>
            <p>{chapitre5.soustitre_4.nom}</p>
            <p>{chapitre5.soustitre_4.cours}</p>
          </div>
        }
        {chapitre5.soustitre_5 &&
          <div>
            <p>{chapitre5.soustitre_5.nom}</p>
            <p>{chapitre5.soustitre_5.cours}</p>
          </div>
        }
        <EditButton5 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }
}

export default Chapitre5;
