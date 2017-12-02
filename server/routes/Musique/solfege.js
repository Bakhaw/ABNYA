const express = require('express');
const Solfege = require('../../models/Musique/Solfege');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newAnalyse = new Solfege(req.body);
  newAnalyse.save(err => {
    if (err) res.json(err);
  });
  res.redirect('http://localhost:3000/musique/solfege/cours');

  // For Postman
  // res.json({ message: 'Article de solfège sauvegardé' });
});

// GET
router.get('/', (req, res) => {
  Solfege.find((err, articles) => err ? res.send(err) : res.json(articles));
});

// PUT
router.post('/update/:id', (req, res) => {
  Solfege.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article de solfège modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  Solfege.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.json({ message: 'Article de solfège supprimé' });
});

module.exports = router;
