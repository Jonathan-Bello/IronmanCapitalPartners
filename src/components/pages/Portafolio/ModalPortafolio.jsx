import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import ContactForm from '../Contact/ContactForm'
import PortafolioCard from './PortafolioCard'

const ModalPortafolio = ({
  img,
  meta,
  porcentaje,
  title,
  subtitle,
  text,
  url,
  setShowModal,
}) => {
  return (
    <div className="ModalPortafolio">
      <div className="ModalPortafolio__content">
        <RxCross2
          className="ModalPortafolio__close"
          onClick={() => {
            setShowModal(false)
          }}
        />

        <div className="ModalPortafolio__content__container ed-grid s-grid-1 lg-grid-3 s-pxy-2 lg-pxy-0 full">
          <div className="ModalPortafolio__card">
            <PortafolioCard img={img} meta={meta} porcentaje={porcentaje} />
          </div>

          {title && (
            <div className="ModalPortafolio__content__data lg-cols-2 lg-rows-2">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
              <p>{text}</p>

              {url && (
                <a href={url} target="_blank" rel="noreferrer">
                  Know morea about {title}
                </a>
              )}
            </div>
          )}

          <div className="ModalPortafolio__content__form lg-rows-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPortafolio
