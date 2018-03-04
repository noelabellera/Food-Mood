var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    name: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Favorite', favoriteSchema)