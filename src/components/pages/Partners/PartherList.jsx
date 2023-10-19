import React from 'react'

const PartherList = ({ color, title, list }) => {
  return (
    <section className="PartherList">
      <h3 className={`PartherList__title--${color}`}>{title}</h3>
      <div className="PartherList__content ">
        <div className="PartherList__list ed-grid s-grid-3 m-grid-4 lg-grid-4 xl-grid-6">
          {list.map(partner => (
            <img
              className="PartherList__list__imgItem"
              src={partner.img}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartherList
