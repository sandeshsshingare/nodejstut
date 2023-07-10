const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db("e-comm");
  let collection = await db.collection("products");
  return collection;
}

module.exports = getData;
