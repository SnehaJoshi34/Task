//console.log("Hello world");
//add two numbers
// var a = 3;
// var b = 4;
// var c = a + b;
// console.log(c);

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Welcome back alien");
//     res.end();
//   })
//   .listen(9000);
// var calc = require("./calc.js");
// result = calc.add(4, 5);
// console.log("The output is " + result);

// FILE SYSTEM MODULE(FS)
// var fs = require("fs");
// fs.readFile("calc.js", "utf8", function (err, data) {
//   console.log(data);
// fs.writeFile("calc1.js", 'console.log("done")', function (err) {
// fs.appendFile("calc.js", 'console.log("done")', function (err) {
//   console.log("Data Saved");
// fs.unlink("calc1.js", function (err) {
//   console.log("Deleted");
// });

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/alien", function (req, res) {
  const id = req.query.id;
  res.send("welcome back alien " + id);
});
app.get("/alien/20", function (req, res) {
  res.send("hii sneha");
});
app.get("/alien/:id", function (req, res) {
  const id = req.params.id;
  res.send("hii sneha" + id);
});
app.listen(9000, function (req, res) {
  console.log("Running..");
});
