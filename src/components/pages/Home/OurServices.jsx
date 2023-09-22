import React from 'react'
import ourServices from '../../../assets/images/our-services.png'
import { Link } from 'gatsby'

const OurServices = () => {
  return (
    <section className="OurServices">
      <img className="OurServices__img" src={ourServices} alt="ourServices" />
      <p className="OurServices__subtext">
        Discover how <b>IRONMAN CAPITAL PARTNERS</b> can expertly manage and
        grow your capital over the long haul.
      </p>
      <h3 className="OurServices__title">SOFTLANDING ACCEL</h3>
      <p className="OurServices__text">
        Angel Investors & Venture Capital introduces a Softlanding and
        Acceleration program spanning 5 weeks to 9 months, crafted for Latin
        American, European, and Caribbean Startups looking to make their mark in
        the U.S. and global markets.
      </p>
      <h4 className="OurServices__subtitle">THE ACCELERATOR PROGRAM & FUND</h4>
      <p className="OurServices__text">
        The Accelerator Program & FundIronman VC represents a holistic
        accelerator program and fund, strategically poised to usher Latin
        American, European, and Caribbean tech and consumer ventures into the
        U.S. market. This initiative melds virtual and in-person educational and
        acceleration programs, tailored specifically for thriving startups aged
        3-4 years, sustainable startup groups, or through collaborations with
        government entities, NGOs, VCs, and corporate partnerships. Funding and
        Bootstrapping, we recognize the unique challenges faced by mature
        startups as they navigate cross-border expansion. To support these
        ventures, Ironman VC offers two distinct funding rounds, designed to
        provide the financial foundation and strategic guidance essential for
        successful market penetration. Our agenda is meticulously crafted to
        minimize investment risks associated with adoption, ensuring startups
        are well-positioned to tackle and surmount the barriers commonly
        encountered in foreign markets. By focusing on key success factors and
        leveraging the talents of our in-house team, we streamline the startup
        journey. This emphasis ensures that only the most prepared and adaptable
        enterprises move forward to the finalist stage, poised to attempt U.S.
        market penetration with confidence.
      </p>
      <h4 className="OurServices__subtitle">TARGET INDUSTRIES</h4>'
      <p className="OurServices__text">
        We focus on a myriad of sectors, including technology, consumer
        products, fintech, food tech, the health sector, and the Blue Economy,
        among others.
      </p>
      <h4 className="OurServices__subtitle">THE INVESTMENT PARAMETERS</h4>
      <p className="OurServices__text">
        The program boasts a minimum fund threshold of 10M USD and is capped at
        20M USD. With a projected fund duration of 6+2 years, we charge a 3.5%
        management fee and offer a 20% carry alongside a 1% Founders Fee. With
        an expected IRR surpassing 30%, an 8% hurdle, and an average round
        pegged at 100K, we aim for around 80 investments, acquiring equity
        ranging between 2% to 7% options to invest at present value.
      </p>
      <h4 className="OurServices__subtitle">
        THE U.S., EUROPEAN, MARKET ENTRY AND THE LATIN AMERICAN OPPORTUNITY
      </h4>
      <p className="OurServices__text">
        The Hispanic Latin American market is ripe for venture capital
        exploration. In 2022 alone, global venture funding amounted to $445
        billion. VC investment in Latin America has grown eight-fold since 2016.
        Ironman VC Base Miami & Mana Tech, acknowledging this exponential
        growth, seeks to assimilate companies within the Miami business realm,
        providing pivotal resources for successful forays into both U.S. and
        global markets.
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
        Our program lasts for 6 weeks, concluding with a comprehensive 9-month
        boot camp. It commences with an orientation to the American market and
        diagnostic tools. Subsequent weeks delve into capital-raising
        strategies, legal considerations, target market identification,
        strategic market entry planning, pitch training, and culminates in
        in-depth individual and group investment workshops. Our focus is to
        unify and move forward, tackling real-world scenarios to exceed our
        collective impact and goals. Startup evaluation hinges on scalability,
        team dynamics, business model repeatability, innovation, revenue
        potential, and societal impact, aligned with the Sustainability
        Development Goals.
      </p>
      <h4 className="OurServices__subtitle">KEY TO SUCCESS AND PARTNERSHIPS</h4>
      <p className="OurServices__text">
        Ironman VC employs a hands-on “learning by doing” approach for companies
        aiming to globalize their products and penetrate the U.S. market. Our
        expansive network in Miami, spanning banks, governments, educational
        institutions, accelerators, developers, foundations, and chambers of
        commerce, ensures comprehensive support for the startups we nurture.
      </p>
      <h4 className="OurServices__subtitle s-mb-4">DESIRE MORE INFORMATION?</h4>
      <div className="s-mb-4">
        <Link
          to="/contact"
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
