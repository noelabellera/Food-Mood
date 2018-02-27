import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <Link to='/' onClick={props.handleLogout} >LOG OUT &nbsp;|&nbsp;</Link>
        <span>Hello, {props.user.name}</span>
    </div>
    :
    <div>
        <Link to ='/login'> LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>

    return (
        <div>
            {nav}
        </div>
    );
};

export default NavBar;

