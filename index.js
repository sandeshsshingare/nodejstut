// // module.exports ={
// //     x:10,
// //     y:20,
// //     z:function (){console.log('hello this is from the another module')}
// // }
// const index = require("./index.js");
// const http = require("http");
// const colors = require('colors')
// http.createServer(dataControl).listen(4500);

// function dataControl(req, res) {
//   res.write("heeeee");
//   res.end();
// }

// console.log(index.z());

// console.log('hello this is red text'.bgCyan)

// http package
// const http = require("http");
// const data = require("./data.js");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(501, { "content-type": "application-json" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

//manually get input from the console and create files
// const fs = require("fs");

// const processArg = process.argv;

// console.log("arguments", processArg);

// if (processArg[2] == "add") {
//   fs.writeFileSync(processArg[3], processArg[4], "utf8");
// } else if (processArg[2] == "remove") {
//   fs.unlinkSync(processArg[3]);
// } else {
//   console.log("invalid input");
// }

const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "files");

console.log(filePath);

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     filePath + "/hello" + i + ".txt",
//     `this is the first file text ${i}`
//   );
// }
console.log(fs.readdir(filePath));
// fs.readdir(filePath, (err, files) => {
//   files.forEach((data) => {
//     console.log(data);
//   });
//   console.log(files);
// });

// file curd operation
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname);
const curdPath = `${dirPath}/curd`;
const actualPaht = `${curdPath}/apple.txt`;

// fs.writeFileSync(`${curdPath}/apple.txt`, "this is the apple file");

// console.log(
//   fs.readFile(actualPaht, "utf8", (err, item) => {
//     if (!err) {
//       console.log("hello", item);
//     }
//   })
// );
// fs.appendFile(actualPaht, "this is appended text", (err) => {
//   if (!err) {
//     console.log("appended successfully");
//   }
// });

// fs.rename(actualPaht, `${curdPath}/fruit.txt`, (err) => {
//   if (!err) {
//     console.log("updated successfully");
//   }
// });
// fs.unlinkSync(`${curdPath}/fruit.txt`);

// console.log(curdPath);


// app.get("", (req, res) => {
//     console.log(req.query);
//     res.send(`
//     <a href='/about'>Click me</a>
//     `);
//   });
  
//   app.get("/about", (req, res) => {
//     res.send(`
//     <input type= "text" placeholder= "sandesh" value = ${req.query.name}>
//     <a href='/'>Click me</a>
//     `);
//   });
  
//   app.get("/help", (req, res) => {
//     res.send("Hello , this is help page");
//   });

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
console.log(publicPath);
// app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.get("/profile", (req, res) => {
  const user = {
    name: "sandesh",
    age: 22,
    address: "Hinjewadi, Pune",
    skills: ["java", "cpp", "js", "angular", "php"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/home.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(5000);


const express = require("express");
const reqFilter = require("./reqFilter");
const route = express.Router();
// const app = express();

// app.use(reqLoad);
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("<h3>Hello this is Home html</h3>");
});
route.get("/about", (req, res) => {
  res.send("<h3>Hello this is About html</h3>");
});
route.get("/about", (req, res) => {
  res.send("<h3>Hello this is About html</h3>");
});

app.use("/", route);
app.listen(5000, () => {
  console.log("running on port 5000");
});
