const axios = require('axios');
const config = require('../config.js');
require("dotenv").config();

const getQuestions = () => {
    let options = {
        method: 'GET',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,
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

module.exports.getQuestions = getQuestions;