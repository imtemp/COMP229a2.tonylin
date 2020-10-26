/*
File: users.js
Name: Tony Lin
Student ID: 301071193
Date: October 7
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
