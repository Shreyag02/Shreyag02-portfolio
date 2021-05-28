import React from 'react';

const Skills = () => {
    return (
    <div id="skills" className="row align-items-center shadow-inset shadow-soft d-inline-flex p-3 col-md-12 mx-auto justify-content-around">
        <div className="col-md-12 text-center m-5 h1">SKILLS</div>
        <div className="col-md-3 m-4 text-center">
            <div className="card bg-primary border-light shadow-soft">
                <div className="card-body">
                <h3 className="h4 card-title mt-3">LIBRARIES & FRAMEWORKS</h3>
                <div className="pt-3">
                    <p className="mb-1 h5">React JS</p>
                    <p className="mb-1 h5">Bootstrap</p>
                    <p className="mb-1 h5">JQuery</p>
                </div>
                </div>
            </div>
        </div>            
        <div className="col-md-3 m-4 text-center">
            <div className="card bg-primary border-light shadow-soft">
                <div className="card-body">
                <h3 className="h4 card-title mt-3">PROGRAMMING LANGUAGES</h3>
                <div className="pt-3">
                    <p className="mb-1 h5">C/C++</p>
                    <p className="mb-1 h5">JavaScript</p>
                    <p className="mb-1 h5">HTML/HTML5</p>
                    <p className="mb-1 h5">CSS/CSS3</p>
                    <p className="mb-1 h5">SQL</p>
                    <p className="mb-1 h5">MongoDB</p>
                </div>
                </div>
            </div>
        </div>
        <div className="col-md-3 m-4 text-center">
            <div className="card bg-primary border-light shadow-soft">
                <div className="card-body">
                <h3 className="h4 card-title mt-3">RELEVANT SKILLS</h3>
                <div className="pt-3">
                    <p className="mb-1 h5">Data Structures & Algorithms</p>
                    <p className="mb-1 h5">Responsive Web Design</p>
                    <p className="mb-1 h5">Front-End Development</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;