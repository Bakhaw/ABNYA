const mongoose = require('mongoose');

const MusiqueSchema = mongoose.Schema({
  date: String,
  titre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('Musique', MusiqueSchema, 'musique');
