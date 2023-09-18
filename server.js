// Load express
const express = require("express");

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/greeting", function (req, res) {
  res.send("<h1>Hello you!</h1>");
});

app.get("/greeting/:name", function (req, res) {
  const { name } = req.params;
  res.send(`<h1>Hello ${name}! It is so nice to see ya.</h1>`);
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3005, function () {
  console.log("Listening on port 3005");
});
