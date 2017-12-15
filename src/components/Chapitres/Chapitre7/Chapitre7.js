import React, { Component } from 'react';
import EditButton7 from './EditButton7';

class Chapitre7 extends Component {

  render() {

    const chapitre7 = this.props.infos.chapitres.chapitre_7;

    return (
      <div>
        <div>
          <p>{chapitre7.nom}</p>
          <p>{chapitre7.soustitre.nom}</p>
          <p>{chapitre7.soustitre.cours}</p>
        </div>

        {chapitre7.soustitre_2 &&
          <div>
            <p>{chapitre7.soustitre_2.nom}</p>
            <p>{chapitre7.soustitre_2.cours}</p>
          </div>
        }
        {chapitre7.soustitre_3 &&
          <div>
            <p>{chapitre7.soustitre_3.nom}</p>
            <p>{chapitre7.soustitre_3.cours}</p>
          </div>
        }
        {chapitre7.soustitre_4 &&
          <div>
            <p>{chapitre7.soustitre_4.nom}</p>
            <p>{chapitre7.soustitre_4.cours}</p>
          </div>
        }
        {chapitre7.soustitre_5 &&
          <div>
            <p>{chapitre7.soustitre_5.nom}</p>
            <p>{chapitre7.soustitre_5.cours}</p>
          </div>
        }
        <EditButton7 infos={this.props.infos} url={this.props.url} />
        <hr />
      </div>
    );
  }
}

export default Chapitre7;
