class DOMNodeCollection {
  constructor(selector) {
    this.selector = selector;
  }

  html(arg) {
    if (arg === undefined) {
      return this.selector[0].innerHTML;
    } else {
      for (let i = 0; i < this.selector.length; i++) {
        this.selector[i].innerHTML = arg;
      }
    }
  }
  empty() {
      this.html("");
  }
}










module.exports = DOMNodeCollection;
