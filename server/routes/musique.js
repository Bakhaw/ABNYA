const express = require('express');
const Musique = require('../models/Musique');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newMusique = new Musique(req.body);
  newMusique.save((err, article) => {
    if (err) res.json(err);
    res.json({ message: 'Article de musique sauvegardé' });
  });
});

// GET
router.get('/', (req, res) => {
  Musique.find((err, articles) => err ? res.send(err) : res.json(articles));
});

// PUT
router.post('/update/:id', (req, res) => {
  Musique.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article de musique modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  Musique.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article de musique supprimé' });
});

module.exports = router;
