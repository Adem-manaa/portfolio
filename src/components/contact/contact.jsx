import React from 'react'
import "./contact.css";
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1g3cyp', 'template_v3ab9jx', form.current, 'fI9m43Yn3nQin1ygm');
       
      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <articel className="contact_option">
            <MdEmail className='contact_icon'/>
            <h4>Email</h4>
            <h5>Ademan257@gmail.com</h5>
            <a href="mailto:Ademan257@gmail.com" target='_blank'>Send a message</a><br />
          </articel>
          <articel className="contact_option">
            <BsMessenger className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Adam Manaa</h5>
            <a href="https://m.me/adem.manaa.es/" target='_blank'>Send a message</a><br />
          </articel>
          <articel className="contact_option">
            <BsLinkedin className='contact_icon'/>
            <h4>LinkedIn</h4>
            <h5>adem manaa</h5>
            <a href="https://www.linkedin.com/in/adem-manaa-4a82321bb/" target='_blank'>Send a message</a>
          </articel>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='subject' placeholder='The Subject' required />
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <div className="btn1">
             <button className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact