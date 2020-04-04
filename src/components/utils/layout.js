import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Footer from '../section/footer/footer'
import Navigation from '../ui/navigation/navigation'

import '../../styles/index.scss'

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: contentfulSiteInformation {
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
        }
        menu: allContentfulMenu(sort: { order: ASC, fields: position }) {
          nodes {
            position
            name
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Navigation menu={data.menu.nodes} />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer siteName={data.site.siteName} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
