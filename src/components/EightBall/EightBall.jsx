import React from 'react';
import './EightBall.css';

const EightBall = (props) => {
    return (
        <div className="EightBall">
            <button className="eightButton" onClick={props.updateState}>Answer</button>
            <h2>{props.answer}</h2>
        </div>
    )
}

export default EightBall;