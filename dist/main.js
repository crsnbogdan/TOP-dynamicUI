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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./slideimg1.jpg */ \"./src/slideimg1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./slideimg2.jpg */ \"./src/slideimg2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./slideimg3.jpg */ \"./src/slideimg3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./slideimg4.jpg */ \"./src/slideimg4.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: aliceblue;\\r\\n    max-width: 100vw;\\r\\n}\\r\\n\\r\\n.navlink a {\\r\\n    color: black;\\r\\n    display: inline-block;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.navigation .navlink,\\r\\n.navigation .navlink>a {\\r\\n    width: 115px;\\r\\n    text-decoration: none;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n    width: 100vw;\\r\\n}\\r\\n\\r\\n\\r\\n/*Desktop Top Navigation*/\\r\\n\\r\\n@media only screen and (min-width: 1024px) {\\r\\n    .navigation {\\r\\n        padding: 20px 0;\\r\\n        background-color: white;\\r\\n        display: flex;\\r\\n        justify-content: space-around;\\r\\n    }\\r\\n    .navigation img.navlogo {\\r\\n        width: 50px;\\r\\n    }\\r\\n    .navlist {\\r\\n        display: flex!important;\\r\\n    }\\r\\n    img.hamburgeropenbtn,\\r\\n    img.hamburgerclosebtn {\\r\\n        display: none;\\r\\n    }\\r\\n    .navlink {\\r\\n        width: 70px;\\r\\n        text-align: center;\\r\\n        padding: 5px 20px;\\r\\n    }\\r\\n    .navigation .navlist {\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n    }\\r\\n    .navlist>.navitem {\\r\\n        margin: 10px 20px;\\r\\n    }\\r\\n    .navitem-submenu>ul.submenu {\\r\\n        display: none;\\r\\n        position: absolute;\\r\\n        margin-left: -20px;\\r\\n        background-color: white;\\r\\n    }\\r\\n    .navitem-submenu.navlink img {\\r\\n        margin-left: 5px;\\r\\n        height: 15px;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n/* Mobile Top Navigation*/\\r\\n\\r\\n@media only screen and (max-width: 1024px) {\\r\\n    .navigation {\\r\\n        width: 100vw;\\r\\n        padding: 20px 0;\\r\\n        background-color: white;\\r\\n        display: flex;\\r\\n        justify-content: space-between;\\r\\n        align-items: center;\\r\\n    }\\r\\n    .navigation img.navlogo {\\r\\n        width: 70px;\\r\\n        margin-left: 50px;\\r\\n    }\\r\\n    .navigation img.hamburgeropenbtn {\\r\\n        float: right;\\r\\n        width: 40px;\\r\\n        margin-right: 40px;\\r\\n    }\\r\\n    .navlist {\\r\\n        box-sizing: border-box;\\r\\n        position: absolute;\\r\\n        display: none;\\r\\n        top: 0;\\r\\n        right: 0vw;\\r\\n        height: 100vh!important;\\r\\n        width: 50vw;\\r\\n        background-color: white;\\r\\n        padding: 50px;\\r\\n    }\\r\\n    img.dropdown-icon {\\r\\n        height: 30px;\\r\\n    }\\r\\n    .navlink {\\r\\n        font-size: 20px;\\r\\n        margin: 20px 0px;\\r\\n    }\\r\\n    .submenu {\\r\\n        display: none;\\r\\n    }\\r\\n    .navitem-submenu>a {\\r\\n        display: flex;\\r\\n    }\\r\\n    .submenu-item.navlink {\\r\\n        margin-left: 30px;\\r\\n    }\\r\\n    .hamburgeropenbtn {\\r\\n        height: 25px;\\r\\n        width: 25px;\\r\\n    }\\r\\n    .hamburgerclosebtn {\\r\\n        height: 25px;\\r\\n        float: right;\\r\\n        align-self: flex-start;\\r\\n        margin-bottom: 50px;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n/*Desktop Slider*/\\r\\n\\r\\n.slider-container {\\r\\n    position: relative;\\r\\n    height: 80vh;\\r\\n    width: 100%;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\ndiv.slide {\\r\\n    margin-left: 0;\\r\\n    position: absolute;\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    background-size: 100% 200%;\\r\\n    background-position: center;\\r\\n    z-index: 1;\\r\\n    transition-duration: 500ms;\\r\\n}\\r\\n\\r\\n.slide-one {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.slide-two {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n.slide-three {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n}\\r\\n\\r\\n.slide-four {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n}\\r\\n\\r\\n.slider-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\ndiv.sliderbuttons {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    z-index: 10;\\r\\n}\\r\\n\\r\\n.sliderbuttons button {\\r\\n    border: none;\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.sliderbuttons button:focus {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.sliderarrow {\\r\\n    height: 50px;\\r\\n    margin: 25px;\\r\\n    filter: invert(1);\\r\\n}\\r\\n\\r\\n\\r\\n/*\\r\\n.slide.previous {\\r\\n    z-index: 2;\\r\\n}\\r\\n\\r\\n.slide.current {\\r\\n    z-index: 4;\\r\\n}\\r\\n\\r\\n.slide.next {\\r\\n    z-index: 3;\\r\\n}\\r\\n*/\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _src_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/logo.png */ \"./src/logo.png\");\n/* harmony import */ var _src_dropdown_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/dropdown-icon.png */ \"./src/dropdown-icon.png\");\n/* harmony import */ var _src_hamburgermenu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/hamburgermenu.png */ \"./src/hamburgermenu.png\");\n/* harmony import */ var _src_hamburgerclose_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hamburgerclose.png */ \"./src/hamburgerclose.png\");\n/* harmony import */ var _src_left_arrow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/left-arrow.png */ \"./src/left-arrow.png\");\n/* harmony import */ var _src_right_arrow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/right-arrow.png */ \"./src/right-arrow.png\");\n\n\n\n\n\n\n\n\n\n\nconst DOMLogo = document.querySelector(\".navlogo\");\nDOMLogo.src = _src_logo_png__WEBPACK_IMPORTED_MODULE_1__;\nconst DOMDropdownIconArray = [...document.querySelectorAll(\".dropdown-icon\")];\nDOMDropdownIconArray.forEach((icon) => (icon.src = _src_dropdown_icon_png__WEBPACK_IMPORTED_MODULE_2__));\nconst DOMHamburgerMenu = document.querySelector(\".hamburgeropenbtn\");\nDOMHamburgerMenu.src = _src_hamburgermenu_png__WEBPACK_IMPORTED_MODULE_3__;\nconst DOMHamburgerClose = document.querySelector(\".hamburgerclosebtn\");\nDOMHamburgerClose.src = _src_hamburgerclose_png__WEBPACK_IMPORTED_MODULE_4__;\n\nconst DOMPreviousSlide = document.querySelector(\".left-arrow\");\nDOMPreviousSlide.src = _src_left_arrow_png__WEBPACK_IMPORTED_MODULE_5__;\nconst DOMNextSlide = document.querySelector(\".right-arrow\");\nDOMNextSlide.src = _src_right_arrow_png__WEBPACK_IMPORTED_MODULE_6__;\n\n//navigation\n(function() {\n    const navSubmenuLink = [\n        ...document.querySelectorAll(\".navitem.navitem-submenu.navlink\"),\n    ];\n\n    navSubmenuLink.forEach((submenu) => {\n        submenu.addEventListener(\"click\", () => {\n            let submenuList = submenu.querySelector(\"ul.submenu\");\n            if (submenuList.getAttribute(\"class\").includes(\"hovered\")) {\n                return (\n                    (submenuList.style.display = \"none\"),\n                    submenuList.classList.remove(\"hovered\")\n                );\n            }\n\n            if (!submenuList.getAttribute(\"class\").includes(\"hovered\")) {\n                submenuList.style.display = \"block\";\n                submenuList.classList.add(\"hovered\");\n                window.addEventListener(\"click\", (e) => {\n                    if (!submenu.innerText.includes(e.path[0].innerText)) {\n                        submenuList.style.display = \"none\";\n                        submenuList.classList.remove(\"hovered\");\n                    }\n                });\n            }\n        });\n    });\n\n    const navCloseBtn = document.querySelector(\".hamburgerclosebtn\");\n    const navOpenBtn = document.querySelector(\".hamburgeropenbtn\");\n    const mobileNavigation = document.querySelector(\".navlist\");\n    navOpenBtn.addEventListener(\"click\", () => {\n        mobileNavigation.style.display = \"block\";\n    });\n\n    navCloseBtn.addEventListener(\"click\", () => {\n        mobileNavigation.style.display = \"none\";\n    });\n})();\n\n//slider\nconst sliderComponent = (function() {\n    let slides = [...document.querySelectorAll(\".slide\")];\n    slides.find((slide) => slide.classList.contains(\"previous\")).style.zIndex =\n        \"2\";\n    slides.find((slide) => slide.classList.contains(\"current\")).style.zIndex =\n        \"4\";\n    slides.find((slide) => slide.classList.contains(\"next\")).style.zIndex = \"3\";\n\n    function goToNextSlide() {\n        slides = [...document.querySelectorAll(\".slide\")];\n        let previousSlideIndex = slides.findIndex((slide) =>\n            slide.classList.contains(\"previous\")\n        );\n        let currentSlideIndex = slides.findIndex((slide) =>\n            slide.classList.contains(\"current\")\n        );\n        let nextSlideIndex = slides.findIndex((slide) =>\n            slide.classList.contains(\"next\")\n        );\n        slides[currentSlideIndex].style.zIndex = \"4\";\n        slides[nextSlideIndex].style.zIndex = \"3\";\n        slides[previousSlideIndex].style.zIndex = \"2\";\n        slides[nextSlideIndex].classList.replace(\"next\", \"current\");\n        if (nextSlideIndex + 1 > slides.length - 1) {\n            slides[0].classList.add(\"next\");\n        } else {\n            slides[nextSlideIndex + 1].classList.add(\"next\");\n        }\n        slides[currentSlideIndex].classList.replace(\"current\", \"previous\");\n        slides[previousSlideIndex].classList.remove(\"previous\");\n        setTimeout(function() {\n            slides[currentSlideIndex].style.marginLeft = \"-100vw\";\n            slides.find((slide) =>\n                slide.classList.contains(\"previous\")\n            ).style.zIndex = \"2\";\n        }, 250);\n        setTimeout(function() {\n            slides.find((slide) => slide.classList.contains(\"next\")).style.zIndex =\n                \"3\";\n            slides.find((slide) => slide.classList.contains(\"current\")).style.zIndex =\n                \"4\";\n            slides.find((slide) =>\n                slide.classList.contains(\"previous\")\n            ).style.zIndex = \"2\";\n        }, 500);\n        setTimeout(function() {\n            slides[currentSlideIndex].style.marginLeft = \"0\";\n        }, 750);\n    }\n\n    function goToPreviousSlide() {\n        slides = [...document.querySelectorAll(\".slide\")];\n        let previousSlideIndex = slides.findIndex((slide) =>\n            slide.classList.contains(\"previous\")\n        );\n        let currentSlideIndex = slides.findIndex((slide) =>\n            slide.classList.contains(\"current\")\n        );\n        let nextSlideIndex = slides.findIndex((slide) =>\n            slide.classList.contains(\"next\")\n        );\n        slides[currentSlideIndex].style.zIndex = \"5\";\n        slides[previousSlideIndex].style.zIndex = \"4\";\n        slides[nextSlideIndex].style.zIndex = \"2\";\n        slides[previousSlideIndex].classList.replace(\"previous\", \"current\");\n        slides[currentSlideIndex].classList.replace(\"current\", \"next\");\n        slides[nextSlideIndex].classList.remove(\"next\");\n        if (previousSlideIndex === 0) {\n            slides[slides.length - 1].classList.add(\"previous\");\n        } else {\n            slides[previousSlideIndex - 1].classList.add(\"previous\");\n        }\n\n        setTimeout(function() {\n            slides.find((slide) =>\n                slide.classList.contains(\"next\")\n            ).style.marginLeft = \"100vw\";\n        }, 250);\n        setTimeout(function() {\n            slides.find((slide) => slide.classList.contains(\"next\")).style.zIndex =\n                \"3\";\n            slides.find((slide) => slide.classList.contains(\"current\")).style.zIndex =\n                \"4\";\n            slides.find((slide) =>\n                slide.classList.contains(\"previous\")\n            ).style.zIndex = \"2\";\n        }, 500);\n        setTimeout(function() {\n            slides.find((slide) =>\n                slide.classList.contains(\"next\")\n            ).style.marginLeft = \"0\";\n        }, 750);\n    }\n    const DOMNextSlideButton = document.querySelector(\".next-slide\");\n    const DOMPreviousSlideButton = document.querySelector(\".previous-slide\");\n    DOMNextSlideButton.addEventListener(\"click\", () => goToNextSlide());\n    DOMPreviousSlideButton.addEventListener(\"click\", () => goToPreviousSlide());\n    return { goToNextSlide }\n})();\n(function loopSlides() {\n    let x = 0;\n    setInterval(function() {\n        if (x === 0) {\n            sliderComponent.goToNextSlide();\n        }\n    }, 5000)\n})();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/dropdown-icon.png":
/*!*******************************!*\
  !*** ./src/dropdown-icon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2cba29098a4c37af7dfd.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/dropdown-icon.png?");

/***/ }),

