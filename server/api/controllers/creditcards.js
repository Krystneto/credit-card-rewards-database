const CreditCard = require('../models/creditcard');

showAll = (req, res) => {
  CreditCard.find( (err, creditcards) => {
    if (err) res.json({message: 'Could not find any credit cards'});

    res.json({creditcards: creditcards})
  })
}

createCard = (req, res) => {
  let {dining, travel, gas, costco, groceries, entertainment, miscellaneous} = req.body
  let name = req.body.name;
  let valuedEarning = req.body.valuedEarning;

  let cardInfo = {
    name,
    category: {
      dining,
      travel,
      gas,
      costco,
      groceries,
      entertainment,
      miscellaneous
    },
    valuedEarning
  }
  console.log(cardInfo)
  let creditcard = new CreditCard(cardInfo);

  creditcard.save( (err) => {
    if (err) return console.error(err);
    res.json({creditcard: creditcard})
  })
}


module.exports = {
  showAll: showAll,
  createCard: createCard
}
