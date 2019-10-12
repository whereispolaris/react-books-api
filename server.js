const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
// Install axios
const axios = require('axios');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

// Google Book Search
app.get("/api/books", (req, res) => {
  console.log("This route works");
})


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
