const express = require('express');
const CultureGenerale = require('../../models/Musique/CultureGenerale');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newAnalyse = new CultureGenerale(req.body);
  newAnalyse.save(err => {
    if (err) res.json(err);
  });
  res.redirect('http://localhost:3000/musique/culture-generale/cours');

  // For Postman
  // res.json({ message: 'Article de culture générale sauvegardé' });
});

// GET
router.get('/', (req, res) => {
  CultureGenerale.find((err, cours) => err ? res.send(err) : res.json(cours));
});

// PUT
router.post('/update/:id', (req, res) => {
  CultureGenerale.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/musique/culture-generale/cours');

  // For Postman
  // res.json({ message: 'Article de culture générale modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  CultureGenerale.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/musique/culture-generale/cours');

  // For Postman
  // res.json({ message: 'Article de culture générale supprimé' });
});

module.exports = router;
