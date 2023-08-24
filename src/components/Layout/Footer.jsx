import React from 'react'
import LogoVertical from '../../assets/images/LogoVertical.svg'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-6">
        <img
          className="Footer__logo s-to-center lg-cols-2"
          src={LogoVertical}
          alt="Logo Vertical"
        />

        <div className="Footer__content lg-cols-2">
          <h4>Contact Us</h4>
          <p>+1 (786) 367-1643</p>
          <p>raizenman@ironmancapitalpartners.com</p>
          <p>FAQ</p>
        </div>
        <div className="Footer__content">
          <h4>Legal</h4>
          <p>Terms and conditions</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
        </div>

        <div className="Footer__content">
          <h4>Hours</h4>
          <p> Monday - Friday : 9am</p>
          <p>Saturday: Closed </p>
          <p>Sunday: By appointment</p>
        </div>
      </div>

      <p className="Footer__text s-mb-0">
        © 2022 Ironman Capital Partners. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
