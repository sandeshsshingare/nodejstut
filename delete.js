const dbConnect = require("./mongodb");

const deleteData = async () => {
  let data = await dbConnect();
  let deleteRes = await data.deleteOne({ name: "i phone" });
  console.log(deleteRes.acknowledged);
};
deleteData();
