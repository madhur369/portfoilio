import React, { useState , useRef } from 'react';
import Jello from 'react-reveal/Jello';
import LightSpeed from 'react-reveal/LightSpeed';
import { Element } from 'react-scroll';
import emailjs from '@emailjs/browser';



function Contact() {
  const form = useRef();
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate inputs
    let valid = true;
    if (!form.current.user_name.value) {
      setNameValid(false);
      valid = false;
    } else {
      setNameValid(true);
    }

    if (!form.current.user_email.value || !/\S+@\S+\.\S+/.test(form.current.user_email.value)) {
      setEmailValid(false);
      valid = false;
    } else {
      setEmailValid(true);
    }

    if (!form.current.message.value) {
      setMessageValid(false);
      valid = false;
    } else {
      setMessageValid(true);
    }

    // Send email if inputs are valid
    if (valid) {
      emailjs.sendForm('service_y0eqpy7', 'template_ak7zxdj', form.current, 'bvss-BD2vYPMXvmyC')
        .then((result) => {
          console.log(result.text);
          alert('Email sent!');
          document.getElementById("message").innerHTML="Good Job!";
          // Clear form
          form.current.reset();
        }, (error) => {
          console.log(error.text);
        });
    }
  }


  return (
    <Element name="contact">
      <section className="contact">
        <div className="container">
          <div className="contact-main">
            <Jello><h3>HAVE A PROJECT?</h3></Jello>
            <Jello><h2>LEAVE A MESSAGE!</h2></Jello>
          
              <form className="row" ref={form} onSubmit={sendEmail}>
              <LightSpeed left>
                <div className="form-floating col-md-6 mb-3">
                  <input type="text" name="user_name" className={`form-control ${nameValid ? '' : 'is-invalid'}`} id="floatingInput" placeholder='Full name' />
                  <label htmlFor="floatingInput">Full name</label>
                  {!nameValid && <div className="invalid-feedback">Please enter your name.</div>}
                </div>

                <div className="form-floating col-md-6 mb-3">
                  <input type="email" name="user_email" className={`form-control ${emailValid ? '' : 'is-invalid'}`} id="floatingInput" placeholder='email' />
                  <label htmlFor="floatingInput">Email address</label>
                  {!emailValid && <div className="invalid-feedback">Please enter a valid email address.</div>}
                </div>

                <div className="form-floating col-md-12 mb-3">
                  <input type="text" name="message" className={`form-control ${messageValid ? '' : 'is-invalid'}`} id="floatingInput" placeholder='message' />
                  <label htmlFor="floatingInput">Message</label>
                  {!messageValid && <div className="invalid-feedback">Please enter a message.</div>}
                </div>

                <div className="col-md-8">
                  <button type="submit" value="Send" class="btn animated-button">
                    <span class="button-text ">Send</span>
                  </button>
                </div>
            </LightSpeed>

              </form>

            <Jello>
              <h2 id='message'>GET IN TOUCH</h2>
            </Jello>
          </div>
        </div>
      </section>
    </Element>


  )
}

export default Contact