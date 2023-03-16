const axios = require('axios');
const config = require('../../config.js');
const path = require('path');

let reviewsModel = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',

  getReviews: (params) => {
    const options = {
      url: path.join(reviewsModel.url, '/reviews'),
      headers: {
        'Authorization': config.TOKEN
      },
      params: params,
      //should be an object detailing how to sort the query, requires at least a product_id key but won't affect axios request if undefined
    }
    return axios(options)
  },
  postReview: () => {
    const options = {
      headers: {
        'Authorization': config.TOKEN
      }
    }
  }
}

module.exports = reviewsModel;