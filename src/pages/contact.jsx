import React from 'react'
import '../scss/styles.scss'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import ContactContent from '../components/pages/Contact/ContactContent'

const ContactPage = () => {
  return (
    <Layout>
      <ContactContent />
      <Footer />
    </Layout>
  )
}

export default ContactPage
