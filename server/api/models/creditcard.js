const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CreditCardSchema = mongoose.Schema({
  name: String,
  category: {
    dining: Number,
    travel: Number,
    gas: Number,
    costco: Number,
    groceries: Number,
    entertainment: Number,
    miscellaneous: Number
  },
  valuedEarning: Number
})

const CreditCard = mongoose.model('CreditCard', CreditCardSchema);
module.exports = CreditCard
