import React, { Component } from 'react';
import Chapitre1Form from '../Chapitres/Chapitre1/Chapitre1Form';
import Chapitre2Form from '../Chapitres/Chapitre2/Chapitre2Form';
import Chapitre3Form from '../Chapitres/Chapitre3/Chapitre3Form';
import Chapitre4Form from '../Chapitres/Chapitre4/Chapitre4Form';
import Chapitre5Form from '../Chapitres/Chapitre5/Chapitre5Form';
import Chapitre6Form from '../Chapitres/Chapitre6/Chapitre6Form';
import Chapitre7Form from '../Chapitres/Chapitre7/Chapitre7Form';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: `http://localhost:3005/${this.props.url}`,
      chapitre2: false,
      chapitre3: false,
      chapitre4: false,
      chapitre5: false,
      chapitre6: false,
      chapitre7: false,
    };
  }

  displayChapitre2 = () => {
    this.setState({
      chapitre2: !this.state.chapitre2,
    });
  };

  displayChapitre3 = () => {
    this.setState({
      chapitre3: !this.state.chapitre3,
    });
  };

  displayChapitre4 = () => {
    this.setState({
      chapitre4: !this.state.chapitre4,
    });
  };

  displayChapitre5 = () => {
    this.setState({
      chapitre5: !this.state.chapitre5,
    });
  };

  displayChapitre6 = () => {
    this.setState({
      chapitre6: !this.state.chapitre6,
    });
  };

  displayChapitre7 = () => {
    this.setState({
      chapitre7: !this.state.chapitre7,
    });
  };

  render() {

    return <div className="container-fluid">
      <form action={`${this.state.url}/add`} method="POST">
        <div className="form-group">
          <label htmlFor="date_lecon">Date</label>
          <input name="date_lecon" type="text" className="form-control"
                 id="date_lecon" aria-describedby="date_lecon" placeholder="Là tu mets la date"/>
        </div>
        <div className="form-group">
          <label htmlFor="titre_lecon">Leçon</label>
          <input name="titre_lecon" type="text" className="form-control"
                 id="titre_lecon" aria-describedby="titre_lecon" placeholder="Leçon"/>
        </div>

        <Chapitre1Form displayChapitre2={this.displayChapitre2}/>

        {this.state.chapitre2 &&
          <Chapitre2Form displayChapitre3={this.displayChapitre3}/>
        }
        {this.state.chapitre3 &&
          <Chapitre3Form displayChapitre4={this.displayChapitre4}/>
        }
        {this.state.chapitre4 &&
          <Chapitre4Form displayChapitre5={this.displayChapitre5}/>
        }
        {this.state.chapitre5 &&
          <Chapitre5Form displayChapitre6={this.displayChapitre6}/>
        }
        {this.state.chapitre6 &&
          <Chapitre6Form displayChapitre7={this.displayChapitre7}/>
        }
        {this.state.chapitre7 &&
          <Chapitre7Form />
        }

        <div className="form-group">
          <label htmlFor="liens">Liens</label>
          <input name="liens" type="text" className="form-control" id="liens" aria-describedby="liens" placeholder="Et ça c'est pour les liens"/>
        </div>
        <button type="submit" className="btn btn-light">
          Ajouter
        </button>
      </form>
    </div>;
  }
}

export default Form;
