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
        title={'WHO WE ARE'}
        text={
          'We don´t just supervise our capital. We are committed to watching it grow over the long term.'
        }
        urlLink={'#'}
      />
      <PortafolioSectionLooking />
      <AlternativeInvestments />
    </>
  )
}

export default PortafolioContent
