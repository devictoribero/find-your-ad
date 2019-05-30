import React from 'react'
import './index.css'

function Layout({name, children}) {
  return (
    <fieldset className="social-filters" aria-label={name}>
      {children}
    </fieldset>
  )
}

function Name({name, children}) {
  return (
    <legend className="social-filters__name" aria-label={name}>
      {children}
    </legend>
  )
}

export default {
  Layout,
  Name
}