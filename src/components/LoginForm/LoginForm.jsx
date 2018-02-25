import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: ''
        }
    }

    handleChange = (field, e) => {
        this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        userService.login(this.state)
            .then(() => {
                this.props.handleLogin();
                this.props.history.push('/');
            })
            .catch(err => alert('Invalid Credentials'));
    }

    render() {
        return (
            <div>
                <h2>This is the loginForm</h2>
                <Link to ='/signup'>Sign Up</Link>
            </div>
        );
    }
};

export default LoginForm;
