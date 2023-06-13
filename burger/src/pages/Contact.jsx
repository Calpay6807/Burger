import React from 'react'
import BannerImage from "../assets/2blackbean.jpg"
function Contact() {
  return (
    <div className='contact'  style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='rightSide'>
    <h1 className='lead'>Contact Us</h1>
    <form id='contact-form'>
    <label htmlFor="name">FullName</label>
    <input name='name' placeholder='Enter FullName' type="text" />

    <label htmlFor="email">email</label>
    <input name='email' placeholder='Enter an email' type="email" />

    <label htmlFor="message">message</label>
    <textarea name='message' placeholder='Enter Message'></textarea>

    <button type='submit'>Send Message</button>
    </form>
    </div>

    
    </div>
  )
}

export default Contact

