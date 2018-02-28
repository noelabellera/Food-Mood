import React from 'react';
import './WeatherDisplay.css';


const WeatherDisplay = (props) => {
    return(
        <div className="WeatherDisplay">
            <h3>{props.city}</h3>
            <h3>Current Temp</h3>
            <h2>{props.temp} F</h2>
        </div>
    )
}

export default WeatherDisplay;


