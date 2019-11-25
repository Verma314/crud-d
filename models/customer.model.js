const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    name: {type: String, required: true, max: 100},
    mobile: {type: Number, required: true},
    addresses: {
      homeeaddress: {
          line: String,
          city: String
      },
      officeaddress: {
        line: String,
        city: String
      }    
  }

});





module.exports = mongoose.model('Customer', customerSchema);