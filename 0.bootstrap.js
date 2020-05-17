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
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comparison\", function() { return Comparison; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequences_comparer_bg.wasm */ \"../pkg/sequences_comparer_bg.wasm\");\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\nlet cachedTextDecoder = new lTextDecoder('utf-8', {\n  ignoreBOM: true,\n  fatal: true\n});\ncachedTextDecoder.decode();\nlet cachegetUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetUint8Memory0 = new Uint8Array(_sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\nlet cachedTextEncoder = new lTextEncoder('utf-8');\nconst encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {\n  return cachedTextEncoder.encodeInto(arg, view);\n} : function (arg, view) {\n  const buf = cachedTextEncoder.encode(arg);\n  view.set(buf);\n  return {\n    read: arg.length,\n    written: buf.length\n  };\n};\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n  if (realloc === undefined) {\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = malloc(buf.length);\n    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n  }\n\n  let len = arg.length;\n  let ptr = malloc(len);\n  const mem = getUint8Memory0();\n  let offset = 0;\n\n  for (; offset < len; offset++) {\n    const code = arg.charCodeAt(offset);\n    if (code > 0x7F) break;\n    mem[ptr + offset] = code;\n  }\n\n  if (offset !== len) {\n    if (offset !== 0) {\n      arg = arg.slice(offset);\n    }\n\n    ptr = realloc(ptr, len, len = offset + arg.length * 3);\n    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n    const ret = encodeString(arg, view);\n    offset += ret.written;\n  }\n\n  WASM_VECTOR_LEN = offset;\n  return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n    cachegetInt32Memory0 = new Int32Array(_sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n  }\n\n  return cachegetInt32Memory0;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\n\n\nclass Comparison {\n  static __wrap(ptr) {\n    const obj = Object.create(Comparison.prototype);\n    obj.ptr = ptr;\n    return obj;\n  }\n\n  free() {\n    const ptr = this.ptr;\n    this.ptr = 0;\n\n    _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_comparison_free\"](ptr);\n  }\n  /**\n  * @param {string} sequence1\n  * @param {string} sequence2\n  * @returns {Comparison}\n  */\n\n\n  static new(sequence1, sequence2) {\n    var ptr0 = passStringToWasm0(sequence1, _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ptr1 = passStringToWasm0(sequence2, _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len1 = WASM_VECTOR_LEN;\n    var ret = _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comparison_new\"](ptr0, len0, ptr1, len1);\n    return Comparison.__wrap(ret);\n  }\n  /**\n  * @returns {Uint8Array}\n  */\n\n\n  diffs() {\n    _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comparison_diffs\"](8, this.ptr);\n    var r0 = getInt32Memory0()[8 / 4 + 0];\n    var r1 = getInt32Memory0()[8 / 4 + 1];\n    var v0 = getArrayU8FromWasm0(r0, r1).slice();\n\n    _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1 * 1);\n\n    return v0;\n  }\n  /**\n  * @returns {number}\n  */\n\n\n  distance() {\n    var ret = _sequences_comparer_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"comparison_distance\"](this.ptr);\n    return ret;\n  }\n\n}\nconst __wbindgen_throw = function (arg0, arg1) {\n  throw new Error(getStringFromWasm0(arg0, arg1));\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/sequences_comparer_bg.js?");

/***/ }),

/***/ "../pkg/sequences_comparer_bg.wasm":
/*!*****************************************!*\
  !*** ../pkg/sequences_comparer_bg.wasm ***!
  \*****************************************/
/*! exports provided: memory, __wbg_comparison_free, comparison_new, comparison_diffs, comparison_distance, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./sequences_comparer_bg.js */ \"../pkg/sequences_comparer_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/sequences_comparer_bg.wasm?");

/***/ }),

/***/ "./App.vue":
/*!*****************!*\
  !*** ./App.vue ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_472cff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=472cff63&scoped=true& */ \"./App.vue?vue&type=template&id=472cff63&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true& */ \"./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_472cff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_472cff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"472cff63\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./App.vue?vue&type=script&lang=js&":
