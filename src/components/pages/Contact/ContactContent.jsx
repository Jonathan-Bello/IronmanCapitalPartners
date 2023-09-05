import React, { useEffect } from 'react'
import BannerSmall from '../../Banner/BannnerSmall'

import ContactForm from './ContactForm'
import ContactOptions from './ContactOptions'
import useWindowSize from '../../../hooks/useWindowSize'

import imgBanner from '../../../assets/images/contact/portada-contact-us.jpg'
import titleImg from '../../../assets/images/contact/our-offices.png'
import mapaSin from '../../../assets/images/contact/mapaSin.png'
import bgVerde from '../../../assets/images/contact/fondo-verde-contacto.png'
import bgVerdeMobile from '../../../assets/images/contact/fondo-verde-contacto-Mb.png'

const ContactContent = () => {
  const size = useWindowSize()

  return (
    <div className="ContactContent">
      <BannerSmall
        title={'CONTACT US'}
        img={imgBanner}
        subTitle={'A BETTER FUTURE IS POSSIBLE.'}
        text={
          'Contact us to learn more about our mission and work, or to become involved yourself.'
        }
      />

      <div className="ed-grid s-grid-1 lg-grid-2">
        <ContactForm />
        <ContactOptions />
      </div>

      <div className="ContactMap ed-grid s-grid-1 lg-grid-3">
        <img className="ContactMap__title" src={titleImg} alt="our offices" />
        <img className="ContactMap__map lg-cols-2" src={mapaSin} alt="mapa" />
      </div>

      <img
        src={size.width > 640 ? bgVerde : bgVerdeMobile}
        alt="fondo verde"
        className="ContactBg"
      />
    </div>
  )
}

export default ContactContent
