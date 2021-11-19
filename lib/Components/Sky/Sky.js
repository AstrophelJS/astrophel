import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

import { AnimationUtils, VectorUtils } from '../../Utils'

const Sky = (props) => {
  const { image, position, rotation, scale, rotating, positioning } = props
  const animation = {}
  if (rotating) {
    const { angle, duration } = rotating
    const target = VectorUtils.vector(0, angle, 0)
    animation.animation__rotate = AnimationUtils.rotate(target, duration)
  }
  if (positioning) {
    const { forward, duration } = positioning
    const target = VectorUtils.vector(0, 0, forward)
    animation.animation__position = AnimationUtils.move(position, target, duration)
  }

  return (
    <Entity
      primitive='a-sky'
      height='2048'
      radius='2048'
      src={image}
      position={position}
      rotation={rotation}
      scale={scale}
      width='2048'
      {...animation}
    />
  )
}

Sky.defaultProps = {
  image: '',
  position: {
    x: 0, y: 0, z: 0
  },
  rotation: {
    x: 0, y: 0, z: 0
  },
  scale: {
    x: 1, y: 1, z: 1
  },
  animationRotation: {}
}

export default Sky
