import React from 'react'

const PartherItem = ({ title, text }) => {
  return (
    <article className="PartherItem">
      <h1 className="PartherItem__title">{title}</h1>
      <p className="PartherItem__text">{text}</p>
    </article>
  )
}

export default PartherItem
