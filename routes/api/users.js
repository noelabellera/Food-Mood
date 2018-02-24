var express = require('express');
var router = express.Router();
var User = require('../../models/User');
var userCtrl = require('../../controllers/users');


/*------ Public Routes -----*/

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);