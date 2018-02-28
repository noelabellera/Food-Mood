import React from 'react';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay';
import './ResultsPage.css';

const ResultsPage = (props) => {
    return (
        <div className='ResultsPage'>
            <WeatherDisplay temp={props.temp} 
                            city={props.city} 
                            description={props.description}
            />

            <RestaurantDisplay />
        </div>
    )
}

export default ResultsPage;