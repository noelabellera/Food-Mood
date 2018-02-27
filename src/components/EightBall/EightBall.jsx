import React from 'react';

const EightBall = (props) => {
    return (
        <div>
            <h3 style={{color: 'white'}}>This is the messenger part of the app</h3>
            <button onClick={props.updateState}>Answer</button>
            <h2>{props.answer}</h2>
        </div>
    )
}

export default EightBall;