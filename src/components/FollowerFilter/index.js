import React from 'react'
import {Label} from '../Label'
import {Input} from '../Input'

export function FollowerFilter({label, value, onChange}) {
  return(
    <Label>
      {label}
      <Input type="number" value={value} onChange={onChange}/>
    </Label>
  )
}