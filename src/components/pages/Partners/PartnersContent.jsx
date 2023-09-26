import React from 'react'
import data from './dataParthers'
import Banner from '../../Banner/Banner'
import PortadaPartners from '../../../assets/images/PortadaPartners.jpg'
import ParthersSection from './ParthersSection'
import PartherList from './PartherList'

const PartnersContent = () => {
  return (
    <>
      <Banner
        img={PortadaPartners}
        title={'IRONMAN PARTNERS'}
        text={'PRIVATE EQUITY ACCELERATOR'}
        urlLink={'/contact'}
      />

      <ParthersSection />

      <PartherList
        color={'blue'}
        title={'Portafolio'}
        list={data.partherPortafolio}
      />

      <PartherList color={'black'} title={'Exit'} list={data.partherExit} />
    </>
  )
}

export default PartnersContent
