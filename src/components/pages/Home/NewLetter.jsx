import React from 'react'
import newLetterTitle from '../../../assets/images/newsletter.png'
import Slider from 'react-slick'
import data from './newsData'
import CardNews from './CardNews'

const NewLetter = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="NewLetter">
      <img
        className="NewLetter__img"
        src={newLetterTitle}
        alt="newLetterTitle"
      />

      <div className="NewLetter__slidercontainer">
        <Slider {...settings} className="NewLetter__Slider">
          {data.map((item, index) => (
            <CardNews
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              linkUrl={item.linkUrl}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default NewLetter
