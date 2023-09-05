import React from 'react'
import BannerSmall from '../../Banner/BannnerSmall'
import imgBanner from '../../../assets/images/contact/portada-contact-us.jpg'
import titleImg from '../../../assets/images/contact/our-offices.png'
import mapaSin from '../../../assets/images/contact/mapaSin.png'
import ContactForm from './ContactForm'
import ContactOptions from './ContactOptions'

const ContactContent = () => {
  return (
    <>
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

      <div className="ContactMap ed-grid s-grid-1 lg-grid-2">
        <img src={titleImg} alt="our offices" />
        <img src={mapaSin} alt="mapa" />
      </div>
    </>
  )
}

export default ContactContent
