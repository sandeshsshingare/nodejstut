let getData = require("./mongodb");

const getall = () => {
  getData().then((response) => {
    response
      .find()
      .toArray()
      .then((data) => {
        console.log(data);
      });
  });
};
// getall();

// another way
async function getOne() {
  let result = await getData();
  let one = await result.find({ brand: "apple" }).toArray();
  console.warn(one);
}
getOne();
