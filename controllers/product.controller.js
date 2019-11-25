const Product = require('../models/product.model');

exports.product_create = function (req, res) {
  let product = new Product(
    {
      name: req.body.name,
      mobile: req.body.mobile,
      addresses: {
        homeeaddress: {
          line: req.body.address0a,
          city: req.body.address0b
        },
        officeaddress: {
          line: req.body.address1a,
          city: req.body.address1b
        }
      }
    }
  );
  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully' )
  })
};



exports.product_details = function (req, res) {
  Product.findOne({ name: req.body.requestprod }, function (err, product) {
    if (err) return next(err);
    if (product != null) {
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
    //res.sendfile('./../index.html');
  })
};



exports.product_delete = function (req, res) {
  Product.remove({ name: req.body.deleteprod }, function (err) {
    if (!err) {
      res.send("deleted!");
    }
    else {
      res.send(" could  not delete")

    }
  });
};

