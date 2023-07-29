import React from 'react'
import './Contact.css';
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <div id='Contact'>
        <h2 className='c-heading'>Let's Discuss Your <span>Project</span></h2>
        <p className='c-desc'>Let's make something new, different and more meaningful or make thing more visual and conceptual.</p>
        <div className="c-box">
            <div className="c-left">
                <div className='c-card'>
                    <div className='c-icon'>
                        <BiPhoneCall/>
                    </div>
                    <div className='c-detail'>
                        <p>Call Me</p>
                        <p>+91 97709 94821</p>
                    </div>
                </div>
                <div className='c-card'>
                    <div className='c-icon'>
                        <AiOutlineMail/>
                    </div>
                    <div className='c-detail'>
                        <p>Email</p>
                        <p>hariomchouhan430@gmail.com</p>
                    </div>
                </div>
                <div className='c-card'>
                    <div className='c-icon'>
                        <CiLocationOn/>
                    </div>
                    <div className='c-detail'>
                        <p>Address</p>
                        <p>Indore, MP, India</p>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact
