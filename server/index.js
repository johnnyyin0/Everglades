const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const {helper} = require('./helper.js')

const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static("public"));
app.use(morgan('dev'));

//QUESTIONS AND ANSWER PATHS
app.get('/questions', (req, res) => {
  //helper takes in a productID param
  helper.getQuestions()
  .then(data => {
    console.log('DATA RECEIVED', data)
    res.send(data)
  })
  .catch((err) => {
    console.log('ERROR ON FETCHING QUESTIONS SERVER: ', err)
  })
})

app.listen(port, () => {
  console.log("Server listening on port", port)
})
