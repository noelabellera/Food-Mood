import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = (props) => {
    return (
        <div className='LoginPage'>
            <LoginForm 
                history={props.history}
                handleLogin={props.handleLogin}
                resetSearch={props.resetSearch}
            />
        </div>
    )
}

export default LoginPage;