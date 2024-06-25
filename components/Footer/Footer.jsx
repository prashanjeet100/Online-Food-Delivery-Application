import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
            At hungrela, we believe in the magic of food. Every meal is prepared with love, care, and a dash of joy, ensuring you savor each bite. Delivered fresh, from our kitchen to your door.
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1 919-234-7645</li>
                <li>contact@hungrela.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2024 Hungrela. All rights reserved.
      "Bringing joy to your doorstep, one delicious meal at a time." </p>
    </div>
  )
}

export default Footer
