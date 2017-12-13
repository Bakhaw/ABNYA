const express = require('express');
const CultureRR = require('../../models/Musique/CultureRR');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newAnalyse = new CultureRR(req.body);
  newAnalyse.save(err => {
    if (err) res.json(err);
  });
  res.redirect('http://localhost:3000/musique/culture-reconnaissance-et-reproduction/cours');

  // For Postman
  // res.json({ message: 'Article de culture RR sauvegardé' });
});

// GET
router.get('/', (req, res) => {
  CultureRR.find((err, cours) => err ? res.send(err) : res.json(cours));
});

// PUT
router.post('/update/:id', (req, res) => {
  CultureRR.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/musique/culture-reconnaissance-et-reproduction/cours');

  // For Postman
  // res.json({ message: 'Article de culture RR modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  CultureRR.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/musique/culture-reconnaissance-et-reproduction/cours');

  // For Postman
  // res.json({ message: 'Article de culture RR supprimé' });
});

module.exports = router;
