/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

const $l = ((selector) => {
  if (typeof selector === 'string') {
    const items = [...document.querySelectorAll(selector)];
    return new DOMNodeCollection(items);
  } else if (selector instanceof HTMLElement) {
    return new DOMNodeCollection(selector);
  }

});


window.$l = $l;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);