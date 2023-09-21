import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import useWindowSize from '../../hooks/useWindowSize'
import HeaderNav from './HeaderNav'

import LogoHorizontal from '../../assets/images/LogoHorizontal.svg'
import iconFacebook from '../../assets/icons/facebook.svg'
import iconInstagram from '../../assets/icons/instagram.svg'
import iconiLinkedin from '../../assets/icons/linkedin.svg'

const Header = () => {
  const windowSize = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (windowSize.width > 768) {
      setShowMenu(true)
    }

    // if (windowSize.width <= 768) {
    //   // si showMenu es true, bloquear scroll vertical
    //   if (showMenu) {
    //     document.body.style.overflow = 'hidden'
    //   } else {
    //     document.body.style.overflow = 'unset'
    //   }
    // }
  }, [windowSize, showMenu])

  return (
    <>
      <header className="Header ed-grid s-grid-3 m-grid-2 full s-cross-center gap-0">
        <RxHamburgerMenu
          className="Header__menu"
          onClick={() => setShowMenu(!showMenu)}
        />

        <img
          className="Header__logo"
          src={LogoHorizontal}
          alt="Ironman Capital"
        />

        <div className="Header__buttons">
          <img className="Header__button" src={iconFacebook} alt="Facebook" />
          <img className="Header__button" src={iconInstagram} alt="Instagram" />
          <img className="Header__button" src={iconiLinkedin} alt="Linkedin" />
        </div>
      </header>

      {showMenu && <HeaderNav showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>
  )
}

export default Header
