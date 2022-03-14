import React from 'react'
import "./experience.css";
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiFlutter} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
// import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
            <h3>BackEnd Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <FaNodeJs className='experience_icon'/>
                <h4>NODEJS</h4>
              </article>
              <article className='experience_details'>
                <AiFillCheckCircle className='experience_icon'/>
                <h4>EXPRESS</h4>
              </article>
              <article className='experience_details'>
                <SiFirebase className='experience_icon'/>
                <h4>FIREBASE</h4>
              </article>
              <article className='experience_details'>
                <SiMysql className='experience_icon'/>
                <h4>SQL</h4>
              </article>
            </div>
        </div>
        <div className="experience_backend">
        <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <AiFillHtml5 className='experience_icon'/>
                <h4>HTML</h4>
              </article>
              <article className='experience_details'>
                <DiCss3 className='experience_icon'/>
                <h4>CSS</h4>
              </article>
              <article className='experience_details'>
                <SiJavascript className='experience_icon'/>
                <h4>JAVASCRIPT</h4>
              </article>
              <article className='experience_details'>
                <FaBootstrap className='experience_icon'/>
                <h4>BOOTSTRAP</h4>
              </article>
              <article className='experience_details'>
                <SiFlutter className='experience_icon'/>
                <h4>FLUTTER</h4>
              </article>
              <article className='experience_details'>
                <FaReact className='experience_icon'/>
                <h4>ReactJs</h4>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience