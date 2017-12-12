import React from 'react';
import Accueil from './Accueil';
import Form from './Forms/Form';

// Export de tout les composants Accueil et Form avec la bonne props associé
// pour récuperer l'url précise

export const Anatomie = props => {
  return <Accueil url='anatomie' {...props} />;
};

export const Danse = props => {
  return <Accueil url='danse' {...props} />;
};

export const Analyse = props => {
  return <Accueil url='musique/analyse' {...props} />;
};

export const CultureG = props => {
  return <Accueil url='musique/culture-generale' {...props} />;
};

export const CultureRR = props => {
  return <Accueil url='musique/culture-rr' {...props} />;
};

export const Solfege = props => {
  return <Accueil url='musique/solfege' {...props} />;
};

// Form

export const AnatomieForm = props => {
  return <Form url='anatomie' {...props} />;
};

export const DanseForm = props => {
  return <Form url='danse' {...props} />;
};

export const AnalyseForm = props => {
  return <Form url='musique/analyse' {...props} />;
};

export const CultureGForm = props => {
  return <Form url='musique/culture-generale' {...props} />;
};

export const CultureRRForm = props => {
  return <Form url='musique/culture-rr' {...props} />;
};

export const SolfegeForm = props => {
  return <Form url='musique/solfege' {...props} />;
};
