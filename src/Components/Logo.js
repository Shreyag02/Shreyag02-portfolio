import React from 'react';
import logo from '../Img/logo.png';
const Logo = () => {
    return (
    <a className="navbar-brand shadow-soft rounded-circle  border border-light mr-lg-4" href="#header">
        <img className="navbar-brand-light" src={logo} alt="Logo light"/>
    </a>
    );
}

export default Logo;