import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Navbar
import Navbar from './components/Navbar';

// Navbar2
import Navbar2 from './components/Navbar2';

// Landing Page
import LandingPage from './components/LandingPage';

// Components in the same Location
import { Anatomie, AnatomieForm,
         Danse, DanseForm,
         Analyse, AnalyseForm,
         CultureG, CultureGForm,
         CultureRR, CultureRRForm,
         Solfege, SolfegeForm } from './components/Imports';

import './App.css';

class App extends Component {
  render() {

    return (
    <div>
      <MuiThemeProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              {/* Routes Anatomie */}
              <Route path="/anatomie/cours" component={Anatomie} />
              <Route path="/anatomie/ajouter" component={AnatomieForm} />

              {/* Routes Danse */}
              <Route path="/danse/cours" component={Danse} />
              <Route path="/danse/ajouter" component={DanseForm} />

              {/* Routes musique/analyse */}
              <Route path="/musique/analyse/cours" component={Analyse} />
              <Route path="/musique/analyse/ajouter" component={AnalyseForm} />

              {/* Routes musique/culture-generale */}
              <Route path="/musique/culture-generale/cours" component={CultureG} />
              <Route
                path="/musique/culture-generale/ajouter"
                component={CultureGForm}
              />

              {/* Routes musique/culture-reconnaissance-et-reproduction */}
              <Route
                path="/musique/culture-reconnaissance-et-reproduction/cours"
                component={CultureRR}
              />
              <Route
                path="/musique/culture-reconnaissance-et-reproduction/ajouter"
                component={CultureRRForm}
              />

              {/* Routes musique/solfege */}
              <Route path="/musique/solfege/cours" component={Solfege} />
              <Route path="/musique/solfege/ajouter" component={SolfegeForm} />

              {/* Routes Musique */}
              <Route path="/musique" component={Navbar2} />

              {/* Route Accueil */}
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
