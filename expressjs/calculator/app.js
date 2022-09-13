const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname + "/" + "Add.html"));
});

app.get("/multiply", function (req, res) {
  res.sendFile(path.join(__dirname + "/Multiply.html"));
});

app.get("/divide", function (req, res) {
  res.sendFile(path.join(__dirname + "/Divide.html"));
});

app.get("/subtract", function (req, res) {
  res.sendFile(path.join(__dirname + "/Subtract.html"));
});

app.post("/addition", function (req, res) {
  number1 = parseFloat(req.body.num1);
  number2 = parseFloat(req.body.num2);

  num3 = number1 + number2;

  num3 = num3.toFixed();

  res.send("<h3>Addition" + "<br>" + "<br>" + "<h4>The answer is : " + num3);
});

app.post("/multiplication", function (req, res) {
  number1 = parseFloat(req.body.num1);
  number2 = parseFloat(req.body.num2);

  num3 = number1 * number2;

  num3 = num3.toFixed();

  res.send(
    "<h3>Multiplication" + "<br>" + "<br>" + "<h4>The answer is : " + num3
  );
});

app.post("/division", function (req, res) {
  number1 = parseFloat(req.body.num1);
  number2 = parseFloat(req.body.num2);

  num3 = number1 / number2;

  num3 = num3.toFixed();

  res.send("<h3>Division" + "<br>" + "<br>" + "<h4>The answer is : " + num3);
});

app.post("/subtraction", function (req, res) {
  number1 = parseFloat(req.body.num1);
  number2 = parseFloat(req.body.num2);

  num3 = number1 - number2;

  num3 = num3.toFixed();

  res.send("<h3>Subtraction" + "<br>" + "<br>" + "<h4>The answer is : " + num3);
});

//add the app
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
