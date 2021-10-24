import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Image = (props) => {
  const {
    src,
    position,
    rotation,
    scale,
    size: { height, width },
    animationRotation
  } = props
  return (
    <Entity
      primitive='a-image'
      material={{
        side: 'double',
        alphaTest: '0.5'
      }}
      height={height}
      src={src}
      width={width}
      position={position}
      rotation={rotation}
      scale={scale}
      animation__rotation={animationRotation}
    />
  )
}

Image.defaultProps = {
  src: '',
  position: {
    x: 0, y: 0, z: 0
  },
  rotation: {
    x: 0, y: 0, z: 0
  },
  scale: {
    x: 1, y: 1, z: 1
  },
  size: {
    height: 100,
    width: 100
  },
  animationRotation: {}
}

export default Image
