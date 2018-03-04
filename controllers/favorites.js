var User = require('../models/User');
var Favorite = require('../models/Favorite');


function saveFavorite(req, res) {
    console.log("Your mom goes to college");
    var favorite = new Favorite(req.body);
    favorite.save(function(err) {
        // TODO finish function to save favorites

    });
}

module.exports = {
    saveFavorite
}