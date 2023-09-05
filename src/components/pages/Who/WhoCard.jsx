import { Link } from 'gatsby'
import React from 'react'

const WhoCard = ({ img, title, subtitle, url }) => {
  return (
    <article className="WhoCard">
      <img className="WhoCard__image" src={img} alt="Ironman Capital Parther" />
      <div className="WhoCard__content">
        <h3 className="WhoCard__title">{title}</h3>
        <p className="WhoCard__subtitle">{subtitle}</p>
        <Link to={url} className="WhoCard__button">
          View profile
        </Link>
      </div>
    </article>
  )
}

export default WhoCard
