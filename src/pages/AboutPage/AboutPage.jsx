import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const AboutPage = (props) => {
    return (
        <div>
            <h1>About</h1>
            <div className="About">
                <h3>Can't really decide to eat when it's cold outside or blazing hot? FOOD MOOD <br/><br/>
                    has got you covered. FOOD MOOD is an app that shows suggested<br /><br/>
                    places to eat or types of foods to eat according to your local weather.<br /><br/>
                    All you need to do is type in your desired zip code and see the results!
                </h3>
                <br/>
            <h3>Happy Eating!</h3>
            </div>
            <Link to='/search'>Go to Search Page</Link>
        </div>
    )
}

export default AboutPage;