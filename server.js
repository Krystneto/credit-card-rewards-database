require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const mongoose = require('./server/api/config/database');
const routes = require('./server/api/config/routes');

const corsOptions = {
  origin: 'https://credit-rewards-cheatsheet.herokuapp.com' || 'http://localhost:3000/' || 'http://localhost:3000/dashbaord',
  optionsSuccessStatus: 200
};


// CONFIG

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// app.use( (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
app.use('/api/', routes);

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


