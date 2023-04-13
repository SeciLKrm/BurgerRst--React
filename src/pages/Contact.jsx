import React from 'react'
import BannerImage from "../assets/2blackbean.jpg"

const Contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage : `url(${BannerImage})`}}></div>
<div className='rightSide'>
    <h1>Contact Us </h1>
    <form id='contact-form' method='Post'>
        <label htmlFor="name">Full Name</label>
        <input name='name' placeholder='Enter your name'type='text' />
        <label htmlFor="email">Email</label>
        <input name='email' placeholder='Enter your email'type='email' />
        <label htmlFor="message">Message</label>
        <textarea name="message" required cols="30" rows="6" placeholder='Enter your message'></textarea>
    <button type='submit'>Send Message</button>
    </form>
</div>
    </div>
  )
}

export default Contact