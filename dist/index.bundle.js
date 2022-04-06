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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/ico-refresh.svg */ \"./src/assets/images/icons/ico-refresh.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/ico-enter.svg */ \"./src/assets/images/icons/ico-enter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/ico-three-dots.svg */ \"./src/assets/images/icons/ico-three-dots.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/ico-trash.svg */ \"./src/assets/images/icons/ico-trash.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Custom properties */\\n\\n:root {\\n  /* Colors */\\n  --clr-white: #fff;\\n  --clr-light: #fffeca;\\n  --clr-dark: #545862;\\n  --clr-text-gray: rgb(182, 181, 181);\\n\\n  /* font-families */\\n  --ff-sans: 'Open Sans', sans-serif;\\n}\\n\\n/* RESET */\\n\\n/* Box sizing rules */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/* Remove default link style */\\na {\\n  color: unset;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n/* Remove default margin */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nfigure,\\nblockquote,\\ndl,\\ndd {\\n  margin: 0;\\n}\\n\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\nul,\\nol {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/* Set core root defaults */\\nhtml:focus-within {\\n  scroll-behavior: smooth;\\n}\\n\\n/* Set core body defaults */\\nbody {\\n  min-height: 100vh;\\n  text-rendering: optimizeSpeed;\\n  line-height: 1.5;\\n  font-family: var(--ff-sans);\\n  background-color: var(--clr-body-bg);\\n}\\n\\n/* A elements that don't have a class get default styles */\\na:not([class]) {\\n  text-decoration-skip-ink: auto;\\n}\\n\\n/* Make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* Inherit fonts for inputs and buttons */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\ntextarea:focus,\\ninput:focus {\\n  outline: none;\\n}\\n\\n/* Remove default button styles */\\nbutton,\\ninput[type='submit'],\\ninput[type='reset'] {\\n  background: none;\\n  color: inherit;\\n  border: none;\\n  padding: 0;\\n  font: inherit;\\n  cursor: pointer;\\n  outline: inherit;\\n}\\n\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\n@media (prefers-reduced-motion: reduce) {\\n  html:focus-within {\\n    scroll-behavior: auto;\\n  }\\n\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n\\n/* Utility classes */\\n\\n.flex {\\n  display: flex;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.grid {\\n  display: grid;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.column {\\n  flex-direction: column !important;\\n}\\n\\n.nav {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n  flex-wrap: wrap;\\n  gap: var(--gap, 1rem);\\n  list-style: none;\\n  font-family: var(--ff-sans);\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 1rem;\\n  line-height: 1.25rem;\\n  text-align: center;\\n  color: var(--clr-text-secondary);\\n  width: 100%;\\n}\\n\\n.btn {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.hidden {\\n  display: none !important;\\n}\\n\\n.icon {\\n  max-width: 24px;\\n  max-height: 24px;\\n}\\n\\n.icon--refresh {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  min-width: 24px;\\n}\\n\\n.icon--enter {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  min-width: 24px;\\n}\\n\\n.icon--dots {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  min-width: 24px;\\n}\\n\\n.icon--trash {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  min-width: 24px;\\n}\\n\\n.container {\\n  width: 75%;\\n  align-items: center;\\n  justify-content: center;\\n  background: var(--clr-white);\\n  box-shadow: 0 15px 39px -8px rgba(0, 0, 0, 0.35);\\n  -webkit-box-shadow: 0 15px 39px -8px rgba(0, 0, 0, 0.35);\\n  -moz-box-shadow: 0 15px 39px -8px rgba(0, 0, 0, 0.35);\\n  margin: 0 auto;\\n}\\n\\n.active {\\n  background: var(--clr-light);\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n  color: rgb(148, 148, 148);\\n}\\n\\n.container__header {\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 1.25rem;\\n}\\n\\n.container__header h1 {\\n  font-size: 1.25rem;\\n  font-weight: 500;\\n}\\n\\n.btn > svg {\\n  width: 1.25rem;\\n}\\n\\n.add__task {\\n  width: 100%;\\n  align-items: center;\\n  padding: 1.25rem;\\n}\\n\\n.add__task > input {\\n  border: 0;\\n  width: 100%;\\n  padding: 0.5rem;\\n  font-style: italic;\\n}\\n\\n.add__task > input::placeholder {\\n  color: var(--clr-text-gray);\\n  font-weight: 400;\\n}\\n\\n.list__item {\\n  display: inline-flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  width: 100%;\\n  gap: 1rem;\\n  padding: 0 1.25rem;\\n}\\n\\n.nav--list > li {\\n  width: 100%;\\n}\\n\\n.list__item input[type='text'] {\\n  width: 100%;\\n  font-size: 1rem;\\n  font-weight: 400;\\n  text-align: start;\\n  padding: 1.25rem;\\n  border: none;\\n}\\n\\n.clear {\\n  border-top: 1px solid #ccc;\\n  width: 100%;\\n  padding: 1rem 1rem 0 1rem;\\n}\\n\\n.clear button {\\n  width: 100%;\\n  color: var(--clr-text-gray);\\n  padding: 1.25rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n\n\n\nconst task = new _modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntask.render();\ntask.addTask();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formAction = (addTask, taskArray) => {\n  const form = document.querySelector('.add__task');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const [desc] = form.elements;\n    if (desc.value.trim()) {\n      const taskData = {\n        description: desc.value.trim(),\n        completed: false,\n        index: taskArray.length,\n      };\n      addTask(taskData);\n      desc.value = '';\n      window.location.reload();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formAction);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/functionalities.js":
/*!****************************************!*\
  !*** ./src/modules/functionalities.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deletTask\": () => (/* binding */ deletTask),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"editTasks\": () => (/* binding */ editTasks),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\nconst listContainer = document.querySelector('.nav--list');\nlet deletedTask = false;\n\nconst displayTasks = (tasks, container) => {\n  tasks.forEach((task) => {\n    const taskElement = `<li data-id=\"${task.index}\">\n                    <div class=\"list__item\">\n                        <input class=\"checkBox\" type=\"checkbox\" id=${task.index} name=${task.description} value=${task.description}>\n                        <input type=\"text\" id=\"${task.index}\" value=\"${task.description}\">\n                        <button type=\"button\"  class=\"btn\" data-id=\"${task.index}\">\n                            <i class=\"icon icon--dots\"></i>\n                            <i class=\"icon icon--trash hidden\"></i>\n                        </button>\n                    </div>\n                </li>`;\n    container.innerHTML += taskElement;\n  });\n};\n\nconst removeTask = (taskArray, addTask, id) => {\n  const index = parseInt(id, 10);\n  taskArray.splice(index, 1);\n  taskArray.forEach((task, i) => {\n    task.index = i;\n  });\n  addTask();\n  window.location.reload();\n};\n\nconst deletTask = () => {\n  const delIcons = document.querySelectorAll('.icon--trash');\n  delIcons.forEach((delIcon) => {\n    delIcon.addEventListener('mousedown', () => {\n      deletedTask = true;\n    });\n  });\n};\n\nconst editTasks = (tasks, addTask) => {\n  const inputs = listContainer.querySelectorAll('input[type=\"text\"]');\n  let newDesc = '';\n\n  inputs.forEach((item) => {\n    item.addEventListener('focusin', () => {\n      const li = item.parentElement;\n      const iconDots = li.querySelector('.icon--dots');\n      const iconTrash = li.querySelector('.icon--trash');\n      iconTrash.classList.remove('hidden');\n      iconDots.classList.add('hidden');\n      li.classList.add('active');\n      item.classList.add('active');\n      item.addEventListener('input', () => {\n        newDesc = item.value;\n      });\n    });\n\n    item.addEventListener('focusout', () => {\n      const li = item.parentElement.parentNode;\n      const div = li.querySelector('.list__item');\n      const iconDots = li.querySelector('.icon--dots');\n      const iconTrash = li.querySelector('.icon--trash');\n      iconTrash.classList.add('hidden');\n      iconDots.classList.remove('hidden');\n      div.classList.remove('active');\n      item.classList.remove('active');\n      const index = item.getAttribute('id');\n      if (!deletedTask) {\n        if (newDesc.trim()) {\n          tasks[index].description = newDesc.trim();\n          addTask();\n        }\n      } else {\n        removeTask(tasks, addTask, index);\n      }\n\n      newDesc = '';\n      deletedTask = false;\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/functionalities.js?");

