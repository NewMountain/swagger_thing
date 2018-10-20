const express = require("express");
const R = require("ramda");
const app = express();

// Routes
app.get("/hello", (req, res) => {
  res.json({ status: "hello" });
});

// Get Express listening!
app.listen(3000);
