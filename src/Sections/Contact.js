import React from 'react';
import emailjs from 'emailjs-com'
import contact from '../Img/contact.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'portfolio_response', e.target, 'user_WoqaAlFni1PiCmybMCzlU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
      const notify = () => toast("email sent successfully!");
      function ValidateEmail() 
        {
            var x=document.getElementsByName("from_mail").value;
            var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(x.match(mailformat))   
            {
                notify()
                return (true)
            }
            alert("You have entered an invalid email address!")
            return (false)
        }

    return (
        <div id="contactme" className="row align-items-center shadow-inset shadow-soft d-inline-flex p-1 col-md-12 mx-auto justify-content-around">
            <div className="col-md-12 text-center m-5 h1">CONTACT</div>
            <div className="col-md-8 shadow-soft rounded px-2 py-5 my-1 mx-2 " id="">
                
                <form action="#" name="myForm"  className="w-75 my-0 mx-auto border-light" onSubmit={sendEmail}>
                <div className="form-group mb-3">
                    <label>Full name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="John doe" name="from_name" required/>
                </div>
                <div className="form-group mb-3">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="john@abc.com" name="from_mail" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3">
                    <label>Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder="type your message here..." name="message"></textarea>
                </div>
                
                <button type="submit" value="send" className="btn btn-primary">Send</button>
                {/* <ToastContainer /> */}
                </form>

            </div>
            <div className="col-md-8 px-md-8 py-md-5 my-4">
                <img src={contact} alt=""/>
            </div>
        </div>
    );
}
export default Contact;
