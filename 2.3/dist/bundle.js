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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDOM: () => (/* binding */ createDOM),\n/* harmony export */   vdom: () => (/* binding */ vdom)\n/* harmony export */ });\n// html을 객체로 만들고 -> 객체를 DOM으로 만든다\n\n// 1. 객체(가짜 DOM)\nvar vdom = {\n  tag: 'p',\n  // 배열은 이름을 가질 수 없으니까 객체로\n  props: {},\n  // 자식 요소가 n개 있을 수 있으니까 배열\n  children: [{\n    tag: 'h1',\n    props: {},\n    children: ['React 만들기']\n  }, {\n    tag: 'ul',\n    props: {},\n    children: [{\n      tag: 'li',\n      props: {},\n      children: ['첫 번째 아이템']\n    }, {\n      tag: 'li',\n      props: {},\n      children: ['두 번째 아이템']\n    }, {\n      tag: 'li',\n      props: {},\n      children: ['세 번째 아이템']\n    }]\n  }]\n};\n\n// 2. 객체를 입력으로 받아서 DOM으로 변환하는 함수, DOM 만들기\n// createDOM\n\nvar createDOM = function createDOM(node) {\n  // children 안에 children이 문자열이면 문자열 DOM을 만들어서 return 해주기\n  if (typeof node === 'string') {\n    return document.createTextNode(node);\n  }\n  // 태그 만들기\n  var element = document.createElement(node.tag);\n\n  // children 렌더링해주기\n  node.children.map(createDOM).forEach(element.appendChild.bind(element));\n  return element;\n};\n\n// 3. UI에 보여주기\ndocument.querySelector('#root').appendChild(createDOM(vdom));\n\n//# sourceURL=webpack://react/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;