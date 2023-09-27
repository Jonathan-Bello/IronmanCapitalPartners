import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import fotoJohana from '../assets/images/bios/Johana.png'
import iconEmail from '../assets/icons/iconEmaiI.svg'
import iconPhone from '../assets/icons/iconPhone.svg'
import iconiLinkedin from '../assets/icons/iconlinkedin.svg'

import adornoIzq from '../assets/images/bios/bioIzq.png'
import adornoDer from '../assets/images/bios/bioDer.png'

const JohanaPage = () => {
  return (
    <Layout>
      <section className="BioPage">
        <div className="ed-grid full s-grid-1 m-grid-2 lg-grid-3 gap-0">
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
            <h2 className="BioPage__title">
              Operations and Investor Relations Manager
            </h2>
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
            Johana Sevillia stands at the forefront of Ironman Capital Partners,
            leveraging advanced digital tools and platforms to revolutionize
            business operations. Expert in document management and project
            orchestration, she ensures rapid adaptation and learning. With a
            keen emphasis on digital-regulated operations, Johana collaborates
            efficiently with licensed external partners. Her background in
            psychology and investor relations is enhanced by her culinary
            prowess as a pastry chef. Hailing from Argentina, Johana
            communicates fluently in English and Spanish.
          </p>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default JohanaPage
