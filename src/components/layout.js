import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './footer/footer'
import Navigation from './navigation/navigation'

import '../styles/index.scss'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulSiteInformation {
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
          menus
        }
      }
    `}
    render={data => (
      <>
        <Navigation />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer siteName={data.contentfulSiteInformation.siteName} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
