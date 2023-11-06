import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import PortafolioCard from './PortafolioCard'
import PortafolioForm from './PortafolioForm'
import { Link } from 'gatsby'

const ModalPortafolio = ({
  img,
  meta,
  porcentaje,
  title,
  subtitle,
  text,
  url,
  formTitle,
  footerurlText,
  setShowModal,
  imgContent,
}) => {
  return (
    <div className="ModalPortafolio">
      <div className={`ModalPortafolio__content  ${!title && 'simple'} `}>
        <RxCross2
          className="ModalPortafolio__close"
          onClick={() => {
            setShowModal(false)
          }}
        />

        <div
          className={`ModalPortafolio__content__container ed-grid s-grid-1 ${
            title && 'lg-grid-5'
          } s-pxy-1 lg-pxy-0 full`}
        >
          <div className="ModalPortafolio__card lg-cols-2">
            <PortafolioCard img={img} meta={meta} porcentaje={porcentaje} />
          </div>

          {title ? (
            <>
              <div className="ModalPortafolio__content__data lg-cols-3 lg-rows-3">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{text}</p>

                {imgContent && <img src={imgContent} alt="tit" />}

                {url && (
                  <a href={url} target="_blank" rel="noreferrer">
                    {footerurlText}
                  </a>
                )}
              </div>
              <div className="ModalPortafolio__content__form lg-cols-2 lg-rows-2">
                <PortafolioForm
                  portafolioItem={{
                    title,
                    formTitle,
                  }}
                />
              </div>
            </>
          ) : (
            <div className="ModalPortafolio__content__banner">
              <h3 className="ModalPortafolio__content__banner__title">
                CONTACT US TO KNOW MORE
              </h3>
              <Link
                to="/contact"
                className="ModalPortafolio__content__banner__button"
              >
                CONTACT US
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalPortafolio
