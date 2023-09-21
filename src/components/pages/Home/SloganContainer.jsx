import React from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import { Link } from 'gatsby'

const SloganContainer = () => {
  const windowSize = useWindowSize()

  return (
    <section className="SloganContainer">
      <p className="SloganContainer__text">
        <b>IRONMAN CAPITAL PARTNERS</b> crafts attractive and tailor-made
        investment opportunities suitable for a diverse array of clients and
        financial aspirations.
      </p>

      <h3 className="SloganContainer__title">INTERESTED IN JOINING US?</h3>
      <p className="SloganContainer__text">
        IRONMAN CAPITAL PARTNERS crafts attractive and tailor-made investment
        opportunities suitable for a diverse array of clients and financial
        aspirations.
      </p>

      <Link className="SloganContainer__button" to="/contact">
        I WANT TO BE PART
      </Link>
    </section>
  )
}

export default SloganContainer
