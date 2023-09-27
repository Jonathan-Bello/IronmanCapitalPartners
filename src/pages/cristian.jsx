import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoBio from '../assets/images/bios/Cristian.png'
import iconEmail from '../assets/icons/iconEmaiI.svg'
import iconPhone from '../assets/icons/iconPhone.svg'
import iconiLinkedin from '../assets/icons/iconlinkedin.svg'

import adornoIzq from '../assets/images/bios/bioIzq.png'
import adornoDer from '../assets/images/bios/bioDer.png'

const CristianPage = () => {
  return (
    <Layout>
      <section className="BioPage">
        <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-3 gap-0">
          <img className="BioPage__photo" src={fotoBio} alt="Ricardo" />

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
            <h1 className="BioPage__name">Cristian Arens</h1>
            <h2 className="BioPage__title">
              Partner Ironman Capital Partners - Peru
            </h2>
            <div className="BioPage__contact">
              <div className="BioPage__contact--item">
                <img src={iconEmail} alt="email" />
                <a href="mailto::Mail" target="_blank" rel="noreferrer">
                  Mail
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconPhone} alt="phone" />
                <a href="tel:1234567890" target="_blank" rel="noreferrer">
                  Phone
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconiLinkedin} alt="linkedin" />
                <a
                  href="https://www.linkedin.com/in/arenscristian/"
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
            Cristian Arens embodies entrepreneurial spirit and investment
            insight. With a decade dedicated to reshaping financial paradigms
            across Latin America, he envisions a world where financial literacy
            reigns supreme.
          </p>

          <p className="BioPage__desc">
            Ironman Capital Partners proudly collaborates with three esteemed
            International MBA alumni from IE Business School in the Andina
            Region, Latam. This dynamic synergy, coupled with a diverse talent
            pool from regions such as Madrid and India, encapsulates Ironman’s
            global vision and commitment to financial excellence.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default CristianPage
