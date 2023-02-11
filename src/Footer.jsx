import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <section className='contact'>

          <img src='./src/logo.svg' alt='logo' className='footer-logo' />
          <p>Lorem ipsum dolo sit amet, consectetur  adpiscing elit.
            Maunis nulla quam, hendrerit lacinia vestibulum a, ultrices ques sem.
          </p>

          <div className='calling'>
            <BiPhoneCall className='phone'/>
            <p>Phone: +1 123 456 789</p>
          </div>

          <div className='email'>
            <FiMail className='mail'/>
            <p>example@huddle.com</p>
          </div>

          <div className='icons'>
            <AiFillFacebook className='fb'/>
            <BsInstagram className='insta'/>
            <FaTwitterSquare className='twitter'/>
          </div>
      </section>

      <section className='newsletter'>
        <h3>Newsletter</h3>
        <p>To recieve tips on how to grow your community. Sign up to our weekly newsletter.
          We'll never send you spam or pass on your email address.
        </p>
        <form>
          <input type='email' required/>
          <button className='form-btn'>Subscribe</button>
        </form>
      </section>
    </div>
  )
}
