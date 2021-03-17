/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\n\nconst PROPERTIES = {\n    COLOR: 'pink',\n    RADIUS: 20, \n    VEL: 5\n};\nfunction Asteroid(options, game) {\n    options.color = PROPERTIES.COLOR;\n    options.radius = PROPERTIES.RADIUS;\n    options.vel = Util.randomVec(PROPERTIES.VEL);\n    options.game = game;\n    MovingObject.call(this, options);\n};\n\nUtil.inherits(Asteroid, MovingObject)\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\nconst CONSTANTS = {\n     DIM_X : 500,\n     DIM_Y : 400,\n     NUM_ASTEROIDS : 4\n} \n\nfunction Game() { \n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function addAsteroids() {\n    for ( let i =0 ; i<CONSTANTS.NUM_ASTEROIDS ; i++){\n        this.asteroids.push(new Asteroid({position: this.randomPosition()}, this))\n    }\n}\n\nGame.prototype.randomPosition = function randomPosition(){\n    \n    return [\n        CONSTANTS.DIM_X * Math.random(),CONSTANTS.DIM_Y * Math.random()\n    ];\n}\n\nGame.prototype.draw = function(ctx){\n\n   ctx.clearRect(0, 0, CONSTANTS.DIM_Y, CONSTANTS.DIM_X);\n   ctx.fillStyle = 'black';\n   ctx.fillRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y)\n    for (let i =0; i< this.asteroids.length; i++){\n        this.asteroids[i].draw(ctx);\n    }\n}\n\nGame.prototype.moveObjects = function moveObjects(){\n    for (let i =0; i< this.asteroids.length; i++){\n        this.asteroids[i].move();\n    }\n}\n\nGame.prototype.wrap = function wrap (pos) {\n    let wrappedPos = [0, 0];\n    let x = pos[0];\n    let y = pos[1]\n    if (x < 0) {\n        wrappedPos = [500, 0];\n    } else if (x > 500) {\n        wrappedPos = [0, y];\n    } else if (y < 0) {\n        wrappedPos = [x, 400];\n    } else if (y > 400) {\n        wrappedPos = [x, 0];\n    }\n    return wrappedPos[0] === 0 && wrappedPos[1] === 0 ? pos : wrappedPos;\n}\n\nGame.prototype.checkCollisions = function(){\n    for (let i =0; i< this.asteroids.length; i++){\n        for(let j=i+1; j< this.asteroids.length; j++){\n            // if (this.asteroids[i].isCollidedWith(this.asteroids[j])){ \n            //     alert(\"COLLISION\")\n            // }\n        }\n    }\n}\n\nGame.prototype.remove = function(asteroid) {\n\n};\n\nGame.prototype.step = function (){\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nfunction Gameview(ctx, game){\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameview.prototype.start = function start(){\n    setInterval( () => {\n        this.game.draw(this.ctx);\n        this.game.step();\n    }, 20);\n}\n\nmodule.exports = Gameview;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\nconst Gameview = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext(\"2d\");\n    const game = new Game();\n    const gameview= new Gameview(ctx, game).start();\n  \n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nfunction MovingObject (obj) {\n    this.position = obj.position; \n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n    this.game = obj.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, true);\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function () {\n    let wrappedPos = this.game.wrap(this.position)\n    this.position = wrappedPos;\n    this.position[0] += this.vel[0];\n    this.position[1] += this.vel[1];\n}\n\n// Math.hypot(x2-x1, y2-y1)\n\n\nMovingObject.prototype.isCollidedWith = function (otherObject){\n    const distance = Math.hypot(this.position[0]-otherObject.position[0],this.position[1]-otherObject.position[1]);\n    return ( distance < this.radius + otherObject.radius)\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n    if (this.isCollidedWith(otherObject)) {\n        this.game.remove(this);\n        this.game.remove(otherObject);\n    }\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n  inherits: function inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  dist(p1, p2) {\n    \n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;