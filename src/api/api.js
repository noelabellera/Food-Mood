const API = {
    fetchWeather: function(zipCode) {
        let URI = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.OWM_KEY}&units=imperial`
        return (
            fetch(URI, {
                method: 'get'
            })
            .then(response => response.json())
        )
    }
};

export default API;