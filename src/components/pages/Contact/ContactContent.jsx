import React from 'react'
import BannerSmall from '../../Banner/BannnerSmall'
import imgBanner from '../../../assets/images/contact/portada-contact-us.jpg'
import ContactForm from './ContactForm'

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

      <div className="ed-grid full s-grid-1 lg-grid-2">
        <ContactForm />
      </div>
    </>
  )
}

export default ContactContent
