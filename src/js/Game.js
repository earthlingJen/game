import { Balloon } from './Balloon'
import { Counter } from './Counter'

export default class Game {
  constructor() {
    new Counter()
    this.randomBalloon()
  }

  randomBalloon() {
    setTimeout(() => {
      new Balloon(Math.random() * 1200, 800)
      this.randomBalloon()
    }, 2000)
  }
}
