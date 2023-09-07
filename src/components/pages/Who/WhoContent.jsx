import React from 'react'
import Banner from '../../Banner/Banner'
import PortadaWho from '../../../assets/images/PortadaWho.jpg'
import SectionTeam from './SectionTeam'

const WhoContent = () => {
  return (
    <>
      <Banner
        img={PortadaWho}
        title={'WHO WE ARE'}
        text={
          'At IRONMAN CAPITAL PARTNERS, we offer attributes of the multi family office: ALIGN INTEREST, SERVICE, EXPERIENCE, AND TRUST.'
        }
        urlLink={'/contact'}
      />
      <SectionTeam />
    </>
  )
}

export default WhoContent
