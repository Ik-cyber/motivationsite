const express = require("express");
const app = express();
const ejs = require("ejs");
const https = require("https");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  const url = "https://api.adviceslip.com/advice";

  https.get(url, (response) => {
    response.on("data", (d) => {
      data = JSON.parse(d);
    });
  });
  res.render("home", { name: data.slip.advice, ID :  data.slip.id});
});

const port = process.env.PORT || 3000

app.listen(port, console.log("Server started at port 3000"));
