const axios = require('axios');
const config = require('../../config.js');
const path = require('path');
const cloudinary = require('cloudinary').v2

let reviewsModel = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
  headers: { 'Authorization' : config.TOKEN},
  getReviews: ( params ) => {
    console.log(params, 'what we setting as params')
    const options = {
      url: reviewsModel.url,
      headers: reviewsModel.headers,
      params: params,
      //an object with at least a product_id key but can include sort options
    }
    return axios(options)
  },
  postReview: ( params ) => {
    const options = {
      url: reviewsModel.url,
      headers: reviewsModel.headers,
      params:params
      //object should include: product_id, rating (1-5), summary, body, recommend(bool), name, email, photos(array), characteristics(obj)
    }
    return axios(options)
  },
  getMeta: ( params ) => {
    const options = {
      url: path.join(reviewsModel.url, '/meta'),
      headers: reviewsModel.headers,
      params: params
      //should be an object with a product_id key
    }
    return axios(options)
  },
  markHelpful: ( params ) => {
    const options = {
      url: path.join(reviewsModel.url, params.product_id, '/helpful'),
      headers: reviewsModel.headers,
      params: params
      //should be an object with a product_id key
    }
    return axios(options)
  },
  markReported: ( params ) => {
    const options = {
      url: path.join(reviewsModel.url, params.product_id, '/report'),
      headers: reviewsModel.headers,
      params: params
     //should be an object with a product_id key
    }
    return axios(options)
  },
  addNewPhoto: ( formData ) => {
    return;
  }
}

module.exports = reviewsModel;