import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div className="container-fluid">
        <form className="form-group">
          <p>Date</p>
          <input className="form-control" type="text"/>
          <p>Titre</p>
          <input className="form-control" type="textarea"/>
          <p>Cours</p>
          <input className="form-control" type="text"/>
          <p>Liens</p>
          <input className="form-control" type="text"/>
        </form>
      </div>
    );
  }

}

export default Form;
