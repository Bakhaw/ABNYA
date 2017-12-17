import React, { Component } from 'react';
import Modal from '../Modal';

class EditButton extends Component {

  render() {
    return (
      <div>
        <Modal
              url={this.props.url}
              id={this.props.infos._id}
              date={this.props.infos.date_lecon}
              titre={this.props.infos.titre_lecon}
              liens={this.props.infos.liens}/>
      </div>
    );
  }

}

export default EditButton;
