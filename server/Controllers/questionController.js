let Models = require('../Models/Models.js');

let questionController = {
  getQuestions: (req, res) => {
    Models.questions.getQuestions()
    //should take in a param ie: productId
    .then(data => {
      // console.log('DATA RECEIVED:', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING QUESTIONS SERVER: ', err)
    })
  },

  getAnswers: (req, res) => {
    console.log('THIS IS REQ BODY: ', req.query.questionId)
    Models.questions.getAnswers(req.query.questionId)
    //should take in a param ie: productId
    .then(data => {
      // console.log('DATA RECEIVED:', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING ANSWERS SERVER: ', err)
    })
  }

}

module.exports = questionController;