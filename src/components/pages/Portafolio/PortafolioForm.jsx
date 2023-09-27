import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const PortafolioForm = ({ portafolioItem }) => {
  const [state, handleSubmit] = useForm('mbjvyqoy')

  return (
    <section className="PortafolioForm">
      {state.succeeded ? (
        <div className="PortafolioForm__message s-main-center s-cross-center">
          <h2 className="s-center">THANK YOU!</h2>
          <h4 className="s-center">
            We have received your message and will be in touch shortly.
          </h4>
        </div>
      ) : (
        <>
          <h2 className="">LIKE TO INVEST?</h2>
          <form onSubmit={handleSubmit} className="s-main-center">
            <div className="ed-grid s-grid-1 m-grid-2 gap-1">
              <div className="PortafolioForm__input">
                <label htmlFor="nombre" hidden>
                  First Name
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="FirstName*"
                  required
                />
                <ValidationError
                  prefix="Nombre"
                  field="nombre"
                  errors={state.errors}
                />
              </div>

              <div className="PortafolioForm__input">
                <label htmlFor="apellido" hidden>
                  Last Name
                </label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  placeholder="Last Name*"
                  required
                />
                <ValidationError
                  prefix="Apellido"
                  field="apellido"
                  errors={state.errors}
                />
              </div>

              <div className="PortafolioForm__input ">
                <label htmlFor="email" hidden>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="PortafolioForm__input">
                <label htmlFor="tel" hidden>
                  Phone Number
                </label>
                <input
                  id="tel"
                  type="tel"
                  name="tel"
                  placeholder="Phone Number"
                />
                <ValidationError
                  prefix="Telefono"
                  field="tel"
                  errors={state.errors}
                />
              </div>

              <div className="PortafolioForm__input s-cols-1 m-cols-2">
                <label htmlFor="portafolio" hidden>
                  portafolio
                </label>
                <input
                  id="portafolio"
                  type="hidden"
                  name="portafolio"
                  value={portafolioItem.title}
                  placeholder="portafolio"
                />
                <ValidationError
                  prefix="portafolio"
                  field="portafolio"
                  errors={state.errors}
                />
              </div>

              <div className="PortafolioForm__input s-cols-1 m-cols-2">
                <label htmlFor="message" hidden>
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required={true}
                ></textarea>
              </div>
            </div>

            <button
              className="PortafolioForm__summitBtn"
              type="submit"
              disabled={state.submitting}
            >
              SEND
            </button>
          </form>
        </>
      )}

      <a
        href="https://calendly.com/ironmancapitalpartnersvc/ironman-consulting?month=2023-09"
        className="PortafolioForm__linkCalendly"
      >
        Or schedule your meeting with Calendly
      </a>
    </section>
  )
}

export default PortafolioForm
