const CreditCard = require('../models/creditcard');

showAll = (req, res) => {
  CreditCard.find({}).exec().then( (err, creditcards) => {
    if (err) {
      res.json({message: 'Could not find any credit cards'});
    } else {
      res.json({creditcards: creditcards})
    }
  })
}



module.exports = {
  showAll: showAll
}
