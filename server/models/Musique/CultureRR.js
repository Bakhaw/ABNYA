const mongoose = require('mongoose');

const CultureRRSchema = mongoose.Schema(
  {
    date: String,
    titre: String,
    soustitre: String,
    article: String,
    liens: String
  },
  { versionKey: false }
);

module.exports = mongoose.model('CultureRR', CultureRRSchema, 'culture-reconnaissance-reproduction');
