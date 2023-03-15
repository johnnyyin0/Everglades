const path = require("path");
const express = require("express");
const morgan = require("morgan");
require('dotenv').config()

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.use(morgan());

app.listen(process.env.PORT, () => console.log('listening on port ', process.env.PORT));