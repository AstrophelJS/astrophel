import React from 'react'
import 'aframe'
import 'aframe-particle-system-component'
import { Scene as SceneAframe } from 'aframe-react'

const Scene = (props) => {
  const { content } = props
  return (
    <SceneAframe
      physics={{ debug: false }}
      platform='all'
      light={{ defaultLightsEnabled: false }}
      vr-mode-ui={{ enabled: true }}
    >
      {content}
    </SceneAframe>
  )
}

export default Scene
