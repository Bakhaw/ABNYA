import React, { Component } from 'react';
import EditButton4 from './EditButton4';

class Chapitre4 extends Component {

  render() {

    const chapitre4 = this.props.infos.chapitres.chapitre_4;

    return (
      <div>
        <div>
          <p>{chapitre4.nom}</p>
          <p>{chapitre4.soustitre.nom}</p>
          <p>{chapitre4.soustitre.cours}</p>
        </div>

        {chapitre4.soustitre_2 &&
          <div>
            <p>{chapitre4.soustitre_2.nom}</p>
            <p>{chapitre4.soustitre_2.cours}</p>
          </div>
        }
        {chapitre4.soustitre_3 &&
          <div>
            <p>{chapitre4.soustitre_3.nom}</p>
            <p>{chapitre4.soustitre_3.cours}</p>
          </div>
        }
        {chapitre4.soustitre_4 &&
          <div>
            <p>{chapitre4.soustitre_4.nom}</p>
            <p>{chapitre4.soustitre_4.cours}</p>
          </div>
        }
        {chapitre4.soustitre_5 &&
          <div>
            <p>{chapitre4.soustitre_5.nom}</p>
            <p>{chapitre4.soustitre_5.cours}</p>
          </div>
        }
        <EditButton4 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }
}

export default Chapitre4;
