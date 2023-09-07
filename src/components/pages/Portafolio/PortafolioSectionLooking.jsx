import { Link } from 'gatsby'
import React from 'react'

const PortafolioSectionLooking = () => {
  return (
    <section className="portafolio-section-looking">
      <div className="portafolio-section-looking__container">
        <h2 className="portafolio-section-looking__container__title">
          ARE YOU ACOMPANY LOOKING FOR INVESTMENT?
        </h2>
        <p className="portafolio-section-looking__container__text">
          Contact us and become part of Ironman Partners
        </p>

        <Link
          to="/contact"
          className="portafolio-section-looking__container__button"
        >
          I WANT TO BE PART
        </Link>
      </div>

      <div className="portafolio-section-looking__slogan">
        <p className="portafolio-section-looking__slogan__text">
          <b>IRONMAN CAPITAL PARTNERS</b> has teamed with <b>market-leading</b>{' '}
          alternative investments which are <b>US leaders</b>, focused on
          delivering consistent and superior risk-adjusted returns. Learn more
          about them and <b>start growing your money today.</b>
        </p>
      </div>
    </section>
  )
}

export default PortafolioSectionLooking
