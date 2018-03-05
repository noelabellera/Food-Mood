var User = require('../models/User');
var Favorite = require('../models/Favorite');


function saveFavorite(req, res) {
    console.log("This is favorites controller");
    var favorite = new Favorite(req.body);
    favorite.save(function(err) {
        User.findById(req.user._id)
        .then(user => {
            user.favorites.push(favorite._id);
            user.save()
            .then(() => {
                user.populate('favorites', () => {
                    res.json(user.favorites);
                });
            })
        })
    });
}

module.exports = {
    saveFavorite
}