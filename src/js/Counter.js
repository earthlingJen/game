export class Counter {
  constructor(x, y) {
    this.createElement()
    this.counting()
  }

  createElement() {
    this.el = document.createElement('div')
    this.el.className = 'counter'
    this.el.innerHTML = `<h1 class="counter-text">0 / 1</h1>`
    document.body.insertAdjacentElement('beforeend', this.el)
  }

  counting() {}
}
