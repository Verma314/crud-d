const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.root = function (req, res) {
  res.send('Greetings from the Test controller home page!');
};



exports.product_create = function (req, res) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );
  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
};



exports.product_details = function (req, res) {
  Product.findOne({ name: req.body.requestprod }, function (err, product) {
    if (err) return next(err);
    if ( product != null ){
      res.send(product);
    } else {
      res.send("could not find, must have been deleted")
    }
  })
};


exports.all_products = function (req, res) {
  Product.find({}, function (err, users) {
    var userMap = {};
    users.forEach(function (user) {
      userMap[user._id] = user;
    });
    res.send(userMap);
  })
};



exports.product_delete = function (req, res) {
  Product.remove({ name: req.body.deleteprod }, function (err) {
    if (!err) {
      // message.type = 'notification!';
      res.send("deleted!");
    }
    else {
      // message.type = 'error';
      res.send(" could  not delete")

    }
  });
};

