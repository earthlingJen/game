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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Balloon = exports.Balloon = function () {\n  function Balloon(x, y, countScore, countLives) {\n    _classCallCheck(this, Balloon);\n\n    this.createElement(x, y);\n    this.updatePosition();\n    this.queueUpdate();\n    this.removeBalloon();\n    this.countScore = countScore;\n    this.countLives = countLives;\n  }\n\n  _createClass(Balloon, [{\n    key: 'createElement',\n    value: function createElement(x, y) {\n      this.pos = { x: x, y: y // = {x:x, y:y}\n      };this.el = document.createElement('div');\n      this.el.className = 'balloon';\n\n      document.body.insertAdjacentElement('beforeend', this.el);\n    }\n  }, {\n    key: 'updatePosition',\n    value: function updatePosition() {\n      this.el.style.left = this.pos.x + 'px';\n      this.el.style.top = this.pos.y + 'px';\n    }\n\n    //bewegt Balloon um 1px pro 10 millisek. nach oben\n\n  }, {\n    key: 'queueUpdate',\n    value: function queueUpdate() {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.a = _this.a ? _this.a * 1.008 : 1;\n        _this.pos.y -= _this.a;\n        _this.updatePosition();\n\n        if (_this.pos.y < 70) {\n          _this.destroy();\n          _this.countLives();\n        } else {\n          _this.queueUpdate();\n        }\n      }, 30);\n    }\n  }, {\n    key: 'destroy',\n    value: function destroy() {\n      var _this2 = this;\n\n      this.el.style.transform = 'translate(-50%,-50%) scale(5)';\n      this.el.style.background = 'transparent';\n      this.el.style.border = 'none';\n      this.el.style.backgroundImage = \"url('explosion.png')\";\n      this.el.style.backgroundRepeat = 'no-repeat';\n      this.el.style.backgroundPosition = 'center';\n      this.el.style.backgroundSize = '22px 22px';\n\n      setTimeout(function () {\n        _this2.el.remove();\n        _this2.el = null;\n      }, 400);\n    }\n  }, {\n    key: 'removeBalloon',\n    value: function removeBalloon() {\n      var _this3 = this;\n\n      this.el.addEventListener('click', function (event) {\n        event.stopPropagation(); //damit beim platzen lassen eines Ballons, kein neuer entsteht (eventListener vom Body \"ausgeschaltet\")\n        _this3.destroy();\n        _this3.countScore();\n      });\n    }\n  }]);\n\n  return Balloon;\n}();\n\n//# sourceURL=webpack:///./src/js/Balloon.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Balloon = __webpack_require__(/*! ./Balloon */ \"./src/js/Balloon.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar lives = 1;\n\nvar Game = function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.score = 0;\n    this.missed = 0;\n    this.randomBalloon();\n    this.createCounter();\n    this.createButton();\n  }\n\n  _createClass(Game, [{\n    key: 'randomBalloon',\n    value: function randomBalloon() {\n      var _this = this;\n\n      if (this.missed !== lives) {\n        setTimeout(function () {\n          new _Balloon.Balloon(Math.random() * 1200, 800, _this.countScore.bind(_this), _this.countMissed.bind(_this));\n          _this.randomBalloon();\n        }, 2000);\n      } else {\n        console.log('game over');\n        this.el = document.createElement('div');\n        this.el.className = 'gameOver';\n        this.el.innerHTML = '<h1 class=\"counter-text\">Game Over</h1>';\n        document.body.insertAdjacentElement('beforeend', this.el);\n      }\n    }\n  }, {\n    key: 'createCounter',\n    value: function createCounter() {\n      this.counter = document.createElement('div');\n      this.counter.className = 'counter';\n      this.counter.innerHTML = '<h1 class=\"counter-text\">' + this.score + ' / ' + this.missed + '</h1>';\n      document.body.insertAdjacentElement('beforeend', this.counter);\n    }\n  }, {\n    key: 'updateCounter',\n    value: function updateCounter() {\n      this.counter.innerHTML = '';\n      this.counter.innerHTML = '<h1 class=\"counter-text\">' + this.score + ' / ' + this.missed + '</h1>';\n    }\n  }, {\n    key: 'countScore',\n    value: function countScore() {\n      if (this.missed !== lives) {\n        this.score++;\n        this.updateCounter();\n      }\n    }\n  }, {\n    key: 'countMissed',\n    value: function countMissed() {\n      if (this.missed !== lives) {\n        this.missed++;\n        this.updateCounter();\n      }\n    }\n  }, {\n    key: 'createButton',\n    value: function createButton() {\n      var _this2 = this;\n\n      this.button = document.createElement('button');\n      this.button.className = 'btn';\n      this.button.innerHTML = '<button>Restart</button>';\n      document.body.insertAdjacentElement('afterend', this.button);\n\n      this.button.addEventListener('click', function () {\n        return _this2.restart();\n      });\n    }\n  }, {\n    key: 'restart',\n    value: function restart() {\n      this.score = 0;\n      this.missed = 0;\n      this.el.innerHTML = '';\n      this.updateCounter();\n      this.randomBalloon();\n    }\n  }]);\n\n  return Game;\n}();\n\nexports.default = Game;\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Game = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\nvar _Game2 = _interopRequireDefault(_Game);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _Game2.default();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });