const Product = require("./products");

const fun = async (req, res) => {
  let data = await Product.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        brand: { $regex: req.params.key },
      },
    ],
  });
  res.send(data);
};
module.exports = fun;
