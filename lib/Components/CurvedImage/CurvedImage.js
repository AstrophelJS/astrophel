import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const CurvedImage = (props) => {
  const {
    imageUrl,
    position,
    rotation,
    radius,
    scale,
    visible,
    animationScale,
    size: { height, width }
  } = props
  return (
    <Entity
      primitive='a-curvedimage'
      material={{
        side: 'double',
        alphaTest: '0.5'
      }}
      height={height}
      src={imageUrl}
      width={width}
      position={position}
      rotation={rotation}
      scale={scale}
      radius={radius}
      theta-length='90'
      theta-start='135'
      visible={visible}
      animation__scale={animationScale}
    />
  )
}

CurvedImage.defaultProps = {
  imageUrl: '',
  position: {
    x: 0, y: 0, z: 0
  },
  rotation: {
    x: 0, y: 0, z: 0
  },
  scale: {
    x: 0, y: 0, z: 0
  },
  size: {
    height: 30,
    width: 30
  },
  radius: 20,
  animationScale: {},
  visible: true
}

export default CurvedImage
