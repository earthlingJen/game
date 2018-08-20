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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Balloon\", function() { return Balloon; });\nclass Balloon {\n  constructor(x, y, countScore, countLives) {\n    this.createElement(x, y)\n    this.updatePosition()\n    this.queueUpdate()\n    this.removeBalloon()\n    this.countScore = countScore\n    this.countLives = countLives\n  }\n\n  createElement(x, y) {\n    this.pos = { x, y } // = {x:x, y:y}\n    this.el = document.createElement('div')\n    this.el.className = 'balloon'\n\n    document.body.insertAdjacentElement('beforeend', this.el)\n  }\n\n  updatePosition() {\n    this.el.style.left = `${this.pos.x}px`\n    this.el.style.top = `${this.pos.y}px`\n  }\n\n  //bewegt Balloon um 1px pro 10 millisek. nach oben\n  queueUpdate() {\n    setTimeout(() => {\n      this.a = this.a ? this.a * 1.008 : 1\n      this.pos.y -= this.a\n      this.updatePosition()\n\n      if (this.pos.y < 70) {\n        this.destroy()\n        this.countLives()\n      } else {\n        this.queueUpdate()\n      }\n    }, 30)\n  }\n\n  destroy() {\n    this.el.style.transform = 'translate(-50%,-50%) scale(5)'\n    this.el.style.background = 'transparent'\n    this.el.style.border = 'none'\n    this.el.style.backgroundImage = \"url('explosion.png')\"\n    this.el.style.backgroundRepeat = 'no-repeat'\n    this.el.style.backgroundPosition = 'center'\n    this.el.style.backgroundSize = '22px 22px'\n\n    setTimeout(() => {\n      this.el.remove()\n      this.el = null\n    }, 400)\n  }\n\n  removeBalloon() {\n    this.el.addEventListener('click', event => {\n      event.stopPropagation() //damit beim platzen lassen eines Ballons, kein neuer entsteht (eventListener vom Body \"ausgeschaltet\")\n      this.destroy()\n      this.countScore()\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Balloon.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Balloon */ \"./src/js/Balloon.js\");\n\n\nconst lives = 1\n\nclass Game {\n  constructor() {\n    this.score = 0\n    this.missed = 0\n    this.randomBalloon()\n    this.createCounter()\n    this.createButton()\n  }\n\n  randomBalloon() {\n    if (this.missed !== lives) {\n      setTimeout(() => {\n        new _Balloon__WEBPACK_IMPORTED_MODULE_0__[\"Balloon\"](\n          Math.random() * 1200,\n          800,\n          this.countScore.bind(this),\n          this.countMissed.bind(this)\n        )\n        this.randomBalloon()\n      }, 2000)\n    } else {\n      console.log('game over')\n      this.el = document.createElement('div')\n      this.el.className = 'gameOver'\n      this.el.innerHTML = `<h1 class=\"counter-text\">Game Over</h1>`\n      document.body.insertAdjacentElement('beforeend', this.el)\n    }\n  }\n\n  createCounter() {\n    this.counter = document.createElement('div')\n    this.counter.className = 'counter'\n    this.counter.innerHTML = `<h1 class=\"counter-text\">${this.score} / ${\n      this.missed\n    }</h1>`\n    document.body.insertAdjacentElement('beforeend', this.counter)\n  }\n\n  updateCounter() {\n    this.counter.innerHTML = ''\n    this.counter.innerHTML = `<h1 class=\"counter-text\">${this.score} / ${\n      this.missed\n    }</h1>`\n  }\n\n  countScore() {\n    if (this.missed !== lives) {\n      this.score++\n      this.updateCounter()\n    }\n  }\n\n  countMissed() {\n    if (this.missed !== lives) {\n      this.missed++\n      this.updateCounter()\n    }\n  }\n\n  createButton() {\n    this.button = document.createElement('button')\n    this.button.className = 'btn'\n    this.button.innerHTML = `<button>Restart</button>`\n    document.body.insertAdjacentElement('afterend', this.button)\n\n    this.button.addEventListener('click', () => this.restart())\n  }\n\n  restart() {\n    this.score = 0\n    this.missed = 0\n    this.el.innerHTML = ''\n    this.updateCounter()\n    this.randomBalloon()\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

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