import React from 'react';
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay';
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay';
import './ResultsPage.css';
import { Link } from 'react-router-dom';

const ResultsPage = (props) => {

    let results = props.city === "" ?
        <div>
            <h1>You've entered an invalid City/Zip Code</h1><br/>
            <h4><Link to='/search' onClick={props.resetSearch}>Return to Search Page</Link></h4>
        </div>
    
        :

        <div className='ResultsPage'>
            <WeatherDisplay temp={props.temp} 
                            city={props.city} 
                            description={props.description}
            />
            <h4><Link to='/search' onClick={props.resetSearch}>New Search</Link></h4>
            <RestaurantDisplay temp={props.temp}
                               restaurants={props.restaurants}
                               handleFavoritesBtn={props.handleFavoritesBtn}
            />
        </div>

    
    return (
        <div className='ResultsPage'>
            {results}
        </div>
    )
}

export default ResultsPage;