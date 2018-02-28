import React from 'react';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';

const ResultsPage = (props) => {
    return (
        <div className='ResultsPage'>
            <WeatherDisplay />
            <span>{props.temp}</span>
        </div>
    )
}

export default ResultsPage;