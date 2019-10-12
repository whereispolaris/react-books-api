const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');

// db models
const db = require('./models');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

// Google Book Search
app.get("/api/books", (req, res) => {
  res.send("This works");
})

app.post("/api/submit", (req, res) => {
  db.Book.create(req.body)
    .then(dbBook => {
      res.json(dbBook);
    });
})

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
