import React from 'react';
import Logo from '../Components/Logo';
import Mynavitem from '../Components/Mynavitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
    <header id="header" className="header-global shadow-soft">
    <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light">
        <div className="container position-relative">
            <Logo/>
            <div className="navbar-collapse collapse" id="navbar_global">
                <div className="navbar-collapse-header">
                    <div className="row">
                        <div className="col-6"></div>	
                        <div className="col-6 collapse-close">
                            <a href="#navbar_global" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"> 
                            <FontAwesomeIcon icon={faTimes}/>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="navbar-nav navbar-nav-hover dropdown align-items-lg-center">
                    <Mynavitem hlink="#about" text="ABOUT"/>
                    <Mynavitem hlink="#projects" text="PROJECTS"/>
                    <Mynavitem hlink="#experience" text="EXPERIENCE"/>
                    <Mynavitem hlink="#skills" text="SKILLS"/>
                    <Mynavitem hlink="#education" text="EDUCATION"/>
                    <Mynavitem hlink="#contactme" text="CONTACT"/>   
                </ul>
            </div>
            <div className="d-flex align-items-center">
                <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
</header>
    );
}

export default Header;