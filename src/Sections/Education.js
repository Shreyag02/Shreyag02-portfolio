import React from 'react';
import MyEducation from '../Components/MyEducation';
import edu from "../Img/education.png";
const Education = () => {
    return (           
        <div id="education" className="row align-items-center shadow-soft d-inline-flex p-1 col-md-12 mx-auto justify-content-around">
            <div className="col-md-12 text-center m-5 h1">EDUCATION</div>
            <div className="col-md-5 text-center p-0">
                <img src={edu} alt=""/>
            </div>
            <div className="col-md-5 accordion shadow-soft rounded px-0 mx-1 my-3" id="accordionExample">
                <MyEducation idnumber="panel-1" hlink="#panel-1"
                htext="ABES Engineering College" 
                hsubtext="Bachelor's degree, Computer Science" 
                location="Ghaziabad" yop="2017-2021" aggregate="Aggregate: 80.53%" />

                <MyEducation idnumber="panel-2" hlink="#panel-2"
                htext="Renaissance School" 
                hsubtext="Intermediate(CBSE), PCM" 
                location="Bulandshahr" yop="2017" aggregate="Aggregate: 90.80%" />

                <MyEducation idnumber="panel-3" hlink="#panel-3"
                htext="Renaissance School" 
                hsubtext="High School(CBSE)" 
                location="Bulandshahr" yop="2015" aggregate="CGPA: 10.0" />
            </div>
        </div>
    );
}

export default Education;