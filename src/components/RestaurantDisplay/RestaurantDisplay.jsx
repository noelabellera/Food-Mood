import React from 'react';



const RestaurantDisplay = (props) => {
    let msg = '';
    if(props.temp < 65) {
        msg = "Good day to stay in today and get cozy in front of the tv"
    } else if(props.temp > 65 && props.temp < 80) {
        msg = "Looks nice and warm. You should go out for a walk or a run."
    }


    return (
        <div>
            <h2>This is the restaurant display</h2>
            <p>{msg}</p>
        </div>
    );
};


export default RestaurantDisplay;