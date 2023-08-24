import React from 'react'
import Banner from '../../Banner/Banner'
import PortadaPartners from '../../../assets/images/PortadaPartners.jpg'

const PartnersContent = () => {
  return (
    <>
      <Banner
        img={PortadaPartners}
        title={'IRONMAN PARTNERS'}
        text={'PRIVATE EQUITY ACCELERATOR'}
        urlLink={'/'}
      />
    </>
  )
}

export default PartnersContent
