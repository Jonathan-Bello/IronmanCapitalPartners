import React from 'react'
import useWindowSize from '../../../hooks/useWindowSize'

const PartherItem = ({ title, text, titleDirection, titleColor, children }) => {
  const windowSize = useWindowSize()

  return (
    <article className="PartherItem">
      <div
        className={`PartherItem__contentTitle ${
          titleDirection && titleDirection
        } ${titleColor && titleColor}`}
      >
        <h1
          className={`PartherItem__title
           `}
        >
          {title}
        </h1>
      </div>

      <div className="ed-grid s-grid-1 lg-grid-2 full s-py-4">
        {windowSize.width > 1024 && titleDirection === 'right' && children}

        <div className="s-mb-2 lg-mb-0">
          <p className={`PartherItem__text ${titleDirection}`}>{text}</p>
        </div>

        {(windowSize.width < 1024 || titleDirection === 'left') && children}
      </div>
    </article>
  )
}

export default PartherItem
