import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import PortafolioCard from './PortafolioCard'
import PortafolioForm from './PortafolioForm'

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

        <div className="ModalPortafolio__content__container ed-grid s-grid-1 lg-grid-5 s-pxy-2 lg-pxy-0 full">

          <div className="ModalPortafolio__card lg-cols-2">
            <PortafolioCard img={img} meta={meta} porcentaje={porcentaje} />
          </div>

          {title && (
            <>
              <div className="ModalPortafolio__content__data lg-cols-3 lg-rows-3">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{text}</p>

                {url && (
                  <a href={url} target="_blank" rel="noreferrer">
                    Know morea about {title}
                  </a>
                )}
              </div>
              <div className="ModalPortafolio__content__form lg-cols-2 lg-rows-2">
                <PortafolioForm
                  portafolioItem={{
                    title,
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalPortafolio
