const mongoose = require('mongoose');

const CultureGeneraleSchema = mongoose.Schema({
  date: String,
  titre: String,
  soustitre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('CultureGenerale', CultureGeneraleSchema, 'culture-generale');
