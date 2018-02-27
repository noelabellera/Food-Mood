import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <span>Hello, {props.user.name}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/about'>ABOUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/search'>SEARCH</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/eightball'>ASK THE 8-BALL</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/' onClick={props.handleLogout} >LOG OUT</Link>
    </div>
    :
    <div>
        <Link to ='/about'>ABOUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
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

