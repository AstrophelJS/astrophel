import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Light = (props) => {
  const { position, rotation } = props
  return (
    <Entity
      primitive='a-light'
      type='point'
      intensity='2'
      position={position}
      rotation={rotation}
    />
  )
}

Light.defaultProps = {
  position: {
    x: 0, y: 0, z: 0
  },
  rotation: {
    x: 0, y: 0, z: 0
  }
}

export default Light
