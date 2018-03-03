import React from 'react';



const RestaurantDisplay = (props) => {
    let msg = '';
    if(props.temp <= 65) {
        msg = "SUGGESTED FOODS FOR A COLD DAY LIKE THIS: SOUPS, SOUL FOOD, COMFORT FOOD"
    } else if(props.temp > 65 && props.temp < 80) {
        msg = "SUGGESTED FOODS FOR A NICE DAY LIKE THIS: SANDWICHES, BURGERS, PASTA, BBQ"
    } else if(props.temp >= 80) {
        msg = "SUGGESTED FOODS FOR A HOT DAY LIKE THIS: SALADS, SUSHI, ICE CREAM, SMOOTHIES"
    }


    return (
        <div>
            <h3>{msg}</h3>
            <p>{props.restaurantName}</p>
        </div>
    );
};


export default RestaurantDisplay;