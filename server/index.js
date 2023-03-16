const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const {getQuestions} = require('./helper.js')

const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static("public"));
app.use(morgan());

//Questions and answers path
app.get('/product', (req, res) => {
  getQuestions()
  .then(data => {
    res.send(data)
  })
  .catch((err) => {
    console.log('ERROR ON FETCHING QUESTIONS SERVER: ', err)
  })
})

app.listen(port, () => {
  console.log("Server listening on port", port)
})
