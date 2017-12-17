import React, { Component } from 'react';
import EditButton2 from './EditButton2';

class Chapitre2 extends Component {

  state = {
    soustitre: false,
    cours: false,
    cours2: false,
    cours3: false,
    cours4: false,
    cours5: false,
  };

  displaySousTitre = () => {
    this.setState({
      soustitre: !this.state.soustitre,
    });
  };

  displayCours = () => {
    this.setState({
      cours: !this.state.cours,
    });
  };

  displayCours2 = () => {
    this.setState({
      cours2: !this.state.cours2,
    });
  };

  displayCours3 = () => {
    this.setState({
      cours3: !this.state.cours3,
    });
  };

  displayCours4 = () => {
    this.setState({
      cours4: !this.state.cours4,
    });
  };

  displayCours5 = () => {
    this.setState({
      cours5: !this.state.cours5,
    });
  };

  render() {
    const chapitre2 = this.props.infos.chapitres.chapitre_2;

    return (
        <div className="courseContainer">
          <div className="col-md-10">
            <div>
              <p onClick={this.displaySousTitre} className="displaySubtitleButton">{chapitre2.nom}</p>
              {this.state.soustitre &&
                <p onClick={this.displayCours} className="displayCourseButton">{chapitre2.soustitre.nom}</p>
              }
              {this.state.cours &&
                <p>{chapitre2.soustitre.cours}</p>
              }
            </div>

            {chapitre2.soustitre_2 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours2} className="displayCourseButton">{chapitre2.soustitre_2.nom}</p>
                }
                {this.state.cours2 &&
                  <p>{chapitre2.soustitre_2.cours}</p>
                }
              </div>
            }
            {chapitre2.soustitre_3 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours3} className="displayCourseButton">{chapitre2.soustitre_3.nom}</p>
                }
                {this.state.cours3 &&
                  <p>{chapitre2.soustitre_3.cours}</p>
                }
              </div>
            }
            {chapitre2.soustitre_4 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours4} className="displayCourseButton">{chapitre2.soustitre_4.nom}</p>
                }
                {this.state.cours4 &&
                  <p>{chapitre2.soustitre_4.cours}</p>
                }
              </div>
            }
            {chapitre2.soustitre_5 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours5} className="displayCourseButton">{chapitre2.soustitre_5.nom}</p>
                }
                {this.state.cours5 &&
                  <p>{chapitre2.soustitre_5.cours}</p>
                }
              </div>
            }
          </div>
          <div className="col-md-2">
            <EditButton2 infos={this.props.infos} url={this.props.url} />
          </div>
        <hr />
      </div>
    );
  }
}

export default Chapitre2;
