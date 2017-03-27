const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('./api/config/database');
const routes = require('./api/config/routes');

// CONFIG
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', routes);

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


