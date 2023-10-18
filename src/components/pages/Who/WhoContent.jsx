import React from 'react'
import Banner from '../../Banner/Banner'
import PortadaWho from '../../../assets/images/PortadaWho.png'
import SectionTeam from './SectionTeam'

const WhoContent = () => {
  return (
    <>
      <Banner
        img={PortadaWho}
        title={'WHO WE ARE'}
        text={
          '<b>IRONMAN CAPITAL PARTNERS</b> embodies the hallmark traits of a multi-family office, characterized by synchronized interests, elite services, unmatched experience, and unwavering trust.'
        }
        urlLink={'/contact'}
      />
      <SectionTeam />
    </>
  )
}

export default WhoContent
