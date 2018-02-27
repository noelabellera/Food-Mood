var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: String,
    zipcode: Number,
    catagory: String
})


module.exports = mongoose.model('Restaurant', restaurantSchema);


