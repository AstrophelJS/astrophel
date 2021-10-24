import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Text2D = (props) => {
  const { text, position, rotation, scale } = props
  return (
    <Entity
      text={{ value: text }}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

Text2D.defaultProps = {
  text: '',
  position: {
    x: 0,
    y: 0,
    z: 0
  },
  rotation: {
    x: 0,
    y: 0,
    z: 0
  },
  scale: {
    x: 1,
    y: 1,
    z: 1
  }
}

export default Text2D
