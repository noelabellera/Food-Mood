import React from 'react';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay';
import './ResultsPage.css';

const ResultsPage = (props) => {

    let results = props.temp === undefined ?
        <div>
            <h1>You've entered an invalid Zip Code</h1>
        </div>
    
        :

        <div className='ResultsPage'>
            <WeatherDisplay temp={props.temp} 
                            city={props.city} 
                            description={props.description}
            />
            <RestaurantDisplay temp={props.temp}/>
        </div>

    
    return (
        <div className='ResultsPage'>
            {results}
        </div>
    )
}

export default ResultsPage;