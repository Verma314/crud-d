var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb2";

function Database(data, job) {

  if (job == "insert") {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb2");
      dbo.collection("customers").insertMany(data, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      });
    });
  }
  
  if (job == "read") {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb2");
      dbo.collection("customers").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log('reading...');
        console.log(result);
        db.close();
        return result;
      });
    });
  }
}




module.exports = Database;