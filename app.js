const express = require("express");
require("./config");
const Product = require("./products");
const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Product(req.body);
  const response = await data.save();
  console.log(response);
  res.send(response);
});
app.get("/list", async (req, res) => {
  let data = await Product.find();
  console.log(data);
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  let data = await Product.updateOne(req.params, {
    $set: req.body,
  });
  console.log(data);
  res.send(data);
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
