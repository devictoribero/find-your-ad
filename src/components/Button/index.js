import React from 'react'
import './index.css'

export function Button({onClick, children}) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  )
}