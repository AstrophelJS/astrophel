import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

import { AnimationUtils, VectorUtils } from '../../Utils'

const Camera = (props) => {
  const { position, rotation, rotating, positioning } = props
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
      primitive='a-camera'
      id='mainCamera'
      position={position}
      rotation={rotation}
      scale={{ x: 1, y: 1, z: 1 }}
      wasd-controls={{ enabled: false }}
      camera={{ zoom: '1.5' }}
      {...animation}
    />
  )
}

Camera.defaultProps = {
  position: {
    x: 0, y: 0, z: 0
  },
  rotation: {
    x: 0, y: -180, z: 0
  },
  setPosition: {},
  setRotationn: {},
  rotating: null,
  positioning: null
}

export default Camera
