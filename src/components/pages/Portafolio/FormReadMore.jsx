import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

const FormReadMore = () => {
  const [state, handleSubmit] = useForm('myyqbglj')

  return (
    <section className="FormReadMore">
      {state.succeeded ? (
        <div className="FormReadMore__message s-main-center s-cross-center">
          <h2 className="s-center">THANK YOU!</h2>
          <h4 className="s-center">
            We have received your message and will be in touch shortly.
          </h4>
        </div>
      ) : (
        <>
          <h2 className="s-center">
            ARE YOU A COMPANY SEEKING INVESTMENT OR DEBT?
          </h2>

          <p className="s-center">
            Complete the form and become a part of Ironman Partners selected
            mentoring and partnership programs.
          </p>
          <form onSubmit={handleSubmit} className="s-main-center">
            <div className="ed-grid s-grid-1 m-grid-2">
              <div className="FormReadMore__input">
                <label htmlFor="name" hidden>
                  Name and Subname
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name and Subname*"
                  required
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="FormReadMore__input">
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

              <div className="FormReadMore__input">
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

              <div className="FormReadMore__input">
                <label htmlFor="country" hidden>
                  Country
                </label>
                <input
                  id="country"
                  type="country"
                  name="country"
                  placeholder="Country"
                />
                <ValidationError
                  prefix="country"
                  field="country"
                  errors={state.errors}
                />
              </div>

              <div className="FormReadMore__input">
                <label htmlFor="industry" hidden>
                  Industry
                </label>
                <input
                  id="industry"
                  type="text"
                  name="industry"
                  placeholder="Industry*"
                  required
                />
                <ValidationError
                  prefix="industry"
                  field="industry"
                  errors={state.errors}
                />
              </div>

              <div className="FormReadMore__input">
                <label htmlFor="investment" hidden>
                  Investment Stage
                </label>
                <input
                  id="investment"
                  type="text"
                  name="investment"
                  placeholder="Investment Stage*"
                  required
                />
                <ValidationError
                  prefix="investment"
                  field="investment"
                  errors={state.errors}
                />
              </div>

              <div className="FormReadMore__input s-cols-1 m-cols-2">
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
              className="FormReadMore__summitBtn"
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

export default FormReadMore
