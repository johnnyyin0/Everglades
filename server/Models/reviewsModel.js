const axios = require('axios');
const config = require('../../config.js');
const path = require('path');

let reviewsModel = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { 'Authorization' : config.TOKEN},
  getReviews: (params) => {
    const options = {
      url: path.join(reviewsModel.url, '/reviews'),
      headers: reviewsModel.headers,
      params: params,
      //an object with at least a product_id key but can include sort options
    }
    return axios(options)
  },
  postReview: (params) => {
    const options = {
      url: path.join(reviewsModel.url, '/reviews'),
      headers: reviewsModel.headers,
      params:params
      //object should include: product_id, rating (1-5), summary, body, recommend(bool), name, email, photos(array), characteristics(obj)
    }
    return axios(options)
  },
  getMeta: (params) => {
    const options = {
      url: path.join(reviewsModel.url, '/reviews/meta'),
      headers: reviewsModel.headers,
      params:params
      //should be an object with a product_id key
    }
    return axios(options)
  }
}

module.exports = reviewsModel;