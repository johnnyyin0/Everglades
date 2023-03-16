let Models = require('../Models/Models.js');

let productsController = {
  get: (req, res) => {
    Models.products.getAll()
    .then(data => {
      console.log('DATA RECEIVED', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING QUESTIONS SERVER: ', err)
    })
  },
}

module.exports = productsController;