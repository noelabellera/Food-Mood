const API = {
    fetchWeather: function(zipCode, city) {
        let URI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zipCode},us&appid=47dcfeade617a7a89bc2cf4b8ab9fb63&units=imperial`
        return (
            fetch(URI, {
                method: 'get'
            })
        )
    },
    fetchYelp: function(location, terms) {
        let term = terms.join('+, ')
        let URI2 = `/api/users/yelp?location=${location}&radius=8047m&term=resturant,+${term}`
        return (
            fetch(URI2, {
                method: 'get'
            })
        )
    }
};

export default API;