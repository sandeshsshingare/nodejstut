module.exports = reqLoad = (req, res, next) => {
  if (!req.query.age) {
    res.send("<h3>Please provide the age</h3>");
  } else if (req.query.age < 18) {
    res.send("You are not allowed");
  } else {
    next();
  }
};
