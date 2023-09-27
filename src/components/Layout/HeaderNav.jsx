import React from 'react'
import { Link } from 'gatsby'
import LogoHorizontal from '../../assets/images/LogoHorizontal.svg'
import { RxCross2 } from 'react-icons/rx'

const HeaderNav = ({ showMenu, setShowMenu }) => {
  return (
    <nav className={`HeaderNav ${showMenu ? 'HeaderNav--active' : ''}`}>
      <img
        className="HeaderNav__Logo"
        src={LogoHorizontal}
        alt="Ironman Capital"
      />

      <RxCross2
        className="HeaderNav__Icon"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="HeaderNav__Links">
        <Link to="/">Home</Link>
        <Link to="/who">Who we are</Link>
        <Link to="/partners">Ironman Partners</Link>
        <Link to="/portafolio">Portafolio</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* <select className="HeaderNav__Select">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select> */}
    </nav>
  )
}

export default HeaderNav
