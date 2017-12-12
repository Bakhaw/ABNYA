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
            Modifier
          </button>
          <Dialog title="Modifier" modal={false} contentStyle={customContentStyle}
                  open={this.state.open} autoScrollBodyContent={true}
                  onRequestClose={this.handleClose}>
            <EditForm url={this.props.url}
                      id={this.props.infos._id}
                      date={this.props.infos.date_lecon}
                      titre={this.props.infos.titre_lecon}
                      chapitre={this.props.infos.chapitres.chapitre.nom}
                      soustitre={this.props.infos.chapitres.chapitre.soustitre.nom}
                      cours={this.props.infos.chapitres.chapitre.soustitre.cours}
                      liens={this.props.infos.liens}/>
            <button type="submit" className="btn btn-secondary" onClick={this.handleClose}>
              Annuler
            </button>
          </Dialog>
        </div>
    );
  }
}
