var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    image_url: String

}, {
    timestamps: true
});


module.exports = mongoose.model('Favorite', favoriteSchema)