import React from 'react'
import bgMobile from '../../../assets/images/bgMobile.jpg'
import bgDesk from '../../../assets/images/bgDesk.jpg'
import useWindowSize from '../../../hooks/useWindowSize'

const SloganContainer = () => {
  const windowSize = useWindowSize()

  return (
    <section className="SloganContainer">
      <img
        className="SloganContainer__bg"
        src={windowSize.width > 768 ? bgDesk : bgMobile}
        alt="bg"
      />
      <p className="SloganContainer__text">
        <b>IRONMAN CAPITAL PARTNERS</b> offers attractive and unique{' '}
        <b>INVESTMENT OPPORTUNITIES</b> that adapt to all kinds of{' '}
        <b>CLIENTS AND FINANCIAL GOALS.</b>
      </p>
    </section>
  )
}

export default SloganContainer
