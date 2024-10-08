import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoRicardo from '../assets/images/bios/RicardoAizenman.jpg'
import iconEmail from '../assets/icons/iconEmaiI.svg'
import iconPhone from '../assets/icons/iconPhone.svg'
import iconiLinkedin from '../assets/icons/iconlinkedin.svg'

import adornoIzq from '../assets/images/bios/bioIzq.png'
import adornoDer from '../assets/images/bios/bioDer.png'

const RicardoPage = () => {
  return (
    <Layout>
      <section className="BioPage">
        <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-3 gap-0">
          <img className="BioPage__photo" src={fotoRicardo} alt="Ricardo" />

          <div className="BioPage__content lg-cols-2">
            <img
              className="BioPage__adornoIzq "
              src={adornoIzq}
              alt="adornoIzq"
            />

            <img
              className="BioPage__adornoDer"
              src={adornoDer}
              alt="adornoDer"
            />
            <h1 className="BioPage__name">Ricardo Aizenman</h1>
            <h2 className="BioPage__title">Chairman</h2>
            <div className="BioPage__contact">
              <div className="BioPage__contact--item">
                <img src={iconEmail} alt="email" />
                <a
                  href="mailto::Raizenman@Ironmancapitalpartners.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Raizenman@Ironmancapitalpartners.com
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconPhone} alt="phone" />
                <a href="tel:+17863671643" target="_blank" rel="noreferrer">
                  +1 (786) 367-1643
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconiLinkedin} alt="linkedin" />
                <a
                  href="https://www.linkedin.com/in/ricardo-aizenman-7519074"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="BioPage__description">
          <h2 className="BioPage__title2">BIOGRAPHY</h2>
          <p className="BioPage__desc">
            Ricardo Aizenman, a distinguished 25-year veteran in Venture
            Capital, Private Equity, and Pre-IPO investing, is the founder
            driving force behind Citibank N.A. International Banking Group
            Mexico & Latam and Ironman Capital Partners. Recognized by platforms
            such as AACSB highest authority in business and leadership
            certification, IE, Cadena International NGO, ,and CNN News,
            Ricardo’s extensive network and investment acumen have culminated in
            successful ventures with over 14 Pre IPO Unicorn companies and more
            than 25 private equity disruptors. Also, he’s the founder of
            Cadena.ngo International Hub. A proud alumnus of Universidad
            Iberoamericana and IE International MBA Business School in
            entrepreneurship .Ricardo’s linguistic prowess spans English,
            Spanish, Hebrew and Portuguese.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default RicardoPage
