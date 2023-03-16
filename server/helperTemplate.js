const axios = require('axios');
const config = require('../config.js');
require("dotenv").config();

//QUESTIONS AND ANSWER HELPERS
const getQuestions = (productId) => {
    let options = {
        method: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${37311}&count=100`,
        headers: {
          "Authorization": config.TOKEN
        },
      };

   return axios(options)
    .then(response => {
        return response.data
    })
    .catch(err => {
        console.log('Axios.get error in helper function: ', err)
    })
}

module.exports.helper = {getQuestions};