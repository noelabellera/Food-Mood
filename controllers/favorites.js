var User = require('../models/User');
var Favorite = require('../models/Favorite');


function saveFavorite(req, res) {
    console.log("This is favorites controller");
    var favorite = new Favorite(req.body);
    favorite.save(function(err) {
        // TODO finish function to save favorites

    });
}

module.exports = {
    saveFavorite
}