import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <span>Hello, {props.user.name}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/about' className="Link">ABOUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/search' className="Link">SEARCH</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/eightball' className="Link"> ASK THE MAGIC 8-BALL</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to = '/favorites' className="Link">FAVORITES</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/' onClick={props.handleLogout} className="Link">LOG OUT</Link>
    </div>
    :
    <div>
        <Link to ='/about'  className="Link">ABOUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to ='/login' className="Link"> LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='Link'>SIGN UP</Link>
    </div>

    return (
        <div className="NavBar">
            {nav}
        </div>
    );
};

export default NavBar;

