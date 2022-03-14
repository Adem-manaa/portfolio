import React from 'react'
import "./services.css";
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li > 
              <GiCheckMark className='service_list-icon' />
              <p>FrontEnd Web</p>
            </li>
            <li > 
              <GiCheckMark className='service_list-icon' />
              <p>BackEnd Web</p>
            </li>
            <li > 
              <GiCheckMark className='service_list-icon' />
              <p>Some Web Design </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className='service'>
          <div className="service_head">
            <h3>Mobile Development</h3>
          </div>
          <ul className='service_list'>
            <li > 
              <GiCheckMark className='service_list-icon' />
              <p>FrontEnd Mobile</p>
            </li>
            <li > 
              <GiCheckMark className='service_list-icon' />
              <p>BackEnd Mobile</p>
            </li>
            <li > 
              <GiCheckMark className='service_list-icon' />
              <p>Some Mobile App Design</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services