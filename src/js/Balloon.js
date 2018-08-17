export class Balloon {
  constructor(x, y) {
    this.createElement(x, y)
    this.updatePosition()
    this.queueUpdate()
    this.removeBalloon()
  }

  createElement(x, y) {
    this.pos = { x, y } // = {x:x, y:y}
    this.el = document.createElement('div')
    this.el.className = 'balloon'

    document.body.insertAdjacentElement('beforeend', this.el)
  }

  updatePosition() {
    this.el.style.left = `${this.pos.x}px`
    this.el.style.top = `${this.pos.y}px`
  }

  //bewegt Balloon um 1px pro 10 millisek. nach oben
  queueUpdate() {
    setTimeout(() => {
      this.a = this.a ? this.a * 1.008 : 1
      this.pos.y -= this.a
      this.updatePosition()

      if (this.pos.y < 70) {
        this.destroy()
      } else {
        this.queueUpdate()
      }
    }, 30)
  }

  destroy() {
    this.el.style.transform = 'translate(-50%,-50%) scale(5)'
    this.el.style.background = 'transparent'
    this.el.style.border = 'none'
    this.el.style.backgroundImage = "url('explosion.png')"
    this.el.style.backgroundRepeat = 'no-repeat'
    this.el.style.backgroundPosition = 'center'
    this.el.style.backgroundSize = '22px 22px'

    setTimeout(() => {
      this.el.remove()
      this.el = null
    }, 400)
  }

  removeBalloon() {
    this.score = 0
    this.el.addEventListener('click', event => {
      event.stopPropagation() //damit beim platzen lassen eines Ballons, kein neuer entsteht (eventListener vom Body "ausgeschaltet")
      this.destroy()
      this.score = this.score++
      console.log(this.score)
    })
  }
}
