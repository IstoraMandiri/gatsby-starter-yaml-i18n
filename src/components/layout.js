import React from 'react'
import MainMenu from './mainMenu'

import Json from './json'

const Layout = ({ pageContext, pageContext: { i18n }, children, color }) => {
  // NB: here is a great place to put an SEO or head component
  return (
    <div>
      <MainMenu {...pageContext} />
      <h1 style={{ color: color || 'black' }}>
        {i18n.title || i18n.globals.ui.title}
        {i18n.subtitle && <small style={{ opacity: '0.8' }}>{` ${i18n.subtitle}`}</small>}
      </h1>
      {children}
      <hr/>
      {i18n.globals.ui.footer}
      <hr/>
      <Json data={{ pageContext }} />
    </div>
  )
}

export default Layout
