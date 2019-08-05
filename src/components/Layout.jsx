import React from 'react'
import GlobalStyle from '../styles/global'
import SEO from './SEO'
import Navigation from './Navigation'
import 'typeface-cantata-one'
import 'typeface-open-sans'

const Layout = () => (
  <>
    <SEO />
    <GlobalStyle />
    <Navigation />
  </>
)

export default Layout
