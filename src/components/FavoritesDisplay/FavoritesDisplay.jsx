import React from 'react';


const FavoritesDisplay = (props) => {
    return (
        <div>
            <div>
                <h3>Favorites List:</h3><br />
            </div>
            <div>
                {props.favorites.map((favorite, idx) => (

                    <div key={idx} className="restaurantCard">
                        <div>
                            <a href={favorite.url}><img src={favorite.image_url} className="restaurantPics" alt="location" /></a>
                        </div>
                        <div className="restaurantInfo">
                            <h2>{favorite.name}</h2>
                            <h5 className="ratings">Rating: {favorite.rating}</h5>
                            <h4>{favorite.address}</h4>
                            <h4>{favorite.state}, {favorite.zip}</h4>
                            <h4>{favorite.phone}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavoritesDisplay;