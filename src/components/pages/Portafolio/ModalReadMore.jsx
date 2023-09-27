import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import PortafolioCard from './PortafolioCard'
import PortafolioForm from './PortafolioForm'
import { Link } from 'gatsby'
import FormReadMore from './FormReadMore'

const ModalReadMore = ({ title, setShowModal }) => {
  return (
    <div className="ModalPortafolio">
      <div
        className={`ModalPortafolio__content  ${
          !title && 'simple'
        } ModalPortafolio__content--readmore  `}
      >
        <RxCross2
          className="ModalPortafolio__close"
          onClick={() => {
            setShowModal(false)
          }}
        />

        <FormReadMore />
      </div>
    </div>
  )
}

export default ModalReadMore
