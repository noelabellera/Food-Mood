var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: String,
    address: String
})


module.exports = mongoose.model('Restaurant', restaurantSchema);


