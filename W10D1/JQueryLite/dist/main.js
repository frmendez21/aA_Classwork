/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOMNodeCollection)\n/* harmony export */ });\nclass DOMNodeCollection {\n    constructor (elements) {\n        this.elements = elements;\n    };\n\n    html (str) {\n        if (!str) return this.elements[0].innerHTML;\n        for (let i = 0; i < this.elements.length; i++) {\n            this.elements[i].innerHTML = str;\n        };\n    };\n\n    empty () {\n        for (let i = 0; i < this.elements.length; i++) {\n            this.elements[i].innerHTML = \"\";\n        };\n    };\n\n    append(arg) {\n        for (let i = 0; i < this.elements.length; i++) {\n            this.elements[i].innerHTML += arg;\n        };\n    };\n\n    addClass(name) {\n        for (let i = 0; i < this.elements.length; i++) {\n            this.elements[i].className = name;\n        };\n    };\n\n    removeClass(name) {\n        if (!name) {\n            for (let i = 0; i < this.elements.length; i++) {\n                this.elements[i].className = \"\";\n            };\n        } else {\n            for (let i = 0; i < this.elements.length; i++) {\n                if (this.elements[i].className === name) {\n                    this.elements[i].className = \"\";\n                }\n            };\n        }\n    };\n\n    attr(name, value) {\n        if (!value) return this.elements[0].getAttribute(name);\n        for (let i = 0; i < this.elements.length; i++) {\n            this.elements[i].setAttribute(name, value);\n        };\n    };\n\n    children() {\n        let childrenArr = [];\n        for (let i = 0; i < this.elements.length; i++) {\n            childrenArr.push(this.elements[i].children);\n        };\n        return new DOMNodeCollection(childrenArr);\n    }\n};\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n\nwindow.$1 = (arg) => {\n    \n    let nodeList = document.querySelectorAll(arg);\n    let array = Array.from(nodeList)\n   \n    if (array[0] instanceof HTMLElement) {\n        return new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__.default(array);\n    } \n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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