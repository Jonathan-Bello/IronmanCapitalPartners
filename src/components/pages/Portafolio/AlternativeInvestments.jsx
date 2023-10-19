import React, { useEffect, useState } from 'react'
import imgTitle from '../../../assets/images/portafolio/alterative-investments.png'
import data from './portafolio'
import PortafolioCard from './PortafolioCard'
import ModalPortafolio from './ModalPortafolio'

const AlternativeInvestments = () => {
  const [currectCard, setCurrectCard] = useState({})
  const [showModal, setShowModal] = useState(false)

  const handleCard = card => {
    setCurrectCard(card)
    setShowModal(true)
  }

  useEffect(() => {
    // si showMenu es true, bloquear scroll vertical
    if (showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  return (
    <section className="AlternativeInvestments">
      <div className="AlternativeInvestments__content">
        <img
          className="AlternativeInvestments__imgTitle"
          src={imgTitle}
          alt="imgTitle"
        />
        <h4 className="AlternativeInvestments__title">
          VENTURE CAPITAL US MARKET ENTRY
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-2 l-grid-3 s-mb-4">
          {data.VentureCapital.map((item, index) => (
            <PortafolioCard
              key={index}
              {...item}
              onClick={() => handleCard(item)}
            />
          ))}
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">
          IRONMAN PRE IPO INVESTMENT OPPORTUNITIES
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 l-grid-3 s-mb-4">
          <div className="m-x-2">
            <PortafolioCard
              {...data.IronPreIPO[0]}
              onClick={() => handleCard(data.IronPreIPO[0])}
            />
          </div>
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">
          IRONMAN SELF STORAGE REAL ESTATE
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 l-grid-3 s-mb-4">
          <div className="m-x-2">
            <PortafolioCard
              {...data.RealEstate[0]}
              onClick={() => handleCard(data.RealEstate[0])}
            />
          </div>
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">
          IRONMAN VENTURE CAPITAL US MARKET ENTRY ACCELERATOR
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 l-grid-3 s-mb-4">
          <div className="m-x-2">
            <PortafolioCard
              {...data.Aceleration[0]}
              onClick={() => handleCard(data.Aceleration[0])}
            />
          </div>
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">MVP</h4>
        <div className="AlternativeInvestments__cardcontainer AlternativeInvestments__cardcontainer--mvp">
          <PortafolioCard
            {...data.MVP[0]}
            onClick={() => handleCard(data.MVP[0])}
          />
          <PortafolioCard
            {...data.MVP[1]}
            onClick={() => handleCard(data.MVP[1])}
          />
          <PortafolioCard
            {...data.MVP[2]}
            onClick={() => handleCard(data.MVP[2])}
          />
          <PortafolioCard
            {...data.MVP[3]}
            onClick={() => handleCard(data.MVP[3])}
          />

          <PortafolioCard
            {...data.MVP[4]}
            onClick={() => handleCard(data.MVP[4])}
          />
        </div>
        <br />
      </div>

      <p className="PortafolioAgradecimiento">
        Thank you for considering Ironman’s diverse and promising investment
        opportunities. We look forward to partnering with visionaries and
        forward-thinkers eager to shape the future. Your journey towards
        impactful investments begins here.
      </p>

      {showModal && (
        <ModalPortafolio {...currectCard} setShowModal={setShowModal} />
      )}
    </section>
  )
}

export default AlternativeInvestments
