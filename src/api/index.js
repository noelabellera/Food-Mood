const API = {
    fetchWeather: function(zipCode, city) {
        let URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zipCode},us&appid=7e7d28986f2e54b5f2ffc1a787b3f89e&units=imperial`
        return (
            fetch(URI, {
                method: 'get'
            })
        )
    },
    fetchYelp: function(location, terms) {
        let term = terms.join('+, ')
        let URI2 = `/api/users/yelp?location=${location}&term=resturant,+${term}`
        return (
            fetch(URI2, {
                method: 'get'
            })
        )
    }
};

export default API;