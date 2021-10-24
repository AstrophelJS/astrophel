import React from 'react'
import 'aframe'
import { Entity } from 'aframe-react'
import 'aframe-text-geometry-component'

import './centerAll'

const Text3D = (props) => {
  const { text, position, rotation, scale } = props
  return (
    <Entity
      text-geometry={{ value: text, font: 'fonts/optimer_bold.typeface.json', size: 3, height: 1 }}
      position={position}
      rotation={rotation}
      scale={scale}
      material={{
        color: 'white',
        src: ''
      }}
      center
    />
  )
}

Text3D.defaultProps = {
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

export default Text3D
