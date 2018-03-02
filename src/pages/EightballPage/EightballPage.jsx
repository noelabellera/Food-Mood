import React, { Component } from 'react';
import EightBall from '../../components/EightBall/EightBall';
import answers from './answers.js';
import { Link } from 'react-router-dom';


class EightBallPage extends Component {
    constructor() {
        super();
        this.state = {
            answer: "MY ANSWER TO YOU IS...",
            answers
        }
    }

    randomizeArray = () => {
        let rand = Math.floor(Math.random() * this.state.answers.length);
        console.log(this.state.answers[rand])
        return this.state.answers[rand] 
        
    }

    updateState = () => {
        this.setState({
          answer: this.randomizeArray()
        })
    }

    render() {
        return (
            <div>
                <h2>Ask The Magic 8 Ball if You should eat there!</h2><br/>
                <EightBall updateState={this.updateState} answer={this.state.answer}/>
                <br/>
                <h4><Link to='/results'>Back to Results</Link>
                &nbsp;|&nbsp;
                <Link to='/search'>Back to Search</Link></h4>
            </div>    
        )
    }
}

export default EightBallPage;


