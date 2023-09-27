import { Link } from 'gatsby'
import React, { useState } from 'react'
import ModalReadMore from './ModalReadMore'

const PortafolioSectionLooking = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="portafolio-section-looking">
      <div className="portafolio-section-looking__container">
        <h2 className="portafolio-section-looking__container__title">
          ARE YOU A COMPANY SEEKING INVESTMENT OR DEBT?
        </h2>
        <p className="portafolio-section-looking__container__text">
          Contact us and become a part of Ironman Partners selected mentoring
          and partnership programs.
        </p>

        <Link
          to="#open"
          onClick={() => setShowModal(true)}
          className="portafolio-section-looking__container__button"
        >
          LEARN MORE
        </Link>
      </div>

      <div className="portafolio-section-looking__slogan">
        <p className="portafolio-section-looking__slogan__text">
          <b>IRONMAN CAPITAL PARTNERS</b> has collaborated with global
          market-leading alternative access investments, which are leaders in
          the US, aiming to provide consistent and superior risk-adjusted
          returns. Discover more about them and begin growing your wealth today.
        </p>
      </div>

      {showModal && <ModalReadMore title={'Bob'} setShowModal={setShowModal} />}
    </section>
  )
}

export default PortafolioSectionLooking
