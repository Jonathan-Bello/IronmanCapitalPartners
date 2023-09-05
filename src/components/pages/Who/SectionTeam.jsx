import React from 'react'
import WhoCard from './WhoCard'

import fotoRicardo from '../../../assets/images/who/foto-ricardo.jpg'
import fotoJohana from '../../../assets/images/who/foto-johana.jpg'
import fotoCristian from '../../../assets/images/who/foto-cristian.jpg'
import fotoDavid from '../../../assets/images/who/foto-david.jpg'

import logoExperienceClub from '../../../assets/images/who/logo-experience-club.jpg'
import logoIeBusinessSchool from '../../../assets/images/who/logo-ie-business-school.jpg'
import logoIeUniversity from '../../../assets/images/who/logo-ie-university.jpg'
import logoAACSB from '../../../assets/images/who/logo-AACSB.jpg'
import logoSouth from '../../../assets/images/who/logo-south.jpg'

import bgLogosMobile from '../../../assets/images/who/bgLogosMobile.jpg'
import bgLogosDesk from '../../../assets/images/who/bgLogosDesk.jpg'

const SectionTeam = () => {
  return (
    <section className="SectionTeam">
      <p className="SectionTeam__text ed-grid">
        Our team’s decades of combined supervisory expertise help guarantee our
        clients the lowest costs and a clearer understanding of their finances.
      </p>

      <div className="SectionTeam__team ed-grid s-grid-1 m-grid-2 lg-grid-4">
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

        <WhoCard
          img={fotoCristian}
          title={'Cristian Arens'}
          subtitle={'Partner Ironman Capital Partners - Peru'}
          url={'/cristian'}
        />

        <WhoCard
          img={fotoDavid}
          title={'David Aizenman'}
          subtitle={'Next Generation'}
          url={'/david'}
        />
      </div>

      <p className="SectionTeam__text ed-grid">
        Ironman, headquartered in Miami, Florida, with a strong presence in
        Mexico City, is a pioneer in the fintech space, carrying over two
        decades of unrivaled expertise in the global financial and fintech
        sector. Our proprietary platform is designed to revolutionize wealth
        management and redefine the banking experience for the digital-native
        generation. Ironman stands apart by channeling investment opportunities
        exclusively through industry-leading joint venture partners. We offer
        access to high-potential prospects, including pre-IPO investments,
        venture capital funds, and acceleration programs, all by leveraging our
        partner platforms' broker-dealer, investment banking, and crowdfunding
        licensed services. Our key focus regions are the thriving markets of the
        USA and Latin America.
      </p>

      <div className="SectionTeam__network">
        <h2 className="SectionTeam__network-title">NETWORK</h2>
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
