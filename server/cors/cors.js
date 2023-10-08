const express = require("express");
const app = express();
const cors = require("cors");
const chalk = require("chalk");

const authorizedAPIs = [
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "http://localhost:8181", // Add your backend origin here
];


const options = (req, callback) => {
  // console.log("in cors: ", req.headers.origin);
  const isExist = authorizedAPIs.find(api => api === req.headers.origin);
  if (!isExist)
    return callback(
      chalk.redBright(
        `CORS Error: the API ${req.headers.origin} is an Unauthorized API`
      ),
      {
        origin: false,
      }
    );
  callback(null, { origin: true });
};

app.use(cors(options));

module.exports = app;
