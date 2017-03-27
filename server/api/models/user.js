const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CreditCardSchema = require('./creditcard')

const UserSchema = mongoose.Schema({
  name: String,
  creditcard: [{type: Schema.Types.ObjectId, ref: 'CreditCard'}]
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
