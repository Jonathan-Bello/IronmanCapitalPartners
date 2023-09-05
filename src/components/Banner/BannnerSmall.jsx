import React from 'react'

const BannerSmall = ({ title, text, subTitle, img }) => {
  return (
    <section className="bannerSmall">
      <img className="bannerSmall__bg" src={img} alt={title} />

      <div className="bannerSmall__content">
        <h3 className="bannerSmall__title">{title}</h3>
        <h4 className="bannerSmall__subtitle">{subTitle}</h4>
        <p className="bannerSmall__text">{text}</p>
      </div>
    </section>
  )
}

export default BannerSmall
