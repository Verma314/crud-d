var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
var templateHandler = require('./templateHandler');
var Database = require('./dbConnect.js')

// https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb

app.use(bodyParser.urlencoded({ extended: true })); 

var allData = []


app.post('/', function(req, res) {
  res.send ('Your response has been accepted!  at ' + templateHandler.getDate() )
  templateHandler.sendJsonData( req.body);
  templateHandler.buildApp();
  allData.push ( req.body)
});

app.post('/printAllData', function(req, res) {
  if ( allData != []) {
    console.log (  Database(allData,"insert") );
  }
  var result = Database( [], "read");
  res.send ( result);
  console.log("resultttttttttttt" )
  console.log(result)
});


app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});




