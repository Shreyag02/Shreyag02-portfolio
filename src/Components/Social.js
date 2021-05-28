import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = ({hlink, icon}) => {
    return (
        <li className="m-2 mb-1">
            <a href={hlink} target="blank" className="btn btn-icon-only btn-pill mr-3 justify-content-center d-flex align-items-center">
            {/* <span className={icon}></span> */}
            <FontAwesomeIcon icon={icon}/>
            </a>
        </li>
    );
}

export default Social;