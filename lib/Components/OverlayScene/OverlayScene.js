import React from 'react'

const OverlayScene = (props) => {
  const { content, type } = props
  return (
    <div style={{ position: type, bottom: -20, zIndex: 1000 }}>
      {content}
    </div>
  )
}

export default OverlayScene
