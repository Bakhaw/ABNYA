import React from 'react';
import Dialog from 'material-ui/Dialog';
import EditForm from './EditForm';

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

export default class Modal extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
          <button type="submit" className="btn btn-secondary" onClick={this.handleOpen}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <Dialog title="Modifier" modal={false} contentStyle={customContentStyle}
                  open={this.state.open} autoScrollBodyContent={true}
                  onRequestClose={this.handleClose}>
            <EditForm {...this.props}/>
            <button type="submit" className="btn btn-light" onClick={this.handleClose}>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            </button>
          </Dialog>
        </div>
    );
  }
}
