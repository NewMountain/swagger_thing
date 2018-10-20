const express = require("express");
const fs = require("fs");
const Mustache = require("mustache");
//const pathToSwaggerUi = require("swagger-ui-dist").absolutePath();

const app = express();

// Instantiate template
let template;

app.use("/static", express.static("static"));

const PORT = 1337;

//app.use(express.static(pathToSwaggerUi));

app.get("/", (req, res) => {
  const view = {
    awesomeUrl: "http://localhost:3000/docs",
    path: "./static"
  };
  const output = Mustache.render(template, view);
  res.send(output);
});

app.listen(PORT, () => {
  template = fs.readFileSync("./templates/index.html", "utf8");
  console.log(`Running on port ${PORT}`);
});
