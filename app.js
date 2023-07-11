const express = require("express");
const fun = require("./send.js");
require("./config");
const Product = require("./products");
const app = express();
app.use(express.json());

app.get("/list/:key", fun);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
