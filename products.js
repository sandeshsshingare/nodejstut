const mongoose = require("mongoose");

const products = mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

module.exports = mongoose.model("products", products);
