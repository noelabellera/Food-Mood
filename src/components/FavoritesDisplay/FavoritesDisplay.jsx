import React from 'react';
import './FavoritesDisplay.css';


const FavoritesDisplay = (props) => {
    return (
        <div>
            <div>
                <h2>Favorites List:</h2><br />
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
                            <h4>{favorite.city}, {favorite.state} {favorite.zip}</h4>
                            <h4>{favorite.phone}</h4>
                            <button className="removeBtn" onClick={() => {
                                props.handleRemoveBtn(favorite._id)
                            }} >Remove Favorite</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FavoritesDisplay;