import React from 'react'
import '../scss/styles.scss'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import PortafolioContent from '../components/pages/Portafolio/PortafolioContent'

const PortafolioPage = () => {
  return (
    <Layout>
      <PortafolioContent />
      <Footer />
    </Layout>
  )
}

export default PortafolioPage
