import React from 'react'
import './index.css'

export function SocialFilters({name, children}) {
  return (
    <fieldset className="social-filters">
      <legend className="social-filters__name">{name}</legend>
      {children}
    </fieldset>
  )
}