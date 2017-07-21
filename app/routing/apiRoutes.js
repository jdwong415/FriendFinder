var express = require('express');
var router = express.Router();
var friends = require("../data/friends");

var userData = friends;

// Get all friends
router.get('/api/friends', function(req, res) {
  res.json(userData);
});

// Create new friend
router.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  userData.push(newFriend);
  res.json(userData[0]);
});

module.exports = router;