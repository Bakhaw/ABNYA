const mongoose = require('mongoose');

const SolfegeSchema = mongoose.Schema({
  date: String,
  titre: String,
  soustitre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('Solfege', SolfegeSchema, 'solfege');
