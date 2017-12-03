import React, { Component } from 'react';

class DeleteButton extends Component {

  render() {
    return (
      <div>
        <form className="form-group"
              action={`${this.props.url}/delete/${this.props.id}`} method="GET">
          <button type="submit" className="btn btn-light">Supprimer</button>
        </form>
      </div>
    );
  }

}

export default DeleteButton;
