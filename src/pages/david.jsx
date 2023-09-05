import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoBio from '../assets/images/bios/David.png'
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
            <h1 className="BioPage__name">David Aizenman</h1>
            <h2 className="BioPage__title">Next Generation</h2>
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
            David Aizenman is an ambitious 17-year sophomore attending Don
            Soffer Highschool. Mr. Aizenman is a volunteer for the Cadena
            Foundation, an NGO dedicated to humanitarian aid. He trades call
            options on the U.S. stock market backed by an escrow account. He is
            the next generation focused on Tech, NFTs, and investing in art
            collectibles. In addition, David is working at Ironman Capital
            Partners Family Office as a web designer developer and providing
            team support where needed while gaining experience in the family
            business. Mr. Aizenman was born in Mexico and grew up in Miami, Fl,
            where he lives with his parents and his two sisters. Currently, he
            is about to graduate from high school and will study at GW
            University in Washington, D.C. David is fluent in English, Spanish,
            and Hebrew. He enjoys sports, traveling, and spending time with his
            friends.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default RicardoPage