/*!******************************************!*\
  !*** ./App.vue?vue&type=script&lang=js& ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true&":
/*!***************************************************************************!*\
  !*** ./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_472cff63_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./App.vue?vue&type=template&id=472cff63&scoped=true&":
/*!************************************************************!*\
  !*** ./App.vue?vue&type=template&id=472cff63&scoped=true& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=472cff63&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=template&id=472cff63&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_472cff63_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./App.vue?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./App.vue\");\n\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n  components: {\n    App: _App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequences_comparer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequences-comparer */ \"../pkg/sequences_comparer.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  data: () => ({\n    comparison: null,\n    referenceString: '',\n    references: null,\n    partContainers: [],\n    countries: {},\n    country1: '',\n    country2: '',\n    sequences1: [],\n    sequences2: [],\n    sequence1: '',\n    sequence2: '',\n    distance: ''\n  }),\n  created: async function () {\n    await fetch('references.csv').then(response => response.text()).then(text => this.referenceString = text);\n    this.references = this.referenceString.split('\\n');\n\n    for (const [idx, ref] of this.references.entries()) {\n      if (ref === this.references[0]) continue;\n      const country = ref.split(',')[2];\n      this.countries[country] = this.countries[country] || [];\n      this.countries[country].push(idx);\n    }\n\n    this.$forceUpdate();\n  },\n  methods: {\n    onOption: function (option, val) {\n      if (val) {\n        if (option === 'sequence1') {\n          this.sequences1 = [];\n          this.sequence1 = '';\n        } else {\n          this.sequences2 = [];\n          this.sequence2 = '';\n        }\n\n        const options = val.split(',');\n\n        for (const [idx, ref] of this.references.entries()) {\n          if (options.includes('' + idx)) {\n            option === 'sequence1' ? this.sequences1.push(ref.split('T00:00:00Z')[0]) : this.sequences2.push(ref.split('T00:00:00Z')[0]);\n          }\n        }\n\n        this.$forceUpdate();\n      }\n    },\n    onCompare: async function () {\n      const [file1, file2] = [this.sequence1.split(',')[0], this.sequence2.split(',')[0]];\n      const file1Content = await fetch('files/' + file1).then(response => response.text());\n      const file2Content = await fetch('files/' + file2).then(response => response.text());\n      const comparison = sequences_comparer__WEBPACK_IMPORTED_MODULE_0__[\"Comparison\"].new(file1Content, file2Content);\n\n      for (let nucleotide of comparison.diffs()) {\n        if (nucleotide == 0 || nucleotide == 1 || nucleotide == 255) {\n          this.partContainers.push({\n            parts: [],\n            color: nucleotide == 0 && 'green',\n            backgroundColor: nucleotide == 1 && 'back-green' || nucleotide == 255 && 'back-red'\n          });\n          continue;\n        }\n\n        this.partContainers[this.partContainers.length - 1].parts.push(String.fromCharCode(nucleotide));\n      }\n\n      this.distance = 'Distance: ' + comparison.distance();\n    }\n  },\n  watch: {\n    country1: function (val) {\n      this.onOption('sequence1', val);\n    },\n    country2: function (val) {\n      this.onOption('sequence2', val);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./App.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".elevation[data-v-472cff63] {\\n  padding: 16px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.md-layout[data-v-472cff63] {\\n  max-width: 100vh;\\n  width: 600px;\\n}\\n.md-content[data-v-472cff63] {\\n  width: 736px;\\n  max-width: 95vw;\\n  height: 83vh;\\n  overflow: auto;\\n  background: #212121;\\n  line-break: anywhere;\\n  font-family: monospace;\\n  margin: 10px;\\n  padding: 6px;\\n  max-height: 64vh;\\n}\\n.green[data-v-472cff63] {\\n  color: green;\\n}\\n.back-green[data-v-472cff63] {\\n  background-color: green;\\n}\\n.back-red[data-v-472cff63] {\\n  background-color: red;\\n}\\nh3[data-v-472cff63] {\\n  margin: 0;\\n  margin-top: 10px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./App.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=template&id=472cff63&scoped=true&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=472cff63&scoped=true& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"elevation\" },\n    [\n      _c(\"div\", { staticClass: \"md-layout md-gutter\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"md-layout-item\" },\n          [\n            _c(\n              \"md-field\",\n              [\n                _c(\"label\", { attrs: { for: \"country1\" } }, [\n                  _vm._v(\"Country\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"md-select\",\n                  {\n                    attrs: { name: \"country1\" },\n                    model: {\n                      value: _vm.country1,\n                      callback: function($$v) {\n                        _vm.country1 = $$v\n                      },\n                      expression: \"country1\"\n                    }\n                  },\n                  [\n                    _c(\"md-option\", { attrs: { value: \"\" } }),\n                    _vm._v(\" \"),\n                    _vm._l(_vm.countries, function(indexes, country) {\n                      return _c(\n                        \"md-option\",\n                        { key: country, attrs: { value: indexes.join(\",\") } },\n                        [\n                          _vm._v(\n                            \"\\n            \" + _vm._s(country) + \"\\n          \"\n                          )\n                        ]\n                      )\n                    })\n                  ],\n                  2\n                )\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"md-layout-item\" },\n          [\n            _c(\n              \"md-field\",\n              [\n                _c(\"label\", { attrs: { for: \"sequence1\" } }, [\n                  _vm._v(\"Sequence\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"md-select\",\n                  {\n                    staticClass: \"sequence\",\n                    attrs: { name: \"sequence1\" },\n                    model: {\n                      value: _vm.sequence1,\n                      callback: function($$v) {\n                        _vm.sequence1 = $$v\n                      },\n                      expression: \"sequence1\"\n                    }\n                  },\n                  _vm._l(_vm.sequences1, function(sequence) {\n                    return _c(\n                      \"md-option\",\n                      { key: sequence, attrs: { value: sequence } },\n                      [\n                        _vm._v(\n                          \"\\n            \" + _vm._s(sequence) + \"\\n          \"\n                        )\n                      ]\n                    )\n                  }),\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"md-layout md-gutter\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"md-layout-item\" },\n          [\n            _c(\n              \"md-field\",\n              [\n                _c(\"label\", { attrs: { for: \"country2\" } }, [\n                  _vm._v(\"Country\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"md-select\",\n                  {\n                    attrs: { name: \"country2\" },\n                    model: {\n                      value: _vm.country2,\n                      callback: function($$v) {\n                        _vm.country2 = $$v\n                      },\n                      expression: \"country2\"\n                    }\n                  },\n                  [\n                    _c(\"md-option\", { attrs: { value: \"\" } }),\n                    _vm._v(\" \"),\n                    _vm._l(_vm.countries, function(indexes, country) {\n                      return _c(\n                        \"md-option\",\n                        { key: country, attrs: { value: indexes.join(\",\") } },\n                        [\n                          _vm._v(\n                            \"\\n            \" + _vm._s(country) + \"\\n          \"\n                          )\n                        ]\n                      )\n                    })\n                  ],\n                  2\n                )\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"md-layout-item\" },\n          [\n            _c(\n              \"md-field\",\n              [\n                _c(\"label\", { attrs: { for: \"sequence2\" } }, [\n                  _vm._v(\"Sequence\")\n                ]),\n                _vm._v(\" \"),\n                _c(\n                  \"md-select\",\n                  {\n                    staticClass: \"sequence\",\n                    attrs: { name: \"sequence2\" },\n                    model: {\n                      value: _vm.sequence2,\n                      callback: function($$v) {\n                        _vm.sequence2 = $$v\n                      },\n                      expression: \"sequence2\"\n                    }\n                  },\n                  _vm._l(_vm.sequences2, function(sequence) {\n                    return _c(\n                      \"md-option\",\n                      { key: sequence, attrs: { value: sequence } },\n                      [\n                        _vm._v(\n                          \"\\n            \" + _vm._s(sequence) + \"\\n          \"\n                        )\n                      ]\n                    )\n                  }),\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"md-button\",\n        { staticClass: \"md-raised md-primary\", on: { click: _vm.onCompare } },\n        [_vm._v(\"Compare\")]\n      ),\n      _vm._v(\" \"),\n      _c(\"h3\", [_vm._v(_vm._s(_vm.distance))]),\n      _vm._v(\" \"),\n      _c(\n        \"md-content\",\n        { staticClass: \"md-elevation-10 md-scrollbar\" },\n        _vm._l(_vm.partContainers, function(partContainer, index) {\n          return _c(\n            \"span\",\n            {\n              key: index,\n              class: [partContainer.color, partContainer.backgroundColor]\n            },\n            [_vm._v(_vm._s(partContainer.parts.join(\"\")))]\n          )\n        }),\n        0\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./App.vue?vue&type=style&index=0&id=472cff63&lang=scss&scoped=true&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ./node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6e88fe29\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./App.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (originalModule) {\n  if (!originalModule.webpackPolyfill) {\n    var module = Object.create(originalModule); // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    Object.defineProperty(module, \"exports\", {\n      enumerable: true\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);