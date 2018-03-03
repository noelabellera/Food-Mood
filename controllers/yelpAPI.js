const Yelp = require('yelp-fusion-v3');
var YELP_KEY = process.env.YELP_KEY;
var YELP_ID = process.env.YELP_ID;
var YELP_SECRET = process.env.YELP_SECRET;

const yelp = require('yelp-fusion'); 
const client = yelp.client(YELP_KEY);
 
function yelp2(req, res) {
  console.log('yelp--------------------------------')
  client.search({
    term: req.query.term,
    location: req.query.location,
    limit: req.query.limit
  }).then(response => {
    console.log(response.jsonBody.businesses);
    res.send(response.jsonBody.businesses);
  }).catch(e => {
    console.log(e);
  });  
}

module.exports = {
    yelp2
}