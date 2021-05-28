import React from 'react';
import about from '../Img/test.png';

const About = () => {
    return (
        <div id="about" className="row align-items-center shadow-soft d-inline-flex p-1 col-md-12 mx-auto justify-content-around pb-3">
            <div className="col-md-12 text-center mt-5 h1">ABOUT</div>
            <div className="col-md-5 p-1">
                <img src={about} alt=""/>
            </div>
            <div className="col-md-5 text-center p-6 border-light shadow-soft rounded mx-2 my-4" id="">
                <p className="h6 text-center text-md-justify">I'm a final year undergraduate currently pursuing a bachelor's degree in Computer Science and Engineering from ABES Engineering College, Ghaziabad. I'm a proactive learner, enthusiastic about Web Design and Front-end Development. Currently, I am working with React JS and plan on working with complete MERN Stack in my future projects.</p>
                <br/><a href="https://drive.google.com/file/d/17aG_G88DVqYQAfMSkTQyGodBo9pT3EdK/view?usp=sharing" target="blank"><button type="button" className="btn btn-primary col-md-8">View Resume</button></a>
            </div>
        </div>
    );
}

export default About;