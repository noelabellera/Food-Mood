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
    location: req.query.location
  }).then(response => {
    res.send(response.jsonBody.businesses);
  }).catch(e => {
    console.log(e);
  });  
}

// let yelp = new Yelp({
//   client_id: YELP_ID,
//   client_secret: YELP_SECRET
// })

// function yelp2() {
//   console.log('this is the yelp api')
//   yelp.getBusiness(e)
//     .then(businesses => {
//       console.log(businesses)
//     .catch(e => {
//       console.log(e)
//     })
//   })

// }



// function yelpAPI() {
//     console.log("Hello Yelper")
//     client.search({
//         term:'Four Barrel Coffee',
//         location: 'san francisco, ca'
//       }).then(response => {
//         console.log(response.jsonBody.businesses[0]);
//       }).catch(e => {
//         console.log(e);
//       });
// }

module.exports = {
    yelp2
}