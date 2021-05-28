  
import React from 'react';
import Projectcard from '../Components/Projectcard';
import one from "../Img/portfolio.gif"
import two from "../Img/git.gif"
import three from "../Img/alumni.gif"
const Projects = () => {
    return (
        <div id="projects" 
        className="row align-items-center shadow-inset shadow-soft 
        d-inline-flex p-3 col-md-12 mx-auto justify-content-around">
            <div className="col-md-12 text-center m-5 h1">PROJECTS</div>
            <Projectcard gifsrc={one}
             pname="Personal Portfolio" 
             ptext="This is my personal portfolio website developed in ReactJS which follows the minimalistic approach and trendy neumorphism design."
             glink="https://github.com/Shreyag02/shreyag02.github.io"/>
            <Projectcard gifsrc={two} 
             pname="git-fire app" ptext="It is a basic react app that uses Github-api to fetch userdata based on username and uses firebase for authenticating its users."
             glink="https://github.com/Shreyag02/GIT-fire-app"/>
            <Projectcard gifsrc={three} 
             pname="The Alumni Tracking System" 
             ptext="It is a portal designed for connecting the alumni of all the registered institutes of Govt of Goa at a central level." 
             glink="https://github.com/Shreyag02/SIH_2020"/>
        </div>
    );
}

export default Projects;