import React from 'react';
import './WeatherDisplay.css';


const WeatherDisplay = (props) => {
    let icon = '';
    if(props.description === 'clear sky') {
        icon = 'https://i.imgur.com/0nbu8gL.png';
    } else if(props.description === 'moderate rain') {
        icon = 'https://i.imgur.com/ydHZy6R.png';
    } else if(props.description === 'few clouds') {
        icon = 'https://i.imgur.com/9filZG8.png';
    } else if(props.description === 'overcast clouds') {
        icon = 'https://i.imgur.com/nqRok7n.png';
    } else if(props.description === 'broken clouds') {
        icon = 'https://i.imgur.com/y8loG4I.png';
    } else if(props.description === 'light rain' || props.description === 'rain') {
        icon = 'https://i.imgur.com/oHiFOKz.png';
    } else {
        icon = 'https://i.imgur.com/J4f2h42.png';
    }

    return(
        <div className="WeatherDisplay">
            <div className="icon">
                <img src={icon} className="weatherIcon" alt="clear sky"/>
            </div>
            
            <div className="info">
                <h1>{props.city}</h1>
                <h2>Current Temp: {props.temp} &#x2109;</h2>
                <h3 className="Description">{props.description}</h3>
            </div>
        </div>
    )
}

export default WeatherDisplay;


