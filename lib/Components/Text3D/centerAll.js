const AFRAME = window.AFRAME

AFRAME.registerComponent('center', {
  update() {
    this.el.sceneEl.addEventListener('loaded', () => {
      setTimeout(() => {
        const mesh = this.el.getObject3D('mesh')
        mesh.geometry.center()
      }, 0)
    })
  }
})
