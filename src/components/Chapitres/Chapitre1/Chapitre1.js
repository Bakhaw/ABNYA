import React, { Component } from 'react';
import EditButton1 from './EditButton1';

class Chapitre1 extends Component {

  render() {
    const chapitre = this.props.infos.chapitres.chapitre;

    return (
        <div>
          <div>
            <p>{chapitre.nom}</p>
            <p>{chapitre.soustitre.nom}</p>
            <p>{chapitre.soustitre.cours}</p>
          </div>

          {chapitre.soustitre_2 &&
            <div>
              <p>{chapitre.soustitre_2.nom}</p>
              <p>{chapitre.soustitre_2.cours}</p>
            </div>
          }
          {chapitre.soustitre_3 &&
            <div>
              <p>{chapitre.soustitre_3.nom}</p>
              <p>{chapitre.soustitre_3.cours}</p>
            </div>
          }
          {chapitre.soustitre_4 &&
            <div>
              <p>{chapitre.soustitre_4.nom}</p>
              <p>{chapitre.soustitre_4.cours}</p>
            </div>
          }
          {chapitre.soustitre_5 &&
            <div>
              <p>{chapitre.soustitre_5.nom}</p>
              <p>{chapitre.soustitre_5.cours}</p>
            </div>
          }
        <EditButton1 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }
}

export default Chapitre1;
