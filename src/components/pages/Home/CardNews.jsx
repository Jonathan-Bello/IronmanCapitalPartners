import React from 'react'

const CardNews = ({ img, title, description, linkUrl }) => {
  return (
    <div className="CardNews">
      <img className="CardNews__img" src={img} alt={title} />
      <div className="CardNews__content">
        <h3 className="CardNews__title">{title}</h3>
        <p className="CardNews__description">{description}</p>
        <a href={linkUrl} className="CardNews__link">
          Read more
        </a>
      </div>
    </div>
  )
}

export default CardNews
