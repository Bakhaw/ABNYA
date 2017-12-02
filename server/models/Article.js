const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  date: String,
  titre: String,
  article: String,
  liens: String,
}, { versionKey: false });

module.exports = mongoose.model('Article', ArticleSchema, 'articles');
