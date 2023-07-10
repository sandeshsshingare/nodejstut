const dbConnect = require("./mongodb");

const insertData = async () => {
  let db = await dbConnect();
  //   console.log(db);
  let result = db.insertMany([
    {
      name: "vivo v12 pro",
      price: 1200,
      brand: "Vivo",
      catagory: "mobile",
    },
    {
      name: "vivo v12 pro",
      price: 1200,
      brand: "Vivo",
      catagory: "mobile",
    },
    {
      name: "vivo v12 pro",
      price: 1200,
      brand: "Vivo",
      catagory: "mobile",
    },
  ]);
  console.log(await result);
  if ((await result).acknowledged) {
    console.log("data inserted successfully");
  }
};
insertData();
