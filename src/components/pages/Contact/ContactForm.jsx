import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xaygjpdo')

  return (
    <section className="ContactForm">
      {state.succeeded ? (
        <div className="ContactForm__message s-main-center s-cross-center">
          <h2 className="s-center">THANK YOU!</h2>
          <h4 className="s-center">
            We have received your message and will be in touch shortly.
          </h4>
        </div>
      ) : (
        <>
          <h2 className="s-center">CONTACT US!</h2>
          <form onSubmit={handleSubmit} className="s-main-center">
            <div className="ed-grid s-grid-1 m-grid-2">
              <div className="ContactForm__input">
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

              <div className="ContactForm__input">
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

              <div className="ContactForm__input s-cols-1 m-cols-2">
                <label htmlFor="email" hidden>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Correo electronico*"
                  required
                />
                <ValidationError
                  prefix="Correo electronico"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="ContactForm__input s-cols-1 m-cols-2">
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

              <div className="ContactForm__input s-cols-1 m-cols-2">
                <label htmlFor="address" hidden>
                  Address
                </label>
                <input
                  id="address"
                  type="address"
                  name="address"
                  placeholder="Address"
                />
                <ValidationError
                  prefix="address"
                  field="address"
                  errors={state.errors}
                />
              </div>

              <div className="ContactForm__input s-cols-1 m-cols-2">
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
              className="ContactForm__summitBtn"
              type="submit"
              disabled={state.submitting}
            >
              SEND
            </button>
          </form>
        </>
      )}
    </section>
  )
}

export default ContactForm
