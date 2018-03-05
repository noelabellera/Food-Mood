import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesDisplay from '../../components/FavoritesDisplay/FavoritesDisplay';


const FavoritesPage = (props) => {
    return(
        <div>
            <h1>These are your Favorites</h1>
            <FavoritesDisplay />
            <h4><Link to='/search'>Return to search</Link>&nbsp;|&nbsp;
            <Link to='/results'>Return to results</Link></h4>
        </div>
    )
}

export default FavoritesPage;