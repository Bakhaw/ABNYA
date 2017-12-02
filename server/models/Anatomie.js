const mongoose = require('mongoose');

const AnatomieSchema = mongoose.Schema({
  date: String,
  titre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('Anatomie', AnatomieSchema, 'anatomie');
