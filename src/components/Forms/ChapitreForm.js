import React, { Component } from 'react';

class Chapitre extends Component {

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor={this.props.chapitre}>Nom du Chapitre</label>
          <input name={this.props.chapitre} type="text" className="form-control"
                 id={this.props.chapitre} aria-describedby={this.props.chapitre}
                 placeholder="Nom du chapitre" />
        </div>
        <div className="form-group">
          <label htmlFor={this.props.soustitre}>Soustitre</label>
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
      </div>
    );
  }

}

export default Chapitre;
