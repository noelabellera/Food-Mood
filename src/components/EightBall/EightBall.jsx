import React from 'react';
import './EightBall.css';

const EightBall = (props) => {
    return (
        <div className="EightBall">
            <h2 className="answers">{props.answer}</h2><br/>
            <button className="eightButton" onClick={props.updateState}>Answer</button>
        </div>
    )
}

export default EightBall;