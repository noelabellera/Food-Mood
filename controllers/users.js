var User = require('../models/User');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;
const yelp = require('yelp-fusion');
 
const client = yelp.client('AK0zf7qn2PotWnZo4MP_jx1Mm87NHA-jxbogGPg9EShOMXzRo6fJ19QJA0DBiJldCpWWk_pQoGBgB4R4rAb7ABhSRoYi0Qokewt4rwT0W_gIrjQvEcP8Jvb_0vCWWnYx');

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.json({token: createJWT(user)});
        })
        .catch(err => res.status(400).json(err));
}

function login(req, res) {
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

function yelper() {
    console.log("Hello Yelper")
    client.search({
        term:'Four Barrel Coffee',
        location: 'san francisco, ca'
      }).then(response => {
          console.log('sdfjdsfk')
        console.log(response.jsonBody.businesses[0].name);
      }).catch(e => {
        console.log(e);
      });
}

module.exports = {
    signup,
    login,
    yelper
}