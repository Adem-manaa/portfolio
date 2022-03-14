import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/adem-manaa-4a82321bb/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Adem-manaa" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/adam._.manaa/" target="_blank" rel="noreferrer"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials 