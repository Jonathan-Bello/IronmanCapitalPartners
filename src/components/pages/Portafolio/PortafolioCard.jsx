import React from 'react'

const PortafolioCard = ({ img, meta, porcentaje, onClick, mvp }) => {
  return (
    <article
      className={`PortafolioCard ${mvp && 'PortafolioCard--MVP'}`}
      onClick={onClick}
    >
      <img className="PortafolioCard__imgTitle" src={img} alt="logo" />

      <div className="PortafolioCard__meta">
        <p className="PortafolioCard__meta__title">Meta mínima: ${meta}</p>

        <div className="ed-grid s-grid-6 s-main-center s-cross-center s-gap-0">
          <span
            className={`PortafolioCard__meta__progressbar PortafolioCard__meta__progressbar--${porcentaje} s-cols-5`}
          ></span>

          <span className="PortafolioCard__meta__porcentaje s-end">
            %{porcentaje}
          </span>
        </div>
      </div>
    </article>
  )
}

export default PortafolioCard
