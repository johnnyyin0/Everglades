const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static("public"));
app.use(morgan());

app.listen(port, () => {
  console.log("Server listening on port", port)
})