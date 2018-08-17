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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Balloon.js":
/*!***************************!*\
  !*** ./src/js/Balloon.js ***!
  \***************************/
/*! exports provided: Balloon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Balloon\", function() { return Balloon; });\nclass Balloon {\n  constructor(x, y) {\n    this.createElement(x, y)\n    this.updatePosition()\n    this.queueUpdate()\n    this.removeBalloon()\n  }\n\n  createElement(x, y) {\n    this.pos = { x, y } // = {x:x, y:y}\n    this.el = document.createElement('div')\n    this.el.className = 'balloon'\n\n    document.body.insertAdjacentElement('beforeend', this.el)\n  }\n\n  updatePosition() {\n    this.el.style.left = `${this.pos.x}px`\n    this.el.style.top = `${this.pos.y}px`\n  }\n\n  //bewegt Balloon um 1px pro 10 millisek. nach oben\n  queueUpdate() {\n    setTimeout(() => {\n      this.a = this.a ? this.a * 1.008 : 1\n      this.pos.y -= this.a\n      this.updatePosition()\n\n      if (this.pos.y < 70) {\n        this.destroy()\n      } else {\n        this.queueUpdate()\n      }\n    }, 30)\n  }\n\n  destroy() {\n    this.el.style.transform = 'translate(-50%,-50%) scale(5)'\n    this.el.style.background = 'transparent'\n    this.el.style.border = 'none'\n    this.el.style.backgroundImage = \"url('explosion.png')\"\n    this.el.style.backgroundRepeat = 'no-repeat'\n    this.el.style.backgroundPosition = 'center'\n    this.el.style.backgroundSize = '22px 22px'\n\n    setTimeout(() => {\n      this.el.remove()\n      this.el = null\n    }, 400)\n  }\n\n  removeBalloon() {\n    this.score = 0\n    this.el.addEventListener('click', event => {\n      event.stopPropagation() //damit beim platzen lassen eines Ballons, kein neuer entsteht (eventListener vom Body \"ausgeschaltet\")\n      this.destroy()\n      this.score = this.score++\n      console.log(this.score)\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Balloon.js?");

/***/ }),

/***/ "./src/js/Counter.js":
/*!***************************!*\
  !*** ./src/js/Counter.js ***!
  \***************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Counter\", function() { return Counter; });\nclass Counter {\n  constructor(x, y) {\n    this.createElement()\n    this.counting()\n  }\n\n  createElement() {\n    this.el = document.createElement('div')\n    this.el.className = 'counter'\n    this.el.innerHTML = `<h1 class=\"counter-text\">0 / 1</h1>`\n    document.body.insertAdjacentElement('beforeend', this.el)\n  }\n\n  counting() {}\n}\n\n\n//# sourceURL=webpack:///./src/js/Counter.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Balloon */ \"./src/js/Balloon.js\");\n/* harmony import */ var _Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counter */ \"./src/js/Counter.js\");\n\n\n\nclass Game {\n  constructor() {\n    new _Counter__WEBPACK_IMPORTED_MODULE_1__[\"Counter\"]()\n    this.randomBalloon()\n  }\n\n  randomBalloon() {\n    setTimeout(() => {\n      new _Balloon__WEBPACK_IMPORTED_MODULE_0__[\"Balloon\"](Math.random() * 1200, 800)\n      this.randomBalloon()\n    }, 2000)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\nnew _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });