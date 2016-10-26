/**
 * @file    index.js
 * @date    2016-10-25
 * @brief   This is Hello World program of Node.js
 *
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('HelloWorld listening on port 3000!');
});
