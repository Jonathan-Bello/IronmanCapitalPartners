import React from 'react'
import Header from './Header'
import '../../scss/styles.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
