let Models = require('../Models/Models.js');

let questionController = {
  getQuestions: (req, res) => {
    Models.questions.getQuestions(req.query.productId)
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
    Models.questions.getAnswers(req.query.questionId)
    //should take in a param ie: productId
    .then(data => {
      // console.log('DATA RECEIVED:', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING ANSWERS SERVER: ', err)
    })
  },
  updateHelpfulnessAnswer: (req, res) => {
    Models.questions.updateHelpfulnessAnswer(req.body.params.answerId)
    //should take in a param ie: productId
    .then(data => {
      // console.log('DATA RECEIVED:', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING ANSWERS SERVER: ', err)
    })
  },
  updateHelpfulnessQuestion: (req, res) => {
    Models.questions.updateHelpfulnessQuestion(req.body.params.questionId)
    //should take in a param ie: productId
    .then(data => {
      // console.log('DATA RECEIVED:', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING QUESTIONS SERVER: ', err)
    })
  },
}

module.exports = questionController;