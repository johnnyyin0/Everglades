let Models = require('../Models/Models.js');

let questionController = {
  get: (req, res) => {
    Models.questions.getQuestions()
    //should take in a param ie: productId
    .then(data => {
      console.log('DATA RECEIVED:', data)
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR ON FETCHING QUESTIONS SERVER: ', err)
    })
  }

}

module.exports = questionController;