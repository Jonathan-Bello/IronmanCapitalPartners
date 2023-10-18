import { Link } from 'gatsby'
import React from 'react'

const Banner = ({ title, text, urlLink, img }) => {
  return (
    <section className="banner">
      <img className="banner__bg" src={img} alt={title} />

      <div className="banner__content">
        <h3 className="banner__title">{title}</h3>
        <p className="banner__text" dangerouslySetInnerHTML={{ __html: text }}  />
        <div className="s-mb-4">
          <Link
            to={urlLink}
            className="hero__button"
            activeClassName="active"
            partiallyActive={true}
          >
            CHAT WITH US
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner
