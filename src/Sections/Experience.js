  
import React from 'react';
import experience from '../Img/experience.png';
const Experience = () => {
    return (
        <div id="experience" className="row align-items-center shadow-soft d-inline-flex p-1 col-md-12 mx-auto justify-content-around">
            <div className="col-md-12 text-center m-5 h1">EXPERIENCE</div>
            <div className="col-md-5 accordion text-center p-6 border-light shadow-soft rounded mx-2 my-4" id="accordionExample1">
                <h2>DEVSLANE</h2>
                <h6>Escecion Technologies Pvt. Ltd.</h6>
                <hr/>
                <h4>Intern : Aug 2019 - May 2020</h4>
                <h6>Mentor : Mr. Ritik Raj</h6>
                <br/>
                <p>Worked as an intern in the Web Design and Front-end development domain</p>
                <a href="https://drive.google.com/file/d/1gRhhovIQfQGmGCewoThe51vu3c5eMxnD/view?usp=sharing" target="blank"><button type="button" className="btn btn-primary col-md-8">View Internship Certificate</button></a>
            </div>
            <div className="col-md-5 p-0">
                <img src={experience} alt=""/>
            </div>
        </div>
    );
}

export default Experience;