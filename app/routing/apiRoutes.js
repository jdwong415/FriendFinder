var express = require('express');
var router = express.Router();
var friends = require("../data/friends");

// Get all friends
router.get('/api/friends', function(req, res) {
  res.json(friends);
});

// Create new friend
router.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
  res.json(getBestMatch(newFriend));
});

module.exports = router;

function getBestMatch(newFriend) {
  var arr = [];
  for (var i = 0; i < friends.length - 1; i++) {
    var score = 0;
    for (var j = 0; j < friends[i].scores.length; j++) {
      score += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
    }
    arr.push(score);
  }
  var index = findMinDifference(arr);
  return friends[index];
}

function findMinDifference(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return arr.indexOf(min);
}