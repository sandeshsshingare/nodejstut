const dbConnect = require("./mongodb");

const update = async () => {
  let db = await dbConnect();
  console.log(db);
  let result = await db.updateOne(
    { brand: "vivo" },
    {
      $set: { brand: "One Plus", price: 4400 },
    }
  );
  console.log(result.acknowledged);
};
update();
