import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Web Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'gatsby, sample' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

export default TemplateWrapper
