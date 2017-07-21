// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up our Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve files in 'public' directory
app.use(express.static('public'));

// Load routes
app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});