/***/ }),

/***/ "./src/modules/interactives.js":
/*!*************************************!*\
  !*** ./src/modules/interactives.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCompleted\": () => (/* binding */ checkCompleted),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted),\n/* harmony export */   \"markCompleted\": () => (/* binding */ markCompleted)\n/* harmony export */ });\nconst clearAllCompleted = (tasksArray) => {\n  const clearAllBtn = document.querySelector('.clear--all');\n  clearAllBtn.addEventListener('click', () => {\n    tasksArray = tasksArray.filter((task) => task.completed === false);\n    tasksArray.forEach((task, i) => {\n      task.index = i;\n    });\n    localStorage.setItem('TASKS', JSON.stringify(tasksArray));\n    window.location.reload();\n  });\n};\n\nconst markCompleted = (tasksArray, addTask) => {\n  const checkBoxes = document.querySelectorAll('input[type=\"checkbox\"]');\n  checkBoxes.forEach((checkBox) => {\n    checkBox.addEventListener('change', () => {\n      const liElement = checkBox.parentNode.parentElement;\n      const input = liElement.querySelector('input[type=\"text\"]');\n      const index = parseInt(input.getAttribute('id'), 10);\n      if (checkBox.checked) {\n        input.classList.add('completed');\n        tasksArray[index].completed = true;\n        addTask();\n      } else {\n        input.classList.remove('completed');\n        tasksArray[index].completed = false;\n        addTask();\n      }\n    });\n  });\n};\n\nconst checkCompleted = (tasksArray) => {\n  const checkBoxes = document.querySelectorAll('input[type=\"checkbox\"]');\n  checkBoxes.forEach((checkBox) => {\n    const index = checkBox.getAttribute('id');\n    const liElement = checkBox.parentNode.parentElement;\n    const input = liElement.querySelector('input[type=\"text\"]');\n    if (tasksArray[index].completed) {\n      checkBox.checked = true;\n      input.classList.add('completed');\n    }\n  });\n};\n\nconst clearAll = () => {\n  const btnRefresh = document.querySelector('.btn--refresh');\n  btnRefresh.addEventListener('click', () => {\n    localStorage.removeItem('TASKS');\n    window.location.reload();\n  });\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/interactives.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/modules/form.js\");\n/* harmony import */ var _interactives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactives.js */ \"./src/modules/interactives.js\");\n/* harmony import */ var _functionalities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionalities.js */ \"./src/modules/functionalities.js\");\n\n\n\n\n\nconst listContainer = document.querySelector('.nav--list');\n\nclass Task {\n  constructor() {\n    this.taskArray = JSON.parse(localStorage.getItem('TASKS')) || [];\n  }\n\n  render = () => {\n    (0,_form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.addTask, this.taskArray);\n\n    (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(this.taskArray, listContainer);\n\n    (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_2__.editTasks)(this.taskArray, this.addTask);\n    (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_2__.deletTask)(this.taskArray, this.addTask);\n\n    (0,_interactives_js__WEBPACK_IMPORTED_MODULE_1__.clearAllCompleted)(this.taskArray);\n\n    (0,_interactives_js__WEBPACK_IMPORTED_MODULE_1__.markCompleted)(this.taskArray, this.addTask);\n\n    (0,_interactives_js__WEBPACK_IMPORTED_MODULE_1__.checkCompleted)(this.taskArray);\n\n    (0,_interactives_js__WEBPACK_IMPORTED_MODULE_1__.clearAll)();\n  };\n\n  addTask = (task) => {\n    if (task) {\n      this.taskArray.push(task);\n      localStorage.setItem('TASKS', JSON.stringify(this.taskArray));\n    } else {\n      localStorage.setItem('TASKS', JSON.stringify(this.taskArray));\n    }\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/assets/images/icons/ico-enter.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/ico-enter.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea07853f4a4a79c7fe93.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/ico-enter.svg?");

/***/ }),

/***/ "./src/assets/images/icons/ico-refresh.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/ico-refresh.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab9b6d2c3af70b3a2e4c.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/ico-refresh.svg?");

/***/ }),

/***/ "./src/assets/images/icons/ico-three-dots.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/ico-three-dots.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89479382d63700c4541d.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/ico-three-dots.svg?");

/***/ }),

/***/ "./src/assets/images/icons/ico-trash.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/ico-trash.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7747e0f66efb7f7a1be6.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/ico-trash.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/todo-list/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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