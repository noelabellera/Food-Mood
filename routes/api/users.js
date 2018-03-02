var express = require('express');
var router = express.Router();
var User = require('../../models/User');
var usersCtrl = require('../../controllers/users');
var yelpCtrl = require('../../controllers/yelpAPI')


/*------ Public Routes -----*/

router.get('/yelp', yelpCtrl.yelp2);
// router.get('/results', checkAuth, yelpCtrl.yelp2);
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);




function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
  }

module.exports = router;