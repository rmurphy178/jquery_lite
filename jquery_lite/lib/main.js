const DOMNodeCollection = require('./dom_node_collection.js');

const $l = ((selector) => {
  if (typeof selector === 'string') {
    const items = [...document.querySelectorAll(selector)];
    return new DOMNodeCollection(items);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection(selector);
  }

});


window.$l = $l;
