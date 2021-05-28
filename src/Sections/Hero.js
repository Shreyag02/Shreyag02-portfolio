import React from 'react';
import Social from '../Components/Social';
// import Typed from 'react-typed';
import Shreya from "../Img/shreya.jpg"
import { faTwitter, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
    return (
        <div id="contact" className="row align-items-center shadow-inset shadow-soft d-inline-flex p-1 col-md-12 mx-auto justify-content-around">
            <div className="col-md-12 px-md-8 py-md-5 mb-2 mt-7 h1 text-center">Hey there! I'm Shreya Gupta</div>
            <div className="col-md-5 text-center border-light shadow-soft rounded p-4 pt-6 mx-3 my-4" id="">
                <p className="h3 text-center">What I do?</p>
                <br/>
                <p className="h4 text-center">I'm a Front-End Developer.
                {/* <Typed
                strings={[
                    'Learner.',
                    'Web Designer.',
                    'Front-End Developer.',
                    'Programmer.']}
                    typeSpeed={55}
                    backSpeed={60}
                    loop >
                </Typed> */}
                </p>
                <hr className="mx-5"/>
                <ul className="d-flex justify-content-center list-unstyled mb-4">
                <Social hlink="https://twitter.com/ShreyaG80358369" icon={faTwitter}/>
                <Social hlink="https://github.com/Shreyag02" icon={faGithub}/>
                <Social hlink="https://www.linkedin.com/in/shreya-gupta02/" icon={faLinkedinIn}/>
                </ul>
            </div>
            <div className="col-md-4 rounded px-2 py-3 my-1 mb-3 mx-2 " id="">
            <div className=" shadow-inset border border-light bg-primary p-3 rounded-circle mt-1 mx-auto">
                <img src={Shreya} className="card-img-top shadow-soft p-3 border border-light rounded-circle" alt=""/>
            </div>
            </div>
        </div>
    );
}

export default Hero;