const API = {
    fetchWeather: function(zipCode) {
        let URI = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=7e7d28986f2e54b5f2ffc1a787b3f89e&units=imperial`
        return (
            fetch(URI, {
                method: 'get'
            })
        )
    }
};

export default API;