const mongoose = require('./database');

const User = require('../models/user');
const CreditCard = require('../models/creditcard')

const chaseFreedom = new CreditCard({
    "name": "Chase Freedom",
    "category": {
      "dining": 1,
      "travel": 1,
      "gas": 5,
      "costco": 1,
      "groceries": 1,
      "entertainment": 1,
      "miscellaneous": 1
    },
  "valuedEarning": 2.1
})


const chaseSapphirePreferred = new CreditCard({
  name: "Chase Sapphire Preferred",
  category: {
    dining: 2,
    travel: 2,
    gas: 1,
    costco: 1,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 2.1
})


const discoverCard = new CreditCard({
  name: "Discover it",
  category: {
    dining: 1,
    travel: 1,
    gas: 5,
    costco: 5,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 1
})

const blueCashEveryday = new CreditCard({
  name: "Blue Cash Everyday by American Express",
  category: {
    dining: 1,
    travel: 1,
    gas: 3,
    costco: 1,
    groceries: 1,
    entertainment: 1,
    miscellaneous: 1
  },
  valuedEarning: 1.9
})

blueCashEveryday.save();
chaseFreedom.save();
chaseSapphirePreferred.save();
discoverCard.save();


const user = new User({
  "name": "Johnny Walker",
  "creditcard": []
})

user.creditcard.push(chaseFreedom, chaseSapphirePreferred, discoverCard );

CreditCard.remove({}, err => {
  if (err) console.log(err);
})

User.remove({}, err => {
  if (err) console.log(err);
  User.create(user, (err, users) => {
    if (err) {
      console.log(err)
    } else {
      console.log("User has been seeded to Database");
      mongoose.connection.close();
    }
    process.exit();
  })
})
