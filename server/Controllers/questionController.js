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

  submitAnswer: (req, res) => {
    console.log('SUBMITTING INFO ON SERVERSIDE', req.body.params)
    const question_id = req.body.params.question_id
    const params = {
      body: req.body.params.body,
      name: req.body.params.name,
      email: req.body.params.email,
    }
    Models.questions.submitAnswer(question_id, params)
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON SUBMITTING ANSWER SERVER SIDE: ', err)
    })
  },
  submitQuestion: (req, res) => {
    console.log('SUBMITTING INFO ON SERVERSIDE', req.body.params)
    const params = {
      body: req.body.params.body,
      name: req.body.params.name,
      email: req.body.params.email,
      product_id: parseInt(req.body.params.productId),
    }
    Models.questions.submitQuestion(params)
    .then(data => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON SUBMITTING ANSWER SERVER SIDE: ', err)
    })
  }
}

module.exports = questionController;