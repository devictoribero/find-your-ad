import React from 'react'
import './index.css'

export function Filters({children}) {
  return (
    <form className="filters">
      <header className="filters__header">
        <h2 className="filters__title">
          Find what you want!
        </h2>
      </header>
      
      {children}
    </form>
  )
}
