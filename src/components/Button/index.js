import React from 'react'
import './index.css'

export function Button({onClick, children}) {
  return (
    <Button onClick={onClick} className="button">
      {children}
    </Button>
  )
}