import React from "react"

import { RxHamburgerMenu } from "react-icons/rx"
import LogoHorizontal from "../../assets/images/LogoHorizontal.svg"

import iconFacebook from "../../assets/icons/facebook.svg"
import iconInstagram from "../../assets/icons/instagram.svg"
import iconiLinkedin from "../../assets/icons/linkedin.svg"

const Header = () => {
  return (
    <header className="Header ed-grid s-grid-3 full s-cross-center gap-0">
      <RxHamburgerMenu className="Header__menu" />

      <img
        className="Header__logo s-to-center"
        src={LogoHorizontal}
        alt="Ironman Capital"
      />

      <div className="Header__buttons">
        <img className="Header__button" src={iconFacebook} alt="Facebook" />
        <img className="Header__button" src={iconInstagram} alt="Instagram" />
        <img className="Header__button" src={iconiLinkedin} alt="Linkedin" />
      </div>
    </header>
  )
}

export default Header
