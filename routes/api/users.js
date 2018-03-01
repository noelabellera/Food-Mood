var express = require('express');
var router = express.Router();
var User = require('../../models/User');
var usersCtrl = require('../../controllers/users');
var yelpCtrl = require('../../controllers/yelpAPI')


/*------ Public Routes -----*/

router.get('/', yelpCtrl.yelpAPI);
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;