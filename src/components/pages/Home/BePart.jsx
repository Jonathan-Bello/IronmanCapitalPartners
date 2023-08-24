import { Link } from 'gatsby'
import React from 'react'
import bgFoto from '../../../assets/images/bgFoto.jpg'
import bgFotoMobile from '../../../assets/images/bgFotoMobile.jpg'
import useWindowSize from '../../../hooks/useWindowSize'

const BePart = () => {
  const windowSize = useWindowSize()

  return (
    <section className="BePart">
      <img
        className="BePart__bg"
        src={windowSize.width > 768 ? bgFoto : bgFotoMobile}
        alt="bgFoto"
      />
      <h3 className="BePart__title">Do you want to be part?</h3>
      <p className="BePart__text">
        Complete the form and become part of our clients
      </p>

      <Link className="BePart__button" to="/contact">
        I WANT TO BE PART
      </Link>
    </section>
  )
}

export default BePart
