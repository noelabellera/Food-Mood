import React from 'react';
import './RestaurantDisplay.css';



const RestaurantDisplay = (props) => {
    let msg = '';
    if (props.temp <= 65) {
        msg = "SUGGESTED FOODS FOR A COLD DAY LIKE THIS: \n SOUPS, SOUL FOOD, COMFORT FOOD"
    } else if (props.temp > 65 && props.temp < 80) {
        msg = "SUGGESTED FOODS FOR A NICE DAY LIKE THIS: \n SANDWICHES, BURGERS, PASTA, BBQ"
    } else if (props.temp >= 80) {
        msg = "SUGGESTED FOODS FOR A HOT DAY LIKE THIS: \n SALADS, SUSHI, ICE CREAM, SMOOTHIES"
    }


    return (
        <div>
            <div>
                <h3>{msg}</h3><br/>
            </div>
            <div>
                {props.restaurants.map((restaurant, idx) => (

                    <div key={idx} className="restaurantCard">
                        <div>
                            <a href={restaurant.url}><img src={restaurant.image_url} className="restaurantPics" alt="restaurant" /></a>
                        </div>
                        <div className="restaurantInfo">
                            <h2>{restaurant.name}</h2>
                            <h5>Rating: {restaurant.rating}</h5>
                            <h4>{restaurant.location.address1}</h4>
                            <h4>{restaurant.location.city}, {restaurant.location.zip_code}</h4>
                            <h4>{restaurant.display_phone}</h4>
                            <button className="favBtn">Add To Favorites</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};


export default RestaurantDisplay;