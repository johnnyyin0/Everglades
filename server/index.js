const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require('cors');
const routes = require('./routes.js');
const app = express();

app.use(morgan('dev'));
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

//when a request is sent through '/', go to routes folder
app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server listening on port", port)
})
