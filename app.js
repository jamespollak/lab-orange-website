const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/benefit", (request, response) => {
  response.sendFile(__dirname + "/views/benefit.html");
});

app.get("/pricing", (request, response) => {
  response.sendFile(__dirname + "/views/pricing.html");
});

app.get("/testimonials", (request, response) => {
  response.sendFile(__dirname + "/views/testimonials.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
