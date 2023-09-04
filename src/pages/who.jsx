import React from 'react'
import '../scss/styles.scss'
import WhoContent from '../components/pages/Who/WhoContent'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'

const WhoPage = () => {
  return (
    <Layout>
      <WhoContent />
      <Footer />
    </Layout>
  )
}

export default WhoPage
