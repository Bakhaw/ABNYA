const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./routes/routes');

const app = express();

mongoose.connect(config.mongoUrl, () => {
  console.log(`Connecté à la DB => ${config.mongoUrl}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(config.port, () => {
  console.log(`Connecté au port ${config.port}`);
});
