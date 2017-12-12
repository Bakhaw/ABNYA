import React, { Component } from 'react';

class ChapitreForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      soustitre2: false,
      soustitre3: false,
      soustitre4: false,
      soustitre5: false,
    };
  }

  displaySousTitre2 = () => {
    this.setState({
      soustitre2: !this.state.soustitre2,
    });
  };

  displaySousTitre3 = () => {
    this.setState({
      soustitre3: !this.state.soustitre3,
    });
  };

  displaySousTitre4 = () => {
    this.setState({
      soustitre4: !this.state.soustitre4,
    });
  };

  displaySousTitre5 = () => {
    this.setState({
      soustitre5: !this.state.soustitre5,
    });
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor={this.props.chapitre}>Nom du Chapitre</label>
          <input name={this.props.chapitre} type="text" className="form-control"
                 id={this.props.chapitre} aria-describedby={this.props.chapitre}
                 placeholder="Nom du chapitre" />
        </div>

        {/* Sous Titre 1 */}
        <div className="form-group">
          <label htmlFor={this.props.soustitre}>Soustitre 1</label>
          <input name={this.props.soustitre} type="text" className="form-control"
                 id={this.props.soustitre}
                 aria-describedby={this.props.soustitre}
                 placeholder="Nom du sous-titre" />
        </div>
        <div className="form-group">
          <label htmlFor={this.props.cours}>Cours</label>
          <textarea name={this.props.cours} type="text" className="form-control"
                 id={this.props.cours}
                 aria-describedby={this.props.cours}
                 placeholder="Cours ..." />
        </div>

        <p onClick={this.displaySousTitre2} className="text-primary displayFormButton">
          + Ajouter un 2e sous-titre
        </p>

        {this.state.soustitre2 &&
          <div>
            {/* Sous Titre 2 */}
            <div className="form-group">
              <label htmlFor={this.props.soustitre2}>Soustitre 2</label>
              <input name={this.props.soustitre2} type="text" className="form-control"
                     id={this.props.soustitre2}
                     aria-describedby={this.props.soustitre2}
                     placeholder="Nom du sous-titre 2" />
            </div>
            <div className="form-group">
              <label htmlFor={this.props.cours2}>Cours 2</label>
              <textarea name={this.props.cours2} type="text" className="form-control"
                     id={this.props.cours2}
                     aria-describedby={this.props.cours2}
                     placeholder="Cours 2 ..." />
            </div>
            <p onClick={this.displaySousTitre3} className="text-primary displayFormButton">
              + Ajouter un 3e sous-titre
            </p>
          </div>
        }

        {this.state.soustitre3 &&
          <div>
            {/* Sous Titre 3 */}
            <div className="form-group">
              <label htmlFor={this.props.soustitre3}>Soustitre 3</label>
              <input name={this.props.soustitre3} type="text" className="form-control"
                     id={this.props.soustitre3}
                     aria-describedby={this.props.soustitre3}
                     placeholder="Nom du sous-titre 3" />
            </div>
            <div className="form-group">
              <label htmlFor={this.props.cours3}>Cours 3</label>
              <textarea name={this.props.cours3} type="text" className="form-control"
                     id={this.props.cours3}
                     aria-describedby={this.props.cours3}
                     placeholder="Cours 3 ..." />
            </div>
            <p onClick={this.displaySousTitre4} className="text-primary displayFormButton">
              + Ajouter un 4e sous-titre
            </p>
          </div>
        }

        {this.state.soustitre4 &&
          <div>
            {/* Sous Titre 4 */}
            <div className="form-group">
              <label htmlFor={this.props.soustitre4}>Soustitre 4</label>
              <input name={this.props.soustitre4} type="text" className="form-control"
                     id={this.props.soustitre4}
                     aria-describedby={this.props.soustitre4}
                     placeholder="Nom du sous-titre 4" />
            </div>
            <div className="form-group">
              <label htmlFor={this.props.cours4}>Cours 4</label>
              <textarea name={this.props.cours4} type="text" className="form-control"
                     id={this.props.cours4}
                     aria-describedby={this.props.cours4}
                     placeholder="Cours 4 ..." />
            </div>
            <p onClick={this.displaySousTitre5} className="text-primary displayFormButton">
              + Ajouter un 5e sous-titre
            </p>
          </div>
        }

        {this.state.soustitre5 &&
          <div>
            {/* Sous Titre 5 */}
            <div className="form-group">
              <label htmlFor={this.props.soustitre5}>Soustitre 5</label>
              <input name={this.props.soustitre5} type="text" className="form-control"
                     id={this.props.soustitre5}
                     aria-describedby={this.props.soustitre5}
                     placeholder="Nom du sous-titre 5" />
            </div>
            <div className="form-group">
              <label htmlFor={this.props.cours5}>Cours 5</label>
              <textarea name={this.props.cours5} type="text" className="form-control"
                     id={this.props.cours5}
                     aria-describedby={this.props.cours5}
                     placeholder="Cours 5 ..." />
            </div>
          </div>
        }
      </div>
    );
  }

}

export default ChapitreForm;
