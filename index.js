const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Vercel!");
});

// Export the Express app as a module
module.exports = app;
