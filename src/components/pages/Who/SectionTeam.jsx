import React from 'react'
import WhoCard from './WhoCard'

import fotoRicardo from '../../../assets/images/who/foto-ricardo.jpg'
import fotoJohana from '../../../assets/images/who/foto-johana.jpg'
import fotoCristian from '../../../assets/images/who/foto-cristian.jpg'
import fotoDavid from '../../../assets/images/who/foto-david.jpg'
import fotoAditya from '../../../assets/images/who/foto-aditya.jpg'

import logoExperienceClub from '../../../assets/images/who/logo-experience-club.jpg'
import logoIeBusinessSchool from '../../../assets/images/who/logo-ie-business-school.jpg'
import logoIeUniversity from '../../../assets/images/who/logo-ie-university.jpg'
import logoAACSB from '../../../assets/images/who/logo-AACSB.jpg'
import logoSouth from '../../../assets/images/who/logo-south.jpg'

const SectionTeam = () => {
  return (
    <section className="SectionTeam">
      <p className="SectionTeam__text ed-grid">
        With a reservoir of collective expertise spanning decades, our team
        pledges minimal expenses for our clients, coupled with transparent
        insights into their financial trajectory.
      </p>

      <h3 className="SectionTeam__title">KEY MEMBERS</h3>
      <div className="SectionTeam__team">
        <WhoCard
          img={fotoRicardo}
          title={'Ricardo Aizenman'}
          subtitle={'Chairman'}
          url={'/ricardo'}
        />

        <WhoCard
          img={fotoJohana}
          title={'Johana Sevilla'}
          subtitle={'Operations Manager'}
          url={'/johana'}
        />
      </div>

      <h3 className="SectionTeam__title">PARTNERS</h3>
      <div className="SectionTeam__team">
        <WhoCard
          img={fotoCristian}
          title={'Cristian Arens'}
          subtitle={'Partner Ironman Capital Partners - Peru'}
          url={'/cristian'}
        />
        <WhoCard
          img={fotoAditya}
          title={'Aditya Malhotra'}
          subtitle={'EMEA - Madrid Office'}
          url={'/aditya'}
        />

        <WhoCard
          img={fotoDavid}
          title={'David Aizenman'}
          subtitle={'Next Generation'}
          url={'/david'}
        />
      </div>

      <h3 className="SectionTeam__title">ABOUT US</h3>
      <p className="SectionTeam__text ed-grid">
        With our strategic nexus in Miami, Florida, and a robust presence in
        Mexico City, Ironman pioneers the fintech frontier. Our rich legacy,
        spanning over two decades in global finance and fintech, amplifies our
        commitment to reimagining wealth management paradigms. Ironman’s
        distinction lies in its strategy of exclusively curating investment
        prospects through blue-chip joint venture collaborations. Our extensive
        portfolio encompasses pre-IPO ventures, venture capital endeavors, and
        accelerator programs, facilitated through our accredited partner
        platforms. With our sights set on the burgeoning markets of the USA and
        Latin America, Ironman’s visionary approach fuses the founder’s
        disruptive leadership with the team’s agile methodologies, catering to
        the evolving market demands.
      </p>

      <div className="SectionTeam__network">
        <h2 className="SectionTeam__network-title">NETWORK PARTNERS</h2>
        <div className="SectionTeam__network-logos ed-grid s-grid-1 lg-grid-5 s-main-center s-cross-center">
          <img src={logoExperienceClub} alt="logo experience club" />
          <img src={logoAACSB} alt="logo aac sb" />
          <img src={logoSouth} alt="logo south" />
          <img src={logoIeUniversity} alt="logo ie university" />
          <img src={logoIeBusinessSchool} alt="logo ie business school" />
        </div>
      </div>
    </section>
  )
}

export default SectionTeam
