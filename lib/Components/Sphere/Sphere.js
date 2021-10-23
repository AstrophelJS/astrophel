import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Sphere = (props) => {
  const {
    src,
    position,
    rotation,
    scale
  } = props
  return (
    <Entity
      primitive='a-sphere'
      material={{
        side: 'double',
        alphaTest: '0.5',
        shader: 'flat',
        src
        // blending: "additive",
      }}
      src={src}
      radius={100}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

Sphere.defaultProps = {
  src: '',
  position: {
    x: 0, y: 0, z: 0
  },
  rotation: {
    x: 0, y: 0, z: 0
  },
  scale: {
    x: 1, y: 1, z: 1
  }
}

export default Sphere
