import React from 'react'
import './index.css'

export function Filters({children}) {
  return (
    <form className="filters">
      <header className="filters__header">
        <h2 className="filters__title">
          What are you looking for?
        </h2>
      </header>
      
      {children}
    </form>
  )
}
