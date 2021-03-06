//app.js
// http://127.0.0.1:1234/

const express = require('express');
const bodyParser = require('body-parser');
const customer = require('./routes/customer.route'); // Imports routes for the customers
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb+srv://someuser:abcd1234@cluster0-8od1g.mongodb.net/mydb2";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all routes related to /customer:
app.use('/customers', customer);

let port =  process.env.PORT || 1234;


app.get('/', function(req, res) {
  res.sendfile('./index.html');
});



app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});