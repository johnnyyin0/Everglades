const axios = require('axios');
const config = require('../../config.js');

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions'

let questionsModel = {
  getQuestions: () => {
    //should take in a param ie: productId
    let options = {
      method: 'GET',
      url: apiURL + `?product_id=${37311}&count=100`,
      headers: {
        "Authorization": config.TOKEN
      },
    };
 return axios(options)
  .then(response => {
      return response.data
  })
  .catch(err => {
      console.log('Axios.get error in getQuestions function: ', err)
  })
  },

  getAnswers: (questionId) => {
    console.log('SERVER SIDE QUESTIONID', questionId)
    let options ={
      method: 'GET',
      url: apiURL+ `/${questionId}/answers?count=100`,
      headers: {
        "Authorization": config.TOKEN
      },
    }
    return axios(options)
  .then(response => {
      return response.data
  })
  .catch(err => {
      console.log('Axios.get error in getAnswers function: ', err)
  })
  }
}

module.exports = questionsModel;