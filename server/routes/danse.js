const express = require('express');
const Danse = require('../models/Danse');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newDanse = new Danse(req.body);
  newDanse.save(err => {
    if (err) res.json(err);
  });
  res.redirect('http://localhost:3000/danse/cours');

  // For Postman
  // res.json({ message: 'Article de danse sauvegardé' });
});

// GET
router.get('/', (req, res) => {
  Danse.find((err, articles) => err ? res.send(err) : res.json(articles));
});

// PUT
router.post('/update/:id', (req, res) => {
  Danse.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/danse/cours');

  // For Postman
  // res.json({ message: 'Article de danse modifié' });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  Danse.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/danse/cours');

  // For Postman
  // res.json({ message: 'Article de danse supprimé' });
});

module.exports = router;
