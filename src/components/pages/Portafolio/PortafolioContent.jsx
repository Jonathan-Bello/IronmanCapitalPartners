import React from 'react'
import PortadaPortfolio from '../../../assets/images/portafolio/PortadaPortfolio.jpg'
import Banner from '../../Banner/Banner'
import PortafolioSectionLooking from './PortafolioSectionLooking'
import AlternativeInvestments from './AlternativeInvestments'

const PortafolioContent = () => {
  return (
    <>
      <Banner
        img={PortadaPortfolio}
        title={'PORTFOLIO'}
        text={
          'We don’t merely supervise our investors and partners capital. We are committed to ensuring its long-term growth!'
        }
        urlLink={'/contact'}
      />
      <PortafolioSectionLooking />
      <AlternativeInvestments />
    </>
  )
}

export default PortafolioContent
