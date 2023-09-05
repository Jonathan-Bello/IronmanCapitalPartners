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
        <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-3">
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
            Ricardo Aizenman, a 25-year veteran in Venture Capital, Private
            Equity, and Pre-IPO investing. He is the Founder of Citibank N.A.
            International Banking Group and currently the Chairman and Founder
            of Ironman Capital Partners, which focuses on alternative
            investments, including Pre IPO, Private Equity, Self Storage, and
            consulting services. Ricardo recently closed the second Round A for
            leading Fintech company www.snowball.Mx, which is the largest Debt
            crowdfunding & secondary market place in Mexico & USA at a $145 MM
            Pre-Money Valuation. Ricardo holds an accounting degree from
            Universidad Iberoamericana, an International MBA from IE University
            Business School, and is actively involved in multiple corporate
            boards, international foundations, founder of Cadena International
            NGO and educational institutions. He speaks English, Spanish and
            Portuguese.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default RicardoPage
