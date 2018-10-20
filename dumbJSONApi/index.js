const express = require("express");
const R = require("ramda");
const app = express();

// Constants
const PORT = 3000;

// Routes
app.get("/hello", (req, res) => {
  res.json({ status: "hello" });
});

app.get("/docs", (req, res) => {
  res.json({ todo: "docs" });
});
// Get Express listening!
app.listen(PORT, () => {
  console.log(`Alive on port ${PORT}`);
});
