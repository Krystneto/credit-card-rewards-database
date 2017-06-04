const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const usersController = require('../controllers/users');
const creditcardsController = require('../controllers/creditcards')



// Routes to localhost:3000/users
router.route('/users')

  // POST a new user to the Database
  .post(usersController.createUser);

router.route('/cards')

  .get(creditcardsController.showAll)

  .post(creditcardsController.createCard)

module.exports = router;
