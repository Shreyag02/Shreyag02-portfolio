import React from 'react';
import Logo from '../Components/Logo';
import Social from '../Components/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMapMarkerAlt, faHeart} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <footer className="bg-soft bd-footer p-3 pt-5 p-md-5 text-center">
            <div className="container">
            <Logo/>
            <p className="h5 m-3">If you have a project I can help with, please get in touch.</p>
            <hr/>
            <ul className="d-flex row justify-content-center list-unstyled">
            <li className="m-1 col-md-5">
                <p><span className="icon">
                    <span className="m-1 p-1">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </span>
                shreyagupta72484@gmail.com</span></p>
            </li>
            <li className="m-1 col-md-5">
                <p><span className="icon"><span className=" m-1 p-1">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>    
                </span>Ghaziabad,India</span></p>
            </li>
            </ul>            
            <hr className="mx-5"/>
            <ul className="d-flex justify-content-center list-unstyled mb-4">
                <Social hlink="https://twitter.com/ShreyaG80358369" icon={faTwitter}/>
                <Social hlink="https://github.com/Shreyag02" icon={faGithub}/>
                <Social hlink="https://www.linkedin.com/in/shreya-gupta02/" icon={faLinkedinIn}/>
            </ul>
            <hr/>
            <p className="h5 mb-3">Made With <span className="icon-plus m-1 icon text-danger">
            <FontAwesomeIcon icon={faHeart}/>
            </span> by Shreya Gupta</p>
            </div>
        </footer>
    );
}

export default Footer;