import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Image = (props) => {
  const {
    image,
    position,
    rotation,
    scale,
    size: { height, width }
  } = props

  return (
    <Entity
      primitive='a-image'
      material={{
        side: 'double',
        alphaTest: '0.5'
      }}
      height={height}
      src={image}
      width={width}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

Image.defaultProps = {
  image: '',
  position: {
    x: 0, y: 0, z: -50
  },
  rotation: {
    x: 0, y: 0, z: 0
  },
  scale: {
    x: 1, y: 1, z: 1
  },
  size: {
    height: 20,
    width: 50
  }
}

export default Image
