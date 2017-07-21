var express = require('express');
var router = express.Router();
var path = require("path");

/** Routes **/

// Go to survey page
router.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Go to home page if route not defined
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;