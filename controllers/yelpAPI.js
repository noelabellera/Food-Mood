var YELP_KEY = process.env.YELP_KEY;
const yelp = require('yelp-fusion');
 
const client = yelp.client(YELP_KEY);


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
    yelpAPI
}