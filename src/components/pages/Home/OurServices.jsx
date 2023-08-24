import React from 'react'
// import ourServices from '../../../assets/svg/our-services.svg'
import ourServices from '../../../assets/images/our-services.png'
import { Link } from 'gatsby'

const OurServices = () => {
  return (
    <section className="OurServices">
      <img className="OurServices__img" src={ourServices} alt="ourServices" />
      <p className="OurServices__subtext">
        Learn more about how can <b> IRONMAN CAPITAL PARTNERS</b> help you
        <b>supervise your capital and make it grow</b> over the long term.
      </p>
      <h3 className="OurServices__title">SOFTLANDING ACCEL</h3>
      <p className="OurServices__text">
        Ironman angels & VC Softlanding and Acceleration 6 and 9 months programa
        in the Journey of Latin American, European and Caribbean Startups
        entering the U.S. and Global Markets.
      </p>
      <h4 className="OurServices__subtitle">THE ACCELERATOR PROGRAM & FUND</h4>
      <p className="OurServices__text">
        Ironman VC is a comprehensive accelerator program and fund strategically
        positioned to drive the expansion of Latin American , European and
        Caribbean tech and consumer companies into the U.S. market. This is
        accomplished through a combination of virtual and in-situ educational,
        acceleration/soft-landing programs, uniquely tailored for one-on-one
        3-4-year-old profitable startups, groups of sustainable startups, or via
        collaborations with government agencies, NGOs, VCs, and corporates.
      </p>
      <h4 className="OurServices__subtitle">TARGET INDUSTRIES</h4>'
      <p className="OurServices__text">
        The target sectors for the program encompass technology, consumer
        products, fintech, food tech, and the health and Blue Economy, among
        others.
      </p>
      <h4 className="OurServices__subtitle">THE INVESTMENT PARAMETERS</h4>
      <p className="OurServices__text">
        The program has a minimum fund limit of 10M USD and a cap of 20M USD,
        with an expected fund duration of 6+2 years. The management fee stands
        at 3.5%, with a 20% carry, and a 1% Founders Fee. With an expected IRR
        of {'>'}30%, a hurdle of 8%, and an average round of 100K, the program
        seeks to make approximately 80 investments, acquiring an equity stake of
        between 2%-10%.
      </p>
      <h4 className="OurServices__subtitle">
        THE U.S., EUROPEAN, MARKET ENTRY AND THE LATIN AMERICAN OPPORTUNITY
      </h4>
      <p className="OurServices__text">
        The Hispanic Latin American market presents a compelling opportunity for
        venture capital. In 2022, global venture funding was $445 billion, with
        VC investment in Latin America showing an eight-fold increase since
        2016. Ironman VC Base Miami & Mana Tech, in response to this dynamic
        growth, was designed to introduce companies to the Miami business
        ecosystem, offering key resources for successful entry into the U.S. and
        Global markets from the USA.urities.
      </p>
      <h4 className="OurServices__subtitle">THE TEAM AND NETWORK</h4>
      <p className="OurServices__text">
        Ironman VC's team includes industry leaders with rich experience in
        entrepreneurship, VC Fintech, and business internationalization. They
        connect participants with potential strategic partners, industry
        experts, investors, and leaders in Miami's business ecosystem.
      </p>
      <h4 className="OurServices__subtitle">
        PROGRAM STRUCTURE AND EVALUATION CRITERIA
      </h4>
      <p className="OurServices__text">
        The program's duration is 6 weeks, and there’s re finalist 9 months boot
        camp 🏕️ VC starting with an introduction to the American market and
        self-diagnostic tools. The subsequent weeks focus on capital raising
        plans, legal analysis, identifying target markets, strategic market
        entry planning, pitch training, and finally, face-to-face, individual,
        and group investment workshops, gets you to partner with US and move
        forward as one cell bringing hundreds of real cases doing best efforts
        to surpass impact and joint partners goals. Sustainability and proven
        break even models 3-4 year late Startups are evaluated on the basis of
        scalability, team strength, repeatability of the business model,
        uniqueness, potential revenue, and societal impact, among other factors
        on Sustainability Development Goals.
      </p>
      <h4 className="OurServices__subtitle">KEY TO SUCCESS AND PARTNERSHIPS</h4>
      <p className="OurServices__text">
        Ironman VC offers a "learning by doing" methodology to companies looking
        to internationalize their product and penetrate the U.S. market. The
        company also has important connections with different market players in
        Miami, including banks, government, universities, accelerators,
        developers, foundations, chambers of commerce, and others, ensuring a
        well-rounded support system for the startups they help grow.
      </p>
      <h4 className="OurServices__subtitle s-mb-4">CONTACT US TO KNOW MORE</h4>
      <div className="s-mb-4">
        <Link
          to="/Contact"
          className="hero__button"
          activeClassName="active"
          partiallyActive={true}
        >
          CHAT WITH US
        </Link>
      </div>
      <h3 className="OurServices__title s-pt-4">
        FUNDRAISING AND CROWDFUNDING EQUITY / DEBT
      </h3>
      <p className="OurServices__text">
        Snowball is the largest equity crowdfunding platform in Latin America
        and is certified by the Mexican National Banking and Securities
        Commission (CNBV) to operate as an Equity Crowdfunding Institution.
        Through our now 57,000 users we have placed more than +133,000,000.00
        million pesos (USD 6.6 million) in highly profitable companies, which
        have delivered more than +16.2 million pesos (USD 800K) in returns to
        thousands of investors. This, in the company's first commercial
        operation year alone.
      </p>
      <h3 className="OurServices__title s-pt-4">PRE A, A, AND B ROUNDS</h3>
    </section>
  )
}

export default OurServices
