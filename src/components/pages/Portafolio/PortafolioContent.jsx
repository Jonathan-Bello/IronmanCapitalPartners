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
          'We don´t just supervise our capital. We are committed to watching it grow over the long term.'
        }
        urlLink={'/contact'}
      />
      <PortafolioSectionLooking />
      <AlternativeInvestments />
    </>
  )
}

export default PortafolioContent
