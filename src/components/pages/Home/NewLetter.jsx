import React from 'react'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import newLetterTitle from '../../../assets/images/newsletter.png'
import bgVerde from '../../../assets/images/fondo-verde.png'
import data from './newsData'
import CardNews from './CardNews'

const NewLetter = () => {
  return (
    <section className="NewLetter">
      <div className="NewLetter__titleContainer">
        <img
          className="NewLetter__img"
          src={newLetterTitle}
          alt="newLetterTitle"
        />
      </div>

      <div className="NewLetter__slidercontainer">
        <Splide
          hasTrack={false}
          className="ed-grid full"
          options={{
            perPage: 4,
            pagination: false,
            width: '100%',
            gap: "0rem",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideTrack>
            {data.map(item => (
              <SplideSlide
                key={item.id}
                className="s-main-center s-cross-center"
              >
                <CardNews {...item} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>

      <img className="NewLetter__bg" src={bgVerde} alt="bgVerde" />
    </section>
  )
}

export default NewLetter
