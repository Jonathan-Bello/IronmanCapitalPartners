import React from 'react'
import PartherItem from './PartherItem'

const ParthersSection = () => {
  return (
    <section className="ParthersSection">
      <PartherItem
        title={'IRONMAN FUNDING'}
        text={
          "Ironman Funding is the largest equity crowdfunding platform in Latin America and is certified by the Mexican National Banking and Securities Commission (CNBV) to operate as an Equity Crowdfunding Institution. Through our now 57,000 users we have placed more than +133,000,000.00 million pesos (USD 6.6 million) in highly profitable companies, which have delivered more than +16.2 million pesos (USD 800K) in returns to thousands of investors. This, in the company's first commercial operation year alone."
        }
      />
      <PartherItem
        title={'IRONMAN SELF-STORAGE'}
        text={
          'Ironman Self Storage USA presents a distinctive investment venture into the robust self-storage sector. Our offering allows investors to delve into storage spaces in digestible units, ensuring a streamlined real estate venture devoid of the customary hassles. Our expertise lies in sourcing and acquiring established self-storage properties with over a decade of operational history and a stellar 85% occupancy rate. These assets are subsequently transformed into condominiums and overhauled to align with Ironman’s exacting standards. Investors, ranging from small to large-scale, can purchase these units, complete with clear property titles. Additionally, Ironman guarantees a net rental agreement for a base term of two years, which is extendable up to six. We offer an enticing 5.5% annual return calculated on the invested amount, not tied to the number of acquired units.'
        }
      />
      <PartherItem
        title={'IRONMAN PRE-IPO'}
        text={
          'Ironman Pre-IPO is a research-driven merchant bank focused on the secondary market for late-stage Pre IPO-Companies. Some prior deals: Airbnb, Bloomenergy, EPIC, SoFi, InstaCart. MVP has arranged or invested $10 billion in private primary and secondary direct venture deals.'
        }
      />
      <PartherItem
        title={'IRONMAN VENTURE CAPITAL US MARKET ENTRY ACCELERATOR'}
        text={`Ironman VC Base Miami & Mana Tech is an end-to-end accelerator program and fund that helps Latin American and Caribbean tech companies and consumer companies expand their business into the U. S. market. This is through virtual and in-situ educational, as well as acceleration/soft-landing programs run with one-on-one 3-4-year-old sustainable and a clear path to profitability startups, groups of sustainable startups, or through government agencies, NGOs, VCs, and corporates.`}
      />

      
    </section>
  )
}

export default ParthersSection
