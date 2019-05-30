import React from 'react'
import './index.css'

export function SocialFilters({name, children}) {
  return (
    <fieldset className="social-filters" aria-label={name}>
      {children}
    </fieldset>
  )
}