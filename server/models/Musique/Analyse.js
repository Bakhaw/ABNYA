const mongoose = require('mongoose');

const AnalyseSchema = mongoose.Schema({
  date: String,
  titre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('Analyse', AnalyseSchema, 'analyse');
