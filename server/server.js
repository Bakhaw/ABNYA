const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/config');
const anatomie = require('./routes/anatomie');
const danse = require('./routes/danse');
const musique = require('./routes/musique');

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log(`Connecté à la DB => ${config.mongoUrl}`);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/anatomie', anatomie);
app.use('/danse', danse);
app.use('/musique', musique);

app.listen(config.port, () => {
  console.log(`Connecté au port ${config.port}`);
});
