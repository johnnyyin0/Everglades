const axios = require('axios');
const config = require('../../config.js');

let model = {
  getAll: () => {
    let options = {
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
      headers: {
        'Authorization': config.TOKEN
      }
    }
    return axios(options)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log('Error getting all products');
    })
  }
}

module.exports = model;