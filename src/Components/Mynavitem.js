  
import React from 'react';

const Mynavitem = ({hlink="#",text}) => {
    return (
    <li className="nav-item dropdown">
        <a href={hlink} className="nav-link trigger-autoclose" >
            <span className="nav-link-inner-text dropdown-item">{text}</span>
        </a>
    </li>
    );
}

export default Mynavitem;
