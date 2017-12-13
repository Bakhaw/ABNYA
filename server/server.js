const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// config
const config = require('./config/config');

// routes
const anatomie = require('./routes/anatomie');
const danse = require('./routes/danse');
const analyse = require('./routes/Musique/analyse');
const culturegenerale = require('./routes/Musique/culturegenerale');
const culturerr = require('./routes/Musique/culturerr');
const solfege = require('./routes/Musique/solfege');

const app = express();

// connection to mongodb
mongoose.connect(config.mongoUrl, () => {
  console.log(`Connecté à la DB => ${config.mongoUrl}`);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/anatomie', anatomie);
app.use('/danse', danse);
app.use('/musique/analyse', analyse);
app.use('/musique/culture-generale', culturegenerale);
app.use('/musique/culture-rr', culturerr);
app.use('/musique/solfege', solfege);

app.listen(config.port, () => {
  console.log(`Connecté au port ${config.port}`);
});
