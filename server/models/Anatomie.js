const mongoose = require('mongoose');

const AnatomieSchema = mongoose.Schema(
  {
    date: String,
    titre: String,
    soustitre: String,
    article: String,
    liens: String
  },
  { versionKey: false }
);

module.exports = mongoose.model('Anatomie', AnatomieSchema, 'anatomie');
