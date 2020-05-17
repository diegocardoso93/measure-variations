(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/sequences_comparer.js":
/*!************************************!*\
  !*** ../pkg/sequences_comparer.js ***!
  \************************************/
/*! exports provided: Comparison, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequences_comparer_bg.wasm */ \"../pkg/sequences_comparer_bg.wasm\");\n/* harmony import */ var _sequences_comparer_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequences_comparer_bg.js */ \"../pkg/sequences_comparer_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Comparison\", function() { return _sequences_comparer_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Comparison\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _sequences_comparer_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/sequences_comparer.js?");

/***/ }),

/***/ "../pkg/sequences_comparer_bg.js":
/*!***************************************!*\
  !*** ../pkg/sequences_comparer_bg.js ***!
  \***************************************/
/*! exports provided: Comparison, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comparison\", function() { return Comparison; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequences_comparer_bg.wasm */ \"../pkg/sequences_comparer_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass Comparison {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Comparison.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_comparison_free\"](ptr);\n    }\n    /**\n    * @returns {Comparison}\n    */\n    static new() {\n        var ret = _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comparison_new\"]();\n        return Comparison.__wrap(ret);\n    }\n    /**\n    * @returns {Uint8Array}\n    */\n    diffs() {\n        _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comparison_diffs\"](8, this.ptr);\n        var r0 = getInt32Memory0()[8 / 4 + 0];\n        var r1 = getInt32Memory0()[8 / 4 + 1];\n        var v0 = getArrayU8FromWasm0(r0, r1).slice();\n        _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n        return v0;\n    }\n    /**\n    * @returns {number}\n    */\n    distance() {\n        var ret = _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comparison_distance\"](this.ptr);\n        return ret;\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/sequences_comparer_bg.js?");

/***/ }),

/***/ "../pkg/sequences_comparer_bg.wasm":
/*!*****************************************!*\
  !*** ../pkg/sequences_comparer_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_comparison_free, comparison_new, comparison_diffs, comparison_distance, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./sequences_comparer_bg.js */ \"../pkg/sequences_comparer_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/sequences_comparer_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequences_comparer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequences-comparer */ \"../pkg/sequences_comparer.js\");\n\r\n\r\nconst comparison = sequences_comparer__WEBPACK_IMPORTED_MODULE_0__[\"Comparison\"].new();\r\n\r\nconsole.log(comparison.diffs(), comparison.distance());\r\nlet divComparison = document.createElement('div');\r\ndivComparison.style.width = '736px';\r\ndivComparison.style.overflow = 'auto';\r\ndivComparison.style.height = '700px';\r\ndivComparison.style.lineBreak = 'anywhere';\r\ndivComparison.style.fontFamily = 'monospace';\r\ndivComparison.style.background = 'black';\r\nlet part;\r\n\r\nfor (let nucleotide of comparison.diffs()) {\r\n  if (nucleotide == 0 || nucleotide == 1 || (nucleotide == 255)) {\r\n    part = document.createElement('span');\r\n    part.style.backgroundColor = nucleotide == 1 && 'green' || nucleotide == 255 && 'red';\r\n    part.style.color = nucleotide == 0 && 'green';\r\n    divComparison.append(part);\r\n    continue;\r\n  }\r\n\r\n  part.append(String.fromCharCode(nucleotide));\r\n}\r\n\r\ndivComparison.append(part);\r\n\r\nlet distance = document.createElement('h3');\r\ndistance.innerText = 'Distance: ' + comparison.distance();\r\ndistance.style.fontFamily = 'monospace';\r\ndocument.querySelector('#content').append(distance);\r\ndocument.querySelector('#content').append(divComparison);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);