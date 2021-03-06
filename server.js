const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
const mongoose = require('mongoose');
const logger = require("morgan");

// db models
const db = require('./models');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Debug Mongoose
mongoose.set('debug', true);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Google Book Search
app.get("/api/books/:book", (req, res) => {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.book)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log("error", error);
    })
})

// Saves Book to MongoDB - Not Working Yet
app.post("/api/save-book", (req, res) => {
  db.Book.create(req.body)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.json(err);
    });
})
// Deletes Book to MongoDB - Not Working Yet
app.post("/api/books/:bookID", (req, res) => {
  db.Book.deleteOne({
    _id: req.params.bookID
  }).then()
  res.send("It's working!");
})

// View All Saved Books - Not Working Yet
app.get("/api/books", (req, res) => {
  db.Book.find({})
    .then(dbArticle => {
      res.json(dbArticle);
    })
    .catch(err => {
      res.json(err);
    })
})

// Send every request to the React app - Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
