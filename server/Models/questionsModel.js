const axios = require('axios');
const config = require('../../config.js');

const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/'

let questionsModel = {
  getQuestions: (productId) => {
    let options = {
      method: 'GET',
      url: apiURL + `questions?product_id=${productId}&count=100`,
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
    let options = {
      method: 'GET',
      url: apiURL+ `questions/${questionId}/answers?count=100`,
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
  },

  updateHelpfulnessAnswer: (answerId) => {
    let options = {
      method: 'PUT',
      url: apiURL+ `answers/${answerId}/helpful`,
      headers: {
        "Authorization": config.TOKEN
      },
    }
    return axios(options)
  .then(response => {
      return response.data
  })
  .catch(err => {
      console.log(err)
  })
  },
  updateHelpfulnessQuestion: (questionId) => {
    let options = {
      method: 'PUT',
      url: apiURL+ `questions/${questionId}/helpful`,
      headers: {
        "Authorization": config.TOKEN
      },
    }
    return axios(options)
  .then(response => {
      return response.data
  })
  .catch(err => {
      console.log(err)
  })
  },

  submitAnswer: (questionId, params) => {
    let options = {
      method: 'POST',
      url: apiURL+ `questions/${questionId}/answers`,
      headers: {
        "Authorization": config.TOKEN
      },
      data: params
    }
    return axios(options)
  .then(response => {
      return response.data
  })
  .catch(err => {
      console.log(err)
  })
  },
  submitQuestion: (params) => {
    let options = {
      method: 'POST',
      url: apiURL+ `questions`,
      headers: {
        "Authorization": config.TOKEN
      },
      data: params
    }
    return axios(options)
  .then(response => {
      return response.data
  })
  .catch(err => {
      console.log(err)
  })
  },
  }


module.exports = questionsModel;