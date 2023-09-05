import React from 'react'
import iconPhone from '../../../assets/images/contact/icon-phone.svg'
import iconMail from '../../../assets/images/contact/icon-mail.svg'
import iconLocation from '../../../assets/images/contact/icon-location.svg'
import iconHour from '../../../assets/images/contact/icon-hour.svg'

const ContactOptions = () => {
  return (
    <section className="ContactOptions">
      <div className="ContactOptions__content">
        <h4>CONTACT INFORMATION</h4>

        <div className="ContactOptions__item">
          <img src={iconPhone} className="ContactOptions__icon" />
          <div className="ContactOptions__info">
            <h5>Phone Number</h5>
            <p>+1 (786) 367-1643</p>
          </div>
        </div>

        <div className="ContactOptions__item">
          <img src={iconMail} className="ContactOptions__icon" />
          <div className="ContactOptions__info">
            <h5>E-Mail</h5>
            <p>
              raizenman@
              <br className="to-lg" />
              ironmancapitalpartners.com
            </p>
          </div>
        </div>

        <div className="ContactOptions__item">
          <img src={iconLocation} className="ContactOptions__icon" />
          <div className="ContactOptions__info">
            <h5>Address</h5>
            <p>10185 Collins Avenue #318 Bal Harbour, FL 33154</p>
          </div>
        </div>

        <div className="ContactOptions__item">
          <img src={iconHour} className="ContactOptions__icon" />
          <div className="ContactOptions__info">
            <h5>Office Hours</h5>
            <p>
              Monday - Friday : 9am - 5pm <br />
              Saturday: Closed <br />
              Sunday: By appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactOptions
