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
          <b>IRONWALLET</b> is a state-of-the-art digital banking platform, providing unparalleled access to a broad range of most advanced Digital Banking, Access & Investing in Liquid AI mandates and Alternative Fractional low ticket Private Equity as unique closed investment opportunities for accredited and non acredited Crowdfunding investors. More than just a digital Investment and private bank, IronWallet serves as a holistic financial solution tailored for the tech-savvy generation. It seamlessly merges premium banking with comprehensive wealth management services, ranging from savings accounts to S&P commercial paper, private equity in SMEs, and real estate investments. Fractional Investments as low as $111.00 USD
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
