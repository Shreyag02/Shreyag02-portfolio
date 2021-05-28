  
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
const Projectcard = ({gifsrc, glink, pname, ptext}) => {
    return (
        <div className="col-md-3 m-4">
        <div className="bg-primary border-light shadow-soft">
            <img src={gifsrc} style={{height: "250px"}} className="card-img-top rounded-top p-2" alt=""/>
            <div className="card-body">
                <h3 className="h5 card-title mt-1">{pname}</h3>
                <p className="card-text">{ptext}</p>
                <a href={glink} className="btn btn-primary btn-sm"><span className=" m-1 p-1">
                    <FontAwesomeIcon icon={faGithub}/>
                </span>
                 View on Github </a>
            </div>
        </div>
    </div>
    );
}

export default Projectcard;