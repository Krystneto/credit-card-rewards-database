const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const CreditCardSchema = mongoose.Schema({
  name: String,
  category: {
    dining: Number,
    airfare: Number,
    hotels: Number,
    ground_transportation: Number,
    gas: Number,
    amazon: Number,
    wholesale_clubs: Number,
    groceries: Number,
    department_stores: Number,
    entertainment: Number,
    home_improvement: Number,
    drug_stores: Number,
    miscellaneous: Number
  },
  valuedEarning: Number
})

const CreditCard = mongoose.model('CreditCard', CreditCardSchema);
module.exports = CreditCard
