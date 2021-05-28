import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMapMarkerAlt, faUserGraduate, faAward } from '@fortawesome/free-solid-svg-icons'
const MyEducation = ({idnumber,hlink,htext,hsubtext,location,yop,aggregate,}) => {
    return (

    <div className="card card-sm card-body bg-primary border-light mb-0 accordion-item">
        <a href={hlink} class=" collapsed" role="button" data-bs-target={hlink} className="accordion-header accordion-panel-header" 
        data-bs-toggle="collapse"  aria-expanded="false" aria-controls="collapseOne">
            <span className="h5 mb-0 font-weight-bold">{htext}<br/><span 
            className="h6 mb-0 font-weight-bold">{hsubtext}</span></span>
            <span className="icon icon-plus">
                <FontAwesomeIcon icon={faPlus} />
            </span>
        </a>
        <div className="accordion-collapse collapse" id={idnumber}>
            <div className="pt-3 accordion-body">
                <p className="mb-0 h6"><span className="icon"><span 
                className="m-1 p-1">
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                </span>{location}</span></p>
                <p className="mb-0 h6"><span className="icon"><span 
                className="m-1 p-1">
                <FontAwesomeIcon icon={faUserGraduate}/>
                </span>{yop}</span></p>
                <p className="mb-0 h6"><span className="icon"><span 
                className="m-1 p-1">
                <FontAwesomeIcon icon={faAward}/>
                </span>{aggregate}</span></p>
            </div>
        </div>
    </div>
    );
}

export default MyEducation;