import React from 'react';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import './ResultsPage.css';

const ResultsPage = (props) => {
    return (
        <div className='ResultsPage'>
            <WeatherDisplay temp={props.temp} city={props.city}/>
        </div>
    )
}

export default ResultsPage;