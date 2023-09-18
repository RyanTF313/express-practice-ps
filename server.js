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

app.get("/tip/:total/:tipPercentage", function (req, res) {
  const { total, tipPercentage } = req.params;
  res.send(`<h1>${Math.abs(total / Math.abs(100 / tipPercentage))}</h1>`);
});

app.get("/magic/:question", function (req, res) {
  const { question } = req.params;
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  res.send(`
  <p>${question}</p>
  <h1>${responses[Math.floor(Math.random() * responses.length)]}</h1>
  `);
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3005, function () {
  console.log("Listening on port 3005");
});
