import React from 'react'
import { Link } from 'gatsby'

import LocalizedMenu from './localizedMenu.js'

const MainMenu = ({ locales, relativePath, defaultLocale, linkPrefix, i18n }) => {
  return (
    <>
      <div style={{ float: 'right' }}>
        {locales.map(locale => (
          <Link
            key={locale}
            style={{ marginLeft: '10px', fontSize: '20px', textDecoration: 'none' }}
            to={`${locale === defaultLocale ? '/' : `/${locale}`}/${relativePath}`}
          >
            {i18n.globals.ui.flags[locale]}
          </Link>
        ))}
      </div>
      <LocalizedMenu items={i18n.globals.menu} linkPrefix={linkPrefix} />
    </>
  )
}

export default MainMenu
