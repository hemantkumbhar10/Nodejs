const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

// const apiKey = 'YOUR_ACCESS_KEY';

const apiKey = "1c76c7be067d9b0d53541c9e3130b291";

app.use(express.static("public/"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

router.get("/", function (req, res) {
  res.render("index", { weather: null, error: null });
});

router.post("/", function (req, res) {
  let city = req.body.city;
  let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
  console.log(city);
  request(url, function (err, response, body) {
    if (err) {
      return res.render("index", {
        weather: null,
        error: "Error, please try again",
      });
    }
    let weather = JSON.parse(body);
    if (weather.current == undefined) {
      return res.render("index", {
        weather: null,
        error: "Error, please try again",
      });
    }
    let weatherText = `It's ${weather.current.temperature} degrees ${
      weather.current.is_day === "yes" ? "Day time" : "Night time"
    } in ${weather.location.name}, ${weather.location.country}!`;
    res.render("index", { weather: weatherText, error: null });
  });
});

app.use("/", router);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
