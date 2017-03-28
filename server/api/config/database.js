const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/credit-rewards-cheatsheet-app'
mongoose.connect(url);

module.exports = mongoose;
