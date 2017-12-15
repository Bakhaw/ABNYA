import React, { Component } from 'react';
import EditButton2 from './EditButton2';

class Chapitre2 extends Component {

  render() {
    const chapitre2 = this.props.infos.chapitres.chapitre_2;

    return (
        <div>
          <div>
            <p>{chapitre2.nom}</p>
            <p>{chapitre2.soustitre.nom}</p>
            <p>{chapitre2.soustitre.cours}</p>
          </div>

          {chapitre2.soustitre_2 &&
            <div>
              <p>{chapitre2.soustitre_2.nom}</p>
              <p>{chapitre2.soustitre_2.cours}</p>
            </div>
          }
          {chapitre2.soustitre_3 &&
            <div>
              <p>{chapitre2.soustitre_3.nom}</p>
              <p>{chapitre2.soustitre_3.cours}</p>
            </div>
          }
          {chapitre2.soustitre_4 &&
            <div>
              <p>{chapitre2.soustitre_4.nom}</p>
              <p>{chapitre2.soustitre_4.cours}</p>
            </div>
          }
          {chapitre2.soustitre_5 &&
            <div>
              <p>{chapitre2.soustitre_5.nom}</p>
              <p>{chapitre2.soustitre_5.cours}</p>
            </div>
          }
        <EditButton2 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }
}

export default Chapitre2;
