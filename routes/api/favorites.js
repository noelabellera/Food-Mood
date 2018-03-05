var express = require('express');
var router = express.Router();
var Favorite = require('../../models/Favorite');
var favoritesCtrl = require('../../controllers/favorites');


router.post('/favorites', favoritesCtrl.saveFavorite)


function checAuth(res, res, next) {
    if(req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;