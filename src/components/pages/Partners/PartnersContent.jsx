import React from 'react'
import Banner from '../../Banner/Banner'
import PortadaPartners from '../../../assets/images/PortadaPartners.jpg'
import ParthersSection from './ParthersSection'

import ParthersDanger from './ParthersDanger'

const PartnersContent = () => {
  return (
    <>
      <Banner
        img={PortadaPartners}
        title={'IRONMAN PARTNERS'}
        text={'PRIVATE EQUITY ACCELERATOR'}
        urlLink={'/contact'}
      />

      <ParthersDanger />

      <ParthersSection />

    </>
  )
}

export default PartnersContent
