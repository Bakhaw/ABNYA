import React, { Component } from "react";
import Modal from "./Modal";

class EditButton extends Component {

  state = {
    formToggle: false
  };

  handleDisplay = () => {
    this.setState({
      formToggle: this.state.formToggle ? false : true
    });
  };

  render() {

    return (
      <div>
          <Modal
            infos={this.props.infos} url={this.props.url}
            onClick={() => this.handleDisplay()}
          />
      </div>
    );
  }
}

export default EditButton;
