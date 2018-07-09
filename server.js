var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");



//sets up the Express App

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Grabbing routes from my routes page
// require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
})
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
//   });
  
//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
//   });

//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  
  