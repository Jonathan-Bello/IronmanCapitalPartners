import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoAditya from '../assets/images/bios/Aditya.png'
import iconEmail from '../assets/icons/iconEmaiI.svg'
import iconPhone from '../assets/icons/iconPhone.svg'
import iconiLinkedin from '../assets/icons/iconlinkedin.svg'

import adornoIzq from '../assets/images/bios/bioIzq.png'
import adornoDer from '../assets/images/bios/bioDer.png'

const AdityaPage = () => {
  return (
    <Layout>
      <section className="BioPage">
        <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-3 gap-0">
          <img className="BioPage__photo" src={fotoAditya} alt="Aditya" />

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
            <h1 className="BioPage__name">Aditya Mahotra</h1>
            <h2 className="BioPage__title">Partner Ironman Capital Partners</h2>
            <div className="BioPage__contact">
              <div className="BioPage__contact--item">
                <img src={iconEmail} alt="email" />
                <a
                  href="mailto::Adimalhotra@Outlook.Com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Adimalhotra@Outlook.Com
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconPhone} alt="phone" />
                <a href="tel:+919999997316" target="_blank" rel="noreferrer">
                  +91 99999 97316
                </a>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconiLinkedin} alt="linkedin" />
                <a
                  href="http://linkedin.com/in/adityamalhotra"
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
            Aditya Malhotra, operating from Madrid, serves as a strategic bridge
            for Ironman Capital Partners to the EMEA and Indian markets. His
            expertise in international partnerships and crisis management is
            accentuated by his influential tenure at IE Business School and his
            role at UNO Uno. Aditya’s mission revolves around fintech-driven
            renting solutions and nurturing emerging startups.
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

export default AdityaPage