/***/ "./src/hamburgerclose.png":
/*!********************************!*\
  !*** ./src/hamburgerclose.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"49594d6ab098e1cb84a8.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/hamburgerclose.png?");

/***/ }),

/***/ "./src/hamburgermenu.png":
/*!*******************************!*\
  !*** ./src/hamburgermenu.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43f30230284474275d4a.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/hamburgermenu.png?");

/***/ }),

/***/ "./src/left-arrow.png":
/*!****************************!*\
  !*** ./src/left-arrow.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"caf84883e90758fbac86.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/left-arrow.png?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d1563c64b0ba93a1283.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/logo.png?");

/***/ }),

/***/ "./src/right-arrow.png":
/*!*****************************!*\
  !*** ./src/right-arrow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6794df218cf29a84f779.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/right-arrow.png?");

/***/ }),

/***/ "./src/slideimg1.jpg":
/*!***************************!*\
  !*** ./src/slideimg1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f826c7b6ebd2dd697ba5.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/slideimg1.jpg?");

/***/ }),

/***/ "./src/slideimg2.jpg":
/*!***************************!*\
  !*** ./src/slideimg2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c1928f308a72330d797.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/slideimg2.jpg?");

/***/ }),

/***/ "./src/slideimg3.jpg":
/*!***************************!*\
  !*** ./src/slideimg3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f295a38426f06ea65ea2.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/slideimg3.jpg?");

/***/ }),

/***/ "./src/slideimg4.jpg":
/*!***************************!*\
  !*** ./src/slideimg4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cdcb69953a396d7ba53.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/slideimg4.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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