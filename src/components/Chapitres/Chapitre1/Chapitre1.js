import React, { Component } from 'react';
import EditButton1 from './EditButton1';

class Chapitre1 extends Component {

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
    const chapitre = this.props.infos.chapitres.chapitre;

    return (
        <div className="courseContainer">
          <div className="col-md-10">
            <div>
              <p onClick={this.displaySousTitre} className="displaySubtitleButton">{chapitre.nom}</p>
              {this.state.soustitre &&
                <p onClick={this.displayCours} className="displayCourseButton">{chapitre.soustitre.nom}</p>
              }
              {this.state.cours &&
                <p>{chapitre.soustitre.cours}</p>
              }
            </div>

            {chapitre.soustitre_2 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours2} className="displayCourseButton">{chapitre.soustitre_2.nom}</p>
                }
                {this.state.cours2 &&
                  <p>{chapitre.soustitre_2.cours}</p>
                }
              </div>
            }
            {chapitre.soustitre_3 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours3} className="displayCourseButton">{chapitre.soustitre_3.nom}</p>
                }
                {this.state.cours3 &&
                  <p>{chapitre.soustitre_3.cours}</p>
                }
              </div>
            }
            {chapitre.soustitre_4 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours4} className="displayCourseButton">{chapitre.soustitre_4.nom}</p>
                }
                {this.state.cours4 &&
                  <p>{chapitre.soustitre_4.cours}</p>
                }
              </div>
            }
            {chapitre.soustitre_5 &&
              <div>
                {this.state.soustitre &&
                  <p onClick={this.displayCours5} className="displayCourseButton">{chapitre.soustitre_5.nom}</p>
                }
                {this.state.cours5 &&
                  <p>{chapitre.soustitre_5.cours}</p>
                }
              </div>
            }
          </div>
          <div className="col-md-2">
            <EditButton1 infos={this.props.infos} url={this.props.url} />
          </div>
        <hr />
      </div>
    );
  }
}

export default Chapitre1;
