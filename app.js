//app.js

const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = "mongodb://localhost:27017/mydb2";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// all routes related to /product:
app.use('/products', product);

let port =  process.env.PORT || 1234;


app.get('/', function(req, res) {
  res.send ('Welcome the website is working' )

});



app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});