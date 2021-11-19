const TYPE = {
  ROTATION: 'rotation',
  POSITION: 'position',
  SCALE: 'scale'
}

const getProperties = (type) => {
  let properties = {}
  switch (type) {
    case TYPE.ROTATION: {
      properties = {
        property: TYPE.ROTATION,
        dur: 0,
        easing: 'linear',
        loop: true,
        to: { x: 0, y: 0, z: 0 }
      }
      break
    }
    case TYPE.POSITION: {
      properties = {
        property: TYPE.POSITION,
        dur: 0,
        easing: 'linear',
        loop: false,
        to: { x: 0, y: 0, z: 0 }
      }
      break
    }
    case TYPE.SCALE: {
      properties = {
        property: TYPE.SCALE,
        dur: 0,
        easing: 'linear',
        loop: false,
        to: { x: 0, y: 0, z: 0 }
      }
      break
    }
    default:
  }
  return properties
}

const rotate = (to, duration) => {
  const properties = getProperties(TYPE.ROTATION)
  const payload = {
    ...properties,
    to,
    dur: duration
  }
  return payload
}

const move = (from, to, duration) => {
  const properties = getProperties(TYPE.POSITION)
  const payload = {
    ...properties,
    from: {
      x: 0,
      y: 0,
      z: 0,
      ...from
    },
    to: {
      x: 0,
      y: 0,
      z: 0,
      ...to
    },
    dur: duration
  }
  return payload
}

const scale = (to, duration, trigger, from = {}) => {
  if (!trigger) {
    return {}
  }
  const properties = getProperties(TYPE.SCALE)
  const payload = {
    ...properties,
    from: {
      x: 0,
      y: 0,
      z: 0,
      ...from
    },
    to: {
      x: 0,
      y: 0,
      z: 0,
      ...to
    },
    dur: duration
  }
  return payload
}

export default { rotate, move, scale }
