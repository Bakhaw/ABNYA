const express = require('express');
const Analyse = require('../../models/Musique/Analyse');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newAnalyse = new Analyse(req.body);
  newAnalyse.save(err => {
    if (err) res.json(err);
  });
  res.redirect('http://localhost:3000/musique/analyse/cours');

  // For Postman
  // res.json({ message: 'Article danalyse sauvegardé' });
});

// GET
router.get('/', (req, res) => {
  Analyse.find((err, articles) => err ? res.send(err) : res.json(articles));
});

// PUT
router.post('/update/:id', (req, res) => {
  Analyse.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article danalyse modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  Analyse.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article danalyse supprimé' });
});

module.exports = router;
