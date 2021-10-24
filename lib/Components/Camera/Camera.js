import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Entity } from 'aframe-react'

const Camera = (props) => {
  const { position, setRotation, setPosition } = props
  return (
    <Entity
      primitive='a-camera'
      id='mainCamera'
      position={position}
      rotation={{ x: 0, y: -180, z: 0 }}
      scale={{ x: 1, y: 1, z: 1 }}
      animation__rotate={setRotation}
      animation__position={setPosition}
      wasd-controls={{ enabled: false }}
      camera={{ zoom: '1.5' }}
    />
  )
}

Camera.defaultProps = {
  position: {
    x: 0, y: 0, z: 0
  },
  setPosition: {},
  setRotationn: {}
}

export default Camera
