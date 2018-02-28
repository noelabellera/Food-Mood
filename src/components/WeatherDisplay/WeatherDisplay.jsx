import React from 'react';
import './WeatherDisplay.css';


const WeatherDisplay = (props) => {
    if(props.temp === undefined) {
        var msg = "You have entered an invalid zip code"
    }
    return(
        <div className="WeatherDisplay">
            <h3>{msg}</h3>
            <h3>{props.city}</h3>
            <h3>Current Temp</h3>
            <h2>{props.temp} F</h2>
            <h3 className="Description">{props.description}</h3>
        </div>
    )
}

export default WeatherDisplay;


