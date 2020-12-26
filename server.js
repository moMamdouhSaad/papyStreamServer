const express = require('express')
var bodyParser = require("body-parser");




//#region app config & middlewares

var port = process.env.PORT || 3000;
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use((req, res, next) => {
  // Access-Control-Allow-Origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept,authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, authtoken, X-Requested-With"
  );
  next();
});

app.use(express.static(__dirname + "/"));

//#endregion



app.get("/", (req,res,next)=>{
    res.sendFile(__dirname +'/index.html')
});


app.listen(port ,'0.0.0.0',() => {
  console.log(`App listening on ${port}!`)});