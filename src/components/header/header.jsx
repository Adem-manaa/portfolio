import React from 'react'
import CTA from './CTA';
import "./header.css";
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/ademmanaa.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Manaa Adam</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials/>
         <div className="me">
           <img src={ME} alt="me" className='me-image' />
         </div>
         <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header