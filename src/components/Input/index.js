import React from 'react'
import './index.css'

export function Input({type = 'text', value, onChange}) {
  return(
    <input
      className='input'
      type={type}
      value={value}
      onChange={onChange}/>
  )
}