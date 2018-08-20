import { Balloon } from './Balloon'

const lives = 1

export default class Game {
  constructor() {
    this.score = 0
    this.missed = 0
    this.randomBalloon()
    this.createCounter()
    this.createButton()
  }

  randomBalloon() {
    if (this.missed !== lives) {
      setTimeout(() => {
        new Balloon(
          Math.random() * 1200,
          800,
          this.countScore.bind(this),
          this.countMissed.bind(this)
        )
        this.randomBalloon()
      }, 2000)
    } else {
      console.log('game over')
      this.el = document.createElement('div')
      this.el.className = 'gameOver'
      this.el.innerHTML = `<h1 class="counter-text">Game Over</h1>`
      document.body.insertAdjacentElement('beforeend', this.el)
    }
  }

  createCounter() {
    this.counter = document.createElement('div')
    this.counter.className = 'counter'
    this.counter.innerHTML = `<h1 class="counter-text">${this.score} / ${
      this.missed
    }</h1>`
    document.body.insertAdjacentElement('beforeend', this.counter)
  }

  updateCounter() {
    this.counter.innerHTML = ''
    this.counter.innerHTML = `<h1 class="counter-text">${this.score} / ${
      this.missed
    }</h1>`
  }

  countScore() {
    if (this.missed !== lives) {
      this.score++
      this.updateCounter()
    }
  }

  countMissed() {
    if (this.missed !== lives) {
      this.missed++
      this.updateCounter()
    }
  }

  createButton() {
    this.button = document.createElement('button')
    this.button.className = 'btn'
    this.button.innerHTML = `<button>Restart</button>`
    document.body.insertAdjacentElement('afterend', this.button)

    this.button.addEventListener('click', () => this.restart())
  }

  restart() {
    this.score = 0
    this.missed = 0
    this.el.innerHTML = ''
    this.updateCounter()
    this.randomBalloon()
  }
}
