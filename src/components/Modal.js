import React from "react";
import Dialog from "material-ui/Dialog";
import EditForm from "./EditForm";

const customContentStyle = {
  width: "100%",
  maxWidth: "none"
};

export default class Modal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return <div>
        <button type="submit" className="btn btn-secondary" onClick={this.handleOpen}>
          Modifier
        </button>
        <Dialog title="Modifier" modal={true} contentStyle={customContentStyle}
                open={this.state.open}>
          <EditForm url={this.props.url} id={this.props.infos._id} date={this.props.infos.date} titre={this.props.infos.titre}
                    soustitre={this.props.infos.soustitre} article={this.props.infos.article} liens={this.props.infos.liens} />
          <button type="submit" className="btn btn-secondary" onClick={this.handleClose}>
            Annuler
          </button>
        </Dialog>
      </div>;
  }
}
