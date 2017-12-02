const express = require('express');
const Article = require('../models/Article');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newArticle = new Article(req.body);
  newArticle.save((err, article) => {
    if (err) res.json(err);
    res.json({ message: 'Article sauvegardé' });
  });
});

// GET
router.get('/', (req, res) => {
  Article.find((err, articles) => err ? res.send(err) : res.json(articles));
});

// PUT
router.post('/update/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  Article.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article supprimé' });
});

module.exports = router;
