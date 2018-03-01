import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = (props) => {
    return (
        <div>
            <h1>About</h1>
            <h3>Can't really decide to eat when it's cold outside or blazing hot?<br/>
                FOOD MOOD has got you covered. FOOD MOOD is an app that shows suggested<br />
                places to eat or types of foods to eat according to your local weather.<br />
                All you need to do is type in your desired zip code and see the results!
            </h3>
            <br/>
            <h3>Happy Eating!</h3>
            <Link to='/search'>Go to Search Page</Link>
        </div>
    )
}

export default AboutPage;