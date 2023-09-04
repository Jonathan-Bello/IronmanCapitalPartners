import React from 'react'
import PartherItem from './PartherItem'

const ParthersSection = () => {
  return (
    <section className="ParthersSection">
      <PartherItem
        title={'MANHATTAN VENTURE PARTNERS'}
        text={
          'MVP is a research-driven merchant bank focused on the secondary market for late-stage Pre IPO-Companies. Some prior deals: Airbnb, Bloomenergy, EPIC, SoFi, InstaCart. MVP has arranged or invested $10 billion in private primary and secondary direct venture deals.'
        }
      />

      <PartherItem
        title={'BASE MIAMI'}
        text={
          'Ironman VC Base Miami & Mana Tech is an end-to-end accelerator program and fund that helps Latin American and Caribbean tech companies and consumer companies expand their business into the U. S. market. This is through virtual and in-situ educational, as well as acceleration/soft-landing programs run with one-on-one 3-4-year-old sustainable and a clear path to profitability startups, groups of sustainable startups, or through government agencies, NGOs, VCs, and corporates.'
        }
      />

      <PartherItem
        title={'SNOWBALL'}
        text={`Snowball is the largest equity crowdfunding platform in Latin America and is certified by the Mexican National Banking and Securities Commission (CNBV) to operate as an Equity Crowdfunding Institution. Through our now 57,000 users we have placed more than +133,000,000.00 million pesos (USD 6.6 million) in highly profitable companies, which have delivered more than +16.2 million pesos (USD 800K) in returns to thousands of investors. This, in the company's first commercial operation year alone.`}
      />
      <PartherItem
        title={'SELF-STORAGE'}
        text={`Ironman Self Storage is a product that allows you to buy storage in small amounts. It is a simple, real estate business, with no extra expenses or problems. Ironman Self Storage identifies and purchases Self Storage buildings with more than 10 years of activity and more than 85% occupancy. It transforms them into condominiums and adjusts the management under Ironman's standards. Self Storage units are sold to small, medium, and large investors, with the property title. Ironman offers a rental contract with net and assured rent for 2 years, extendable to 6 years. The Ironman Self Storage lease includes a 5.5% annual rent. The rent is on the dollar amount of your investment, not the number of units you purchase.`}
      />

      <PartherItem title={'HERBERT BETTINGER'} text={''} />

      <PartherItem
        title={'CRISTIAN ARENS'}
        text={
          'Cristian is a young entrepreneur and investor with more than 10 years of experience in the business world. He is well-known in the world of finance and investment and has a YouTube channel with over 100,000 subscribers. His podcast “Invertir Joven” is among the top 20 most listened to on Spotify. In addition, his book “Money Code” was one of the best-selling on Amazon. 3 years ago started to teach how to make people’s money work for them.'
        }
      />
    </section>
  )
}

export default ParthersSection
