import React from 'react'

import SEO from '../components/utils/seo'

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <div className="site-container not-found-page">
      <div className="container text-center">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
