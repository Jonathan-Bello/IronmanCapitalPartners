import React from 'react'

const ParthersDanger = () => {
  return (
    <section className="ParthersDanger">
      <div className="ParthersDanger__content">
        <h5 className="ParthersDanger__content__title">
          Referencias de riesgo
        </h5>

        <div className="ParthersDanger__content__colors">
          <div className="ParthersDanger__content__colors--blue" />
          <div className="ParthersDanger__content__colors--green" />
          <div className="ParthersDanger__content__colors--yellow" />
          <div className="ParthersDanger__content__colors--red" />
        </div>

        <div className="ParthersDanger__content__labels">
          <span>Bajo</span>
          <span>Medio</span>
          <span>Alto</span>
        </div>
      </div>
    </section>
  )
}

export default ParthersDanger
