import React from 'react'
import '../scss/styles.scss'
import Layout from '../components/Layout'
import PortadaHome from '../assets/images/PortadaHome.png'
import LogoIronmanPortada from '../assets/images/logo-ironman-portada.png'
import { Link } from 'gatsby'
import HomaPageContent from '../components/pages/Home/HomaPageContent'

const IndexPage = () => {
  return (
    <Layout>
      <HomaPageContent />
    </Layout>
  )
}

export default IndexPage
