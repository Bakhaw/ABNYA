import React from 'react';
import Dialog from 'material-ui/Dialog';
import EditForm7 from './EditForm7';

const customContentStyle = {
  width: '90%',
  maxWidth: 'none',
};

export default class Modal7 extends React.Component {

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
            <EditForm7 url={this.props.url}
                      id={this.props.id}
                      date={this.props.date}
                      titre={this.props.titre}
                      chapitre={this.props.chapitre}
                      soustitre={this.props.soustitre}
                      cours={this.props.cours}
                      soustitre2={this.props.soustitre2}
                      cours2={this.props.cours2}
                      soustitre3={this.props.soustitre3}
                      cours3={this.props.cours3}
                      soustitre4={this.props.soustitre4}
                      cours4={this.props.cours4}
                      soustitre5={this.props.soustitre5}
                      cours5={this.props.cours5}
                      liens={this.props.liens}/>
            <button type="submit" className="btn btn-secondary" onClick={this.handleClose}>
              Annuler
            </button>
          </Dialog>
        </div>
    );
  }
}
