const axios = require('axios');
const config = require('../../config.js');
const path = require('path');

let reviewsModel = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',

  getReviews: (sortParams) => {
    const options = {
      url: path.join(reviewsModel.url, '/reviews'),
      headers: {
        'Authorization': config.TOKEN
      },
      params: sortParams,
      //should be an object detailing how to sort the query, won't affect axios request if undefined

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

reviewsModel.getReviews({product_id:37311}).then(response => console.log(response.data, 'got em')).catch(err => console.log(err, 'failed to get em'))