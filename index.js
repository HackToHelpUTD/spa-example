var express = require('express');
var app = express();

app.use("/node_modules", express.static(__dirname + "/node_modules/"));
app.use("/src", express.static(__dirname + "/src/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});