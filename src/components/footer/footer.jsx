import React from 'react'
import "./footer.css"
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Footer = () => {

  return (
    <footer>
      <a href="#" className='footer_logo' > ADAM </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://web.facebook.com/adem.manaa.es/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.instagram.com/adam._.manaa/" target="_blank" rel="noreferrer"><RiInstagramFill/></a>
        <a href="https://www.linkedin.com/in/adem-manaa-4a82321bb/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        {/* <small>
          &copy; Adam Website. All rights reserved.
        </small> */}
        <div>
        &copy; Adam Website. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer