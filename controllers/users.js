var User = require('../models/User');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;
var YELP_KEY = process.env.YELP_KEY;
const yelp = require('yelp-fusion');
 
const client = yelp.client(YELP_KEY);

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.json({token: createJWT(user)});
        })
        .catch(err => res.status(400).json(err));
}

function login(req, res) {
    console.log("logging in")
    User.findOne({email: req.body.email}).exec().then(user => {
        if(!user) return res.status(401).json({err: 'bad credentials'});
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if(isMatch) {
                var token = createJWT(user);
                res.json({token});
            } else {
                return res.status(401).json({err: 'bad credentials'});
            }
        });
    }).catch(err => res.status(401).json(err));
}

function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET, 
        {expiresIn: '24h'}
    );
}

function yelpAPI() {
    console.log("Hello Yelper")
    client.search({
        term:'Four Barrel Coffee',
        location: 'san francisco, ca'
      }).then(response => {
        console.log(response.jsonBody.businesses[0]);
      }).catch(e => {
        console.log(e);
      });
}

module.exports = {
    signup,
    login,
    yelpAPI
}