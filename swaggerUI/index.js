const express = require("express");
const pathToSwaggerUi = require("swagger-ui-dist").absolutePath();

const app = express();

const PORT = 1337;

app.use(express.static(pathToSwaggerUi));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
