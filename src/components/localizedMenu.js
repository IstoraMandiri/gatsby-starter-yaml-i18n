import React from "react"
import { I18nLink as Link } from "gatsby-plugin-yaml-i18n"

const LocalizedMenu = ({ items }) => {
  return (
    <div>
      {items.map(i => (
        <Link key={i.key} to={i.to} style={{ marginRight: "10px" }}>
          {i.name}
        </Link>
      ))}
    </div>
  )
}

export default LocalizedMenu
