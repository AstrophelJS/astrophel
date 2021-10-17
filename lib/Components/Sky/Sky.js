import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Sky = (props) => {
  const { image } = props
  return (
    <Entity
      primitive='a-sky'
      height='8192'
      radius='8192'
      src={image}
      width='8192'
    />
  )
}

export default Sky
