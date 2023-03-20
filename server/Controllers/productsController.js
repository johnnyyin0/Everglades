let Models = require('../Models/Models.js');

let productsController = {
  get: (req, res) => {
    Models.products.getAll()
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING PRODUCTS SERVER: ', err)
    })
  },

  getOne: (req, res) => {
    Models.products.getOne(req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING PRODUCTS SERVER: ', err)
    })
  },

  getRelated: (req, res) => {
    Models.products.getRelated(req.params.id)
    .then(data => {
      // console.log('DATA RECEIVED', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING PRODUCTS SERVER: ', err)
    })
  },

  getStyle: (req, res) => {
    Models.products.getStyle(req.params.id)
    .then(data => {
      // console.log('DATA RECEIVED', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING PRODUCTS SERVER: ', err)
    })
  },
}

module.exports = productsController;