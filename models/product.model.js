const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
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


// Export the model
module.exports = mongoose.model('Product', ProductSchema);