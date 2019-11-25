const Customer = require('../models/customer.model');

exports.customer_create = function (req, res) {
  let customer = new Customer(
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
  customer.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('customer created successfully' )
  })
};

exports.customer_details = function (req, res) {
  Customer.findOne({ name: req.body.requestprod }, function (err, customer) {
    if (err) return next(err);
    if (customer != null) {
      res.send(customer);
    } else {
      res.send("could not find, must have been deleted, or check case of input")
    }
  })
};


exports.all_customers = function (req, res) {
  Customer.find({}, function (err, users) {
    var userMap = {};
    users.forEach(function (user) {
      userMap[user._id] = user;
    });
    res.send(userMap);
  })
};


exports.customer_delete = function (req, res) {
  Customer.remove({ name: req.body.deleteprod }, function (err) {
    if (!err) {
      res.send("customer deleted!");
    }
    else {
      res.send("could  not delete")
    }
  });
};



exports.update = function (req, res) {


  Customer.remove({ name: req.body.name }, function (err) {
    if (!err) {
      let customer = new Customer(
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
      customer.save(function (err) {
        if (err) {
          return next(err);
        }
        res.send('customer updated successfully!' )
      })
    }
    else {
      res.send("could not update")
    }
  });

};
