const mongoose = require('mongoose');

const DanseSchema = mongoose.Schema({
  date: String,
  titre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('Danse', DanseSchema, 'danse');