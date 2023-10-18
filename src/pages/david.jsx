import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoBio from '../assets/images/bios/David.png'
import iconEmail from '../assets/icons/iconEmaiI.svg'
import iconPhone from '../assets/icons/iconPhone.svg'
import iconiLinkedin from '../assets/icons/iconlinkedin.svg'

import adornoIzq from '../assets/images/bios/bioIzq.png'
import adornoDer from '../assets/images/bios/bioDer.png'

const DavidPage = () => {
  return (
    <Layout>
      <section className="BioPage">
        <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-3 gap-0">
          <img className="BioPage__photo" src={fotoBio} alt="David" />

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
            <h2 className="BioPage__title">
              Next Generation and Finance Undergrad Alumni at George Washington
              University
            </h2>
            <div className="BioPage__contact">
              <div className="BioPage__contact--item">
                <img src={iconEmail} alt="email" />
                <p href="#" rel="noreferrer">
                  Mail
                </p>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconPhone} alt="phone" />
                <p href="#" rel="noreferrer">
                  Phone
                </p>
              </div>
              <div className="BioPage__contact--item">
                <img src={iconiLinkedin} alt="linkedin" />
                <p href="#" rel="noreferrer">
                  Linkedin
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="BioPage__description">
          <h2 className="BioPage__title2">BIOGRAPHY</h2>
          <p className="BioPage__desc">
            David Aizenman, having graduated from Don Soffer Highschool, now
            explores the realms of Finance at George Washington University.
            Besides volunteering for the Cadena Foundation, David is active in
            the stock market and is deeply engaged with tech, NFTs, and art
            collectibles. He also aids Ironman Capital Partners with web
            development. Born in Mexico and raised in Miami, David fluently
            speaks English, Spanish, and Hebrew.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default DavidPage
