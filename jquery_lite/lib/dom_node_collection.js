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
  append(arg){
    if (typeof arg === 'string') {
      for (let i = this.selector.length - 1; i >= 0; i--) {
        this.selector[i].innerHTML += arg;
      }
    } else if (arg instanceof HTMLElement) {
      for (let i = this.selector.length - 1; i >= 0; i--) {
        this.selector[i].innerHTML += arg.outerHTML;
      }
    } else {
      this.each(node => {
        // The argument to cloneNode indicates whether or not
        // all children should be cloned.
        arg.each(childNode => {
          node.appendChild(childNode.cloneNode(true));
        });
      });

      }
    }

  each(cb) {
   // Our each passes in the node and index in traditional 'forEach' order,
   // jquery passes in index first and binds the call to the element.
   this.nodes.forEach(cb);
 }
}










module.exports = DOMNodeCollection;
