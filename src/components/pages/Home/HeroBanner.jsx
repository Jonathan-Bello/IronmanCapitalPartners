import React from 'react'
import PortadaHome from '../../../assets/images/PortadaHome.png'
import LogoIronmanPortada from '../../../assets/images/logo-ironman-portada.png'
import { Link } from 'gatsby'

const HeroBanner = () => {
  return (
    <section className="hero">
      <img src={PortadaHome} alt="Ironman" className="hero__bg" />

      <div className="hero__content">
        <img
          src={LogoIronmanPortada}
          alt="Ironman"
          className="hero__titleImg"
        />

        <p className="hero__text">
          <b>IRONWALLET</b> is a digital banking platform that is the gateway to
          a broad spectrum of investment opportunities. IronWallet is not just a
          digital private bank but an all-encompassing financial solution for
          the tech-savvy generation. It combines premium banking and wealth
          management services, covering everything from savings accounts to
          commercial paper S&P, private equity in small and medium enterprises,
          and real estate.
        </p>

        <Link
          to="/contact"
          className="hero__button"
          activeClassName="active"
          partiallyActive={true}
        >
          CHAT WITH US
        </Link>
      </div>
    </section>
  )
}

export default HeroBanner
