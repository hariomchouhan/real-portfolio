import React from 'react'
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form className='c-form'>
      <input type="text" placeholder='Full Name' />
      <input type="email" placeholder='Your Email' />
      <input type="text" placeholder='Phone Number' />
      <textarea name="" id="" cols="30" rows="7" placeholder='Message'></textarea>
      <button className='c-btn btn'>Submit</button>
    </form>
  )
}

export default ContactForm
