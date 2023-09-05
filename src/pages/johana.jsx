import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoJohana from '../assets/images/bios/Johana.png'
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
          <img className="BioPage__photo" src={fotoJohana} alt="Ricardo" />

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
            <h1 className="BioPage__name">Johana Sevillia</h1>
            <h2 className="BioPage__title">Operations Manager</h2>
            <div className="BioPage__contact">
              <div className="BioPage__contact--item">
                <img src={iconEmail} alt="email" />
                <a
                  href="mailto::jsevillia@Ironmancapitalpartners.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  jsevillia@Ironmancapitalpartners.com
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconPhone} alt="phone" />
                <a href="tel:3057885489" target="_blank" rel="noreferrer">
                  305-788-5489
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconiLinkedin} alt="linkedin" />
                <a
                  href="https://www.linkedin.com/in/johana-sevillia-46b6151b9/"
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
            Ms.Sevillia brings experience with expertise in scheduling and
            coordination with excellent attention to detail. Working closely
            with our team while innovating projects to improve office and client
            support. Ms. Sevillia has a background in psychology, investor
            relations, and a strong drive to succeed. Active humanitarian
            volunteer, and trained pastry chef, born in Argentina, raised in
            Miami, fluent in English and Spanish.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default RicardoPage
