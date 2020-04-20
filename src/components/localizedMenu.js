import React from 'react'
import { Link } from 'gatsby'

const LocalizedMenu = ({ items, linkPrefix }) => {
  return (
    <div>
      {items.map(i => (
        <Link
          key={i.key}
          to={`${linkPrefix}${i.to}`}
          style={{ marginRight: '10px' }}
        >
          {i.name}
        </Link>
      ))}
    </div>
  )
}

export default LocalizedMenu
