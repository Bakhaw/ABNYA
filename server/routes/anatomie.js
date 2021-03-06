const express = require('express');
const Anatomie = require('../models/Anatomie');
const router = express.Router();

// POST
router.post('/add', (req, res) => {
  const newAnatomie = new Anatomie(req.body);
  newAnatomie.save(err => {
    if (err) res.json(err);
  });
  res.redirect('http://localhost:3000/anatomie/cours');

  // For Postman
  // res.json({ message: "Article d'anatomie sauvegardé" });
});

// GET
router.get('/', (req, res) => {
  Anatomie.find((err, cours) => err ? res.send(err) : res.json(cours));
});

// PUT
router.post('/update/:id', (req, res) => {
  Anatomie.findByIdAndUpdate(req.params.id, req.body, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/anatomie/cours');

  // For Postman
  // res.json({ message: "Article d'anatomie modifié" });
});

// DELETE
router.get('/delete/:id', (req, res) => {
  Anatomie.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
  });
  res.redirect('http://localhost:3000/anatomie/cours');

  // For Postman
  // res.json({ message: "Article d'anatomie supprimé" });
});

module.exports = router;
