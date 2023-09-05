import React from 'react'
import imgTitle from '../../../assets/images/portafolio/alterative-investments.png'
import data from './portafolio'
import PortafolioCard from './PortafolioCard'

const AlternativeInvestments = () => {
  return (
    <section className="AlternativeInvestments">
      <div className="AlternativeInvestments__content">
        <img
          className="AlternativeInvestments__imgTitle"
          src={imgTitle}
          alt="imgTitle"
        />
        <h4 className="AlternativeInvestments__title">
          Alternative Investments
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-2 l-grid-3 s-mb-4">
          {data.VentureCapital.map((item, index) => (
            <PortafolioCard key={index} {...item} />
          ))}
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">IRONMAN PRE IPO</h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 l-grid-3 s-mb-4">
          <div className="m-x-2">
            <PortafolioCard {...data.IronPreIPO[0]} />
          </div>
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">
          IRONMAN SELF STORAGE REAL ESTATE
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 l-grid-3 s-mb-4">
          <div className="m-x-2">
            <PortafolioCard {...data.RealEstate[0]} />
          </div>
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">
          IRONMAN VENTURE CAPITAL US MARKET ENTRY ACCELERATOR
        </h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 l-grid-3 s-mb-4">
          <div className="m-x-2">
            <PortafolioCard {...data.Aceleration[0]} />
          </div>
        </div>
        <br />

        <h4 className="AlternativeInvestments__title">MVP</h4>
        <div className="AlternativeInvestments__cardcontainer ed-grid full s-grid-1 m-grid-3 lg-grid-3 s-mb-4">
          <PortafolioCard {...data.MVP[0]} />
          <PortafolioCard {...data.MVP[1]} />
          <PortafolioCard {...data.MVP[2]} />
          <PortafolioCard {...data.MVP[3]} />
          <div className="m-x-3">
            <PortafolioCard {...data.MVP[4]} />
          </div>
        </div>
        <br />
      </div>
    </section>
  )
}

export default AlternativeInvestments
