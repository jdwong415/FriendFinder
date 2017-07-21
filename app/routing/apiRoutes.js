var express = require('express');
var router = express.Router();
var userData = require("../../server");

// Get all friends
router.get('/api/friends', function(req, res) {
  res.json(userData.arr);
});

module.exports = router;