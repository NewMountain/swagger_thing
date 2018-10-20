const express = require("express");
const app = express();
const fs = require("fs");

// Constants
const PORT = 3000;
let docs;

// Routes
app.get("/hello", (req, res) => {
  res.json({ greeting: "hello" });
});

app.get("/docs", (req, res) => {
  res.json(docs);
});
// Get Express listening!
app.listen(PORT, () => {
  docs = JSON.parse(fs.readFileSync("./swagger.json"));
  console.log(`Alive on port ${PORT}`);
});
