const User = require('../models/user');
const CreditCard = require('../models/creditcard')

// POST new user to the Database
createUser = (req, res) => {
  let user = new User(req.body);
  User.save(err => {
    if (err) res.json({
      message: error
    });
    res.json({
      user: user,
      message: "User added successfully"
    })
  })
}

module.exports = {
  createUser: createUser
}

