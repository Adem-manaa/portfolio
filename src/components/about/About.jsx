import React from 'react'
import "./about.css";
import ME from '../../assets/me.jpg'
import {RiAwardFill} from 'react-icons/ri'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="Adam manaa" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
        <article className='about_card'>  
        <RiAwardFill className='about_icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>
        <article className='about_card'>  
        <AiFillPhone className='about_icon'/>
          <h5>Phone Number</h5>
          <small>+213540083398</small>
        </article>
        <article className='about_card'>  
        <MdEmail className='about_icon'/>
          <h5>Email</h5>
          <small>ja_manaa@esi.dz</small>
        </article>
        </div>
        <p>
        Manaa Adem,I'm 3rd year Computer Science student at ESI,with focus 
        on Mobile and Web development. I'am hard working,diligent and dedicated-all 
        qualities I put forward in everything I do. I did some small web projects and 
        I did a Complete Mobile App and some small Apps.
       
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
     
    </section>
  )
}

export default About