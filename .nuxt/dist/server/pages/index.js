exports.ids = [1];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("94e0ce50", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1c78f610", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("68f30f04", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7fde003a", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav{justify-content:center}.nav li{display:inline-block;font-size:20px;margin-right:10px;margin-top:12px;font-size:15px;font-weight:700;color:#fff}.active{border-bottom:2px solid #fff}.item{display:flex;align-items:center;font-size:2.1rem;line-height:3rem;color:#fff;white-space:nowrap;mix-blend-mode:screen;filter:drop-shadow(3px -3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(1px,-1px);padding:0;margin:0}.item.shaking{-webkit-animation:shaking .2s steps(6) infinite;animation:shaking .2s steps(6) infinite}.item figcaption{padding-left:.4rem;display:inline}.item .svg-tiktok{fill:#fff;width:2.5rem;height:2.5rem}.sub{font-size:1rem;margin-top:-.3rem;padding-left:4.6rem;color:#fff}@-webkit-keyframes shaking{0%{filter:drop-shadow(3px 3px 0 cyan) drop-shadow(-3px -3px 0 red);transform:translate(1px,1px)}20%{filter:drop-shadow(-3px 3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(-2px,1px)}40%{filter:drop-shadow(3px -3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(1px,-1px)}60%{filter:drop-shadow(-3px -3px 0 cyan) drop-shadow(3px 3px 0 red);transform:translate(-1px,-1px)}80%{filter:drop-shadow(-2px 3px 0 cyan) drop-shadow(-3px 2px 0 red);transform:translate(2px)}to{filter:drop-shadow(-3px 1px 0 cyan) drop-shadow(1px -3px 0 red);transform:translate(1px,1px)}}@keyframes shaking{0%{filter:drop-shadow(3px 3px 0 cyan) drop-shadow(-3px -3px 0 red);transform:translate(1px,1px)}20%{filter:drop-shadow(-3px 3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(-2px,1px)}40%{filter:drop-shadow(3px -3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(1px,-1px)}60%{filter:drop-shadow(-3px -3px 0 cyan) drop-shadow(3px 3px 0 red);transform:translate(-1px,-1px)}80%{filter:drop-shadow(-2px 3px 0 cyan) drop-shadow(-3px 2px 0 red);transform:translate(2px)}to{filter:drop-shadow(-3px 1px 0 cyan) drop-shadow(1px -3px 0 red);transform:translate(1px,1px)}}@media (max-width:600px){.item{font-size:1.5rem;filter:drop-shadow(1.5px -1.5px 0 cyan) drop-shadow(1.5px -1.5px 0 red)}.item.shaking{-webkit-animation:none;animation:none}.item .svg-tiktok{width:1.5rem;height:1.5rem}.sub{font-size:.6rem;margin-top:-.3rem;padding-left:.6rem}}.logo{position:fixed;top:10px;left:10px;z-index:10}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav{justify-content:center}.footer{position:fixed;bottom:0;z-index:10;height:50px;background-color:#292929;width:100%;display:flex}.footer-block{width:33%;text-align:center;line-height:50px}.nav li{display:inline-block;font-size:20px;margin-right:10px;margin-top:12px;font-size:15px;font-weight:700;color:#fff}.active-menu{border-bottom:2px solid #fff}.item{display:flex;align-items:center;font-size:2.1rem;line-height:3rem;color:#fff;white-space:nowrap;mix-blend-mode:screen;filter:drop-shadow(3px -3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(1px,-1px);padding:0;margin:0}.item.shaking{-webkit-animation:shaking .2s steps(6) infinite;animation:shaking .2s steps(6) infinite}.item figcaption{padding-left:.4rem;display:inline}.item .svg-tiktok{fill:#fff;width:2.5rem;height:2.5rem}.sub{font-size:1rem;margin-top:-.3rem;padding-left:4.6rem;color:#fff}@-webkit-keyframes shaking{0%{filter:drop-shadow(3px 3px 0 cyan) drop-shadow(-3px -3px 0 red);transform:translate(1px,1px)}20%{filter:drop-shadow(-3px 3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(-2px,1px)}40%{filter:drop-shadow(3px -3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(1px,-1px)}60%{filter:drop-shadow(-3px -3px 0 cyan) drop-shadow(3px 3px 0 red);transform:translate(-1px,-1px)}80%{filter:drop-shadow(-2px 3px 0 cyan) drop-shadow(-3px 2px 0 red);transform:translate(2px)}to{filter:drop-shadow(-3px 1px 0 cyan) drop-shadow(1px -3px 0 red);transform:translate(1px,1px)}}@keyframes shaking{0%{filter:drop-shadow(3px 3px 0 cyan) drop-shadow(-3px -3px 0 red);transform:translate(1px,1px)}20%{filter:drop-shadow(-3px 3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(-2px,1px)}40%{filter:drop-shadow(3px -3px 0 cyan) drop-shadow(3px -3px 0 red);transform:translate(1px,-1px)}60%{filter:drop-shadow(-3px -3px 0 cyan) drop-shadow(3px 3px 0 red);transform:translate(-1px,-1px)}80%{filter:drop-shadow(-2px 3px 0 cyan) drop-shadow(-3px 2px 0 red);transform:translate(2px)}to{filter:drop-shadow(-3px 1px 0 cyan) drop-shadow(1px -3px 0 red);transform:translate(1px,1px)}}@media (max-width:600px){.item{font-size:1.5rem;filter:drop-shadow(1.5px -1.5px 0 cyan) drop-shadow(1.5px -1.5px 0 red)}.item.shaking{-webkit-animation:none;animation:none}.item .svg-tiktok{width:1.5rem;height:1.5rem}.sub{font-size:.6rem;margin-top:-.3rem;padding-left:.6rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("28f0d85c", content, true)

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"swiper-icons\";src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper:before{content:\"\";flex-shrink:0;order:9999}[dir=ltr] .swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-left:var(--swiper-centered-offset-before)}[dir=rtl] .swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-right:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-top:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:\"\";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(0px - var(--swiper-navigation-size)/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:8px;height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:#000;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:.2;opacity:var(--swiper-pagination-bullet-inactive-opacity,.2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:1;opacity:var(--swiper-pagination-bullet-opacity,1);background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px;margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader{-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:\"\";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile-layout{background-color:#fff;height:var(--real100vh);width:100%}.description{font-size:14px;z-index:342423423423423250000;position:absolute;bottom:10px;width:100%;height:80px}.description-box{width:calc(100% - 100px)!important;padding-left:20px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.img-fluid{max-width:100%;height:auto}.w-100{width:100%}.ml-auto,.mx-auto{margin-left:auto}.mr-auto,.mx-auto{margin-right:auto}.right-menu{position:absolute;fill:#fff;right:10px;width:50px;height:100px;bottom:50%;transform:translateY(-50%);text-align:center;z-index:10000}.right-menu .menu-element{margin-bottom:30px}.right-menu .profile{width:50px;height:50px;border-radius:50%;border:2px solid #fff;-o-object-fit:cover;object-fit:cover}*{-webkit-user-select:none;-moz-user-select:-moz-none;-o-user-select:none;user-select:none}body{overflow:hidden;background-color:#000}.hooper{height:100%}.hooper-track{margin:0;padding:0}.hooper-slide{height:var(--real100vh);font-size:30px}.error,.hooper-slide{display:flex;justify-content:center;align-items:center;color:#fff}.error{position:absolute;width:100%;height:100%;font-size:18px}.slide{display:flex;align-items:center;position:relative;left:0;top:0}.slide .background{position:absolute;width:100%;height:100%;background-size:120%;background-position:50%;opacity:.4;filter:blur(2rem);z-index:-1}.slide .author{display:flex;align-items:center;padding:3rem;position:absolute;bottom:0;left:0;z-index:9998}.slide .author .avatar{display:none;width:auto;height:145px;padding-right:2rem}.slide .author .desc,.slide .author .name{color:#fff;text-shadow:1px 1px 2px #000;padding-bottom:.5rem}.slide .author .name{font-size:2rem;letter-spacing:1px}.slide .author .date{font-size:.7rem;letter-spacing:1px;margin:.2rem 0}.slide .author .desc{max-width:50%;font-size:1.2rem}.slide html{overflow:hidden}.slide body{width:100%;height:100%;position:fixed;overflow-y:auto;-webkit-overflow-scrolling:touch}.slide :root{--real100vh:100vh}.slide video{width:auto!important;height:var(--real100vh);min-width:100%;z-index:9997;-o-object-fit:cover;object-fit:cover}.slide video::-webkit-media-controls-panel{display:none!important}.slide .progress-bar{position:absolute;top:0;left:0;height:.2rem;z-index:9998;background-color:#fff;transition:width .2s}.slide .heart-container{position:absolute;top:35px;right:10px;z-index:9998;padding:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-decoration:none}.slide .likes{color:#fff;padding:.6rem;font-size:1.2rem;text-transform:uppercase;text-shadow:1px 1px 2px #000}.slide .heart{position:relative;display:block;width:30px;height:30px;background:#fff;border-radius:0 0 0 10px;transform:rotate(-45deg);-webkit-animation:pulse 1s infinite;animation:pulse 1s infinite}.slide .heart:after,.slide .heart:before{position:absolute;content:\"\";width:30px;height:30px;background:#fff;border-radius:50%}.slide .heart:before{top:-15px;left:0}.slide .heart:after{top:0;right:-15px}.slide .controls{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10000}.slide .controls .video-play-button{background-position:0 0;cursor:pointer;transform:matrix(1,0,0,1,0,0);content:\"\";border:0 #fff;outline:0 none #fff;transform:scale(.7)}.slide .controls .video-play-button:after{height:48px;width:40px;transform:matrix(1,0,0,1,-20,-24);transform-origin:20px 24px;border-color:transparent transparent transparent #fff;border-style:solid;border-width:24px 0 24px 40px;margin:0 0 0 4.80000019073486px}.slide .controls .video-play-button:after,.slide .controls .video-play-button:before{cursor:pointer;display:block;position:absolute;content:\"\";transition:border .15s ease 0s,box-shadow .15s ease 0s}.slide .controls .video-play-button:before{box-shadow:inset 0 0 0 1.8px #fff,0 0 0 4.8px #fff,0 0 3.6px 1.8px rgba(0,0,0,.247059);height:96px;width:96px;transform:matrix(1,0,0,1,-48,-48);transform-origin:48px 48px;border:9px solid transparent;border-radius:48px 48px 48px 48px;margin:0 -64.3199996948242px -24px 0}.slide .controls .video-play-button:hover{z-index:1;transform:matrix(1,0,0,1,0,0);border:0 #fff}.slide .controls .video-play-button:hover:before{box-shadow:inset 0 0 0 4.8px #fff,0 0 0 1.8px #fff,0 0 3.6px 1.8px rgba(0,0,0,.247059);border:4px solid transparent}.scroll-down{display:none;margin-top:70px;transform:scale(.7)}.scroll-down .mouse{margin:0 auto;display:block;border-radius:50px;border:2px solid #fff;height:100px;width:50px;position:relative}.scroll-down .mouse .move{position:absolute;background-color:#fff;height:10px;width:10px;border-radius:50%;left:50%;transform:translateX(-50%);-webkit-animation:move 2s linear infinite;animation:move 2s linear infinite}@-webkit-keyframes pulse{0%,20%{transform:rotate(-45deg) scale(1)}30%{transform:rotate(-45deg) scale(1.2)}50%{transform:rotate(-45deg) scale(1)}60%{transform:rotate(-45deg) scale(1.1)}70%,to{transform:rotate(-45deg) scale(1)}}@keyframes pulse{0%,20%{transform:rotate(-45deg) scale(1)}30%{transform:rotate(-45deg) scale(1.2)}50%{transform:rotate(-45deg) scale(1)}60%{transform:rotate(-45deg) scale(1.1)}70%,to{transform:rotate(-45deg) scale(1)}}@-webkit-keyframes move{0%{transform:translate(-50%,10px);opacity:0}50%{transform:translate(-50%,40px);opacity:1}to{transform:translate(-50%,80px);opacity:0}}@keyframes move{0%{transform:translate(-50%,10px);opacity:0}50%{transform:translate(-50%,40px);opacity:1}to{transform:translate(-50%,80px);opacity:0}}@media (max-width:600px){body,html{overflow:hidden}.slide .heart-container{display:none}.slide .author{padding:1rem;display:none}.slide .author .avatar{padding-right:1rem}.slide .author .name{font-size:1rem}.slide .author .desc{font-size:.5rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".img-fluid{max-width:100%;height:auto}.w-100{width:100%}.ml-auto,.mx-auto{margin-left:auto}.mr-auto,.mx-auto{margin-right:auto}:root{font-size:10px}.item-box{position:relative;width:100%;border-radius:3px}.item-box:after{content:\"\";display:block;padding-bottom:100%}.profile-activity{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:3px}*,:after,:before{box-sizing:border-box}body{font-family:\"Open Sans\",Arial,sans-serif;min-height:var(--real100vh);background-color:#fafafa;color:#262626;padding-bottom:3rem}img{display:block}.container{max-width:93.5rem;margin:0 auto;padding:0 2rem}.btn{display:inline-block;font:inherit;background:none;border:none;color:inherit;padding:0;cursor:pointer}.btn:focus{outline:.5rem auto #4d90fe}.visually-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.gallery{display:flex;flex-wrap:wrap;margin:-1rem;padding-bottom:3rem}.gallery-item{position:relative;flex:1 0 22rem;margin:1rem;color:#fff;cursor:pointer}.gallery-item:focus .gallery-item-info,.gallery-item:hover .gallery-item-info{display:flex;justify-content:center;align-items:center;position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}.gallery-item-info{display:none}.gallery-item-info li{display:inline-block;font-size:1.7rem;font-weight:600}.gallery-item-likes{margin-right:2.2rem}.gallery-item-type{position:absolute;top:1rem;right:1rem;font-size:2.5rem;text-shadow:.2rem .2rem .2rem rgba(0,0,0,.1)}.fa-clone,.fa-comment{transform:rotateY(180deg)}.gallery-image{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.loader{width:5rem;height:5rem;border:.6rem solid;border-color:#999 #999 transparent;border-radius:50%;margin:0 auto;-webkit-animation:loader .5s linear infinite;animation:loader .5s linear infinite}@media screen and (max-width:40rem){.gallery{grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))!important;grid-gap:.5rem!important}}@-webkit-keyframes loader{to{transform:rotate(1turn)}}@keyframes loader{to{transform:rotate(1turn)}}@supports (display:grid){.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(22rem,1fr));grid-gap:2rem}}.cover-image{background-position:10% 30%;background-repeat:no-repeat;background-size:cover;height:200px;position:relative;border-bottom-left-radius:30px;border-bottom-right-radius:30px;width:100%;margin:0 auto}.cover-image img{height:125px;width:125px;-o-object-fit:cover;object-fit:cover;border-radius:50%;border:2px solid #fff;position:absolute;left:50%;transform:translate(-50%);bottom:-70px}main{margin-top:20px}.profile-section{margin-top:80px;text-align:center}.profile-section h1{color:#000}.hooper{overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6904781a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('slider')}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6904781a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=4945328d&
var Slidervue_type_template_id_4945328d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('logo',{staticClass:"logo",on:{"callPhotos":_vm.swapComponent,"callReels":_vm.openReels}}),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode(((_vm.error)?("<div class=\"error\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</div>"):"<!---->")+" "),(_vm.videos.length > 0)?_c('hooper',{ref:"sliderRef",staticStyle:{"height":"var(--real100vh)"},attrs:{"settings":_vm.sliderSettings},on:{"slide":_vm.onSlide}},_vm._l((_vm.videos),function(item,index){return _c('slide',{key:index,staticClass:"slide",attrs:{"data-username":("" + (item.model_name))}},[_c('div',{staticClass:"background",style:({
            'background-image':
              'url(' + item.poster + ')',
          })}),_vm._v(" "),(!_vm.firstPlayDone)?_c('div',{staticClass:"controls"},[_c('div',{staticClass:"video-play-button",on:{"click":_vm.onPlayClick}}),_vm._v(" "),_c('div',{staticClass:"scroll-down"},[_c('span',{staticClass:"mouse"},[_c('span',{staticClass:"move"})])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"right-menu"},[_c('div',{staticClass:"menu-element",staticStyle:{"display":"none"},on:{"click":_vm.onShare}},[_c('svg',{attrs:{"width":"40","height":"36","viewBox":"0 0 40 36","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0.262779 33.569V21.8306C0.2671 17.8293 1.81649 13.9931 4.57103 11.1637C7.32556 8.33431 11.0603 6.74282 14.9558 6.73838H22.841V4.07879C22.8411 3.41557 23.0327 2.76728 23.3915 2.21588C23.7503 1.66448 24.2602 1.23472 24.8567 0.980934C25.4532 0.727149 26.1096 0.660734 26.7429 0.790083C27.3762 0.919432 27.9579 1.23874 28.4145 1.70763L38.014 11.5662C38.9321 12.5096 39.4479 13.789 39.4479 15.123C39.4479 16.4569 38.9321 17.7363 38.014 18.6797L28.4145 28.5383C27.9579 29.0072 27.3762 29.3265 26.7429 29.4558C26.1096 29.5852 25.4532 29.5188 24.8567 29.265C24.2602 29.0112 23.7503 28.5814 23.3915 28.03C23.0327 27.4786 22.8411 26.8303 22.841 26.1671V23.5075H13.3232C10.7261 23.5102 8.23615 24.5711 6.39974 26.4574C4.56332 28.3437 3.53048 30.9014 3.52789 33.569C3.52789 34.0138 3.35589 34.4403 3.04972 34.7548C2.74356 35.0693 2.32831 35.2459 1.89533 35.2459C1.46235 35.2459 1.04711 35.0693 0.740943 34.7548C0.43478 34.4403 0.262779 34.0138 0.262779 33.569ZM26.1061 8.41529C26.1061 8.86004 25.9341 9.28657 25.6279 9.60105C25.3218 9.91553 24.9065 10.0922 24.4736 10.0922H14.9558C11.926 10.0958 9.02125 11.3336 6.87885 13.5342C4.73646 15.7348 3.53134 18.7185 3.52789 21.8306V24.7048C4.7516 23.2743 6.25832 22.1284 7.94746 21.3436C9.6366 20.5588 11.4693 20.1531 13.3232 20.1537H24.4736C24.9065 20.1537 25.3218 20.3304 25.6279 20.6449C25.9341 20.9593 26.1061 21.3859 26.1061 21.8306V26.1671L35.7039 16.3085C36.01 15.9941 36.1819 15.5676 36.1819 15.123C36.1819 14.6783 36.01 14.2518 35.7039 13.9374L26.1061 4.07879V8.41529Z","fill":"white"}})])]),_vm._v(" "),_c('div',{staticClass:"menu-element",on:{"click":function($event){return _vm.openProfile(item.model_name)}}},[_c('img',{staticClass:"profile",attrs:{"loading":"lazy","src":("" + (item.model_img))}})]),_vm._v(" "),_c('div',{staticClass:"menu-element",staticStyle:{"display":"none"},on:{"click":function($event){return _vm.onLikeReel(index)}}},[_c('svg',{attrs:{"width":"47","height":"40","viewBox":"0 0 47 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0.463837 12.5085C0.642763 11.688 0.747733 10.844 1.01374 10.0527C2.70996 5.00215 6.2193 1.88484 11.5728 0.978982C15.9994 0.229751 19.8427 1.56574 23.0694 4.61526C23.1433 4.68423 23.2185 4.75202 23.3115 4.83851C23.7052 4.48903 24.0785 4.13954 24.4722 3.81227C31.9548 -2.39548 43.6149 1.41262 45.8347 10.7763C46.6292 14.1273 45.9958 17.2715 44.5107 20.3082C42.9839 23.4314 40.8224 26.1104 38.3962 28.5953C34.2081 32.8838 29.4475 36.4757 24.3386 39.6421C23.6562 40.0652 23.0348 40.0664 22.3501 39.6433C16.4336 35.9848 10.9668 31.798 6.39345 26.5709C4.1855 24.0462 2.30081 21.3111 1.2356 18.119C0.919502 17.1722 0.776361 16.1705 0.550914 15.1945C0.531829 15.1138 0.493658 15.0367 0.463837 14.9572C0.463837 14.1414 0.463837 13.3243 0.463837 12.5085ZM43.3274 13.4541C43.2821 13.0754 43.2678 12.4255 43.1198 11.806C42.1035 7.53504 39.453 4.74267 35.0562 3.83915C30.8109 2.96719 27.3087 4.39318 24.6356 7.73258C23.8113 8.76233 22.7998 8.77987 21.9994 7.72323C19.3191 4.18513 14.6825 2.67965 10.4479 4.12902C6.30995 5.54567 3.94932 8.46661 3.39703 12.7458C3.13342 14.7866 3.63441 16.7082 4.45866 18.5596C5.86025 21.7061 8.02764 24.3267 10.436 26.7672C14.2078 30.5882 18.4877 33.8002 23.0014 36.7258C23.259 36.893 23.4236 36.8626 23.6646 36.7071C27.5234 34.2186 31.1914 31.4906 34.5481 28.3756C37.0721 26.0332 39.3851 23.512 41.1505 20.5537C42.4125 18.4392 43.2773 16.2009 43.3274 13.4541Z","fill":"white","data-id":("" + index)}})])]),_vm._v(" "),_c('div',{staticClass:"menu-element",on:{"click":_vm.onFullScreen}},[_c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37.9609 26.7543C37.5289 26.7543 37.1146 26.9259 36.8092 27.2314C36.5037 27.5368 36.3321 27.9511 36.3321 28.3831V31.6405C36.3321 32.9364 35.8173 34.1792 34.901 35.0956C33.9847 36.0119 32.7418 36.5267 31.446 36.5267H28.1885C27.7565 36.5267 27.3423 36.6983 27.0368 37.0037C26.7314 37.3092 26.5598 37.7234 26.5598 38.1554C26.5598 38.5874 26.7314 39.0016 27.0368 39.3071C27.3423 39.6125 27.7565 39.7841 28.1885 39.7841H31.446C33.605 39.7815 35.6748 38.9227 37.2015 37.3961C38.7282 35.8694 39.587 33.7995 39.5896 31.6405V28.3831C39.5896 27.9511 39.418 27.5368 39.1125 27.2314C38.8071 26.9259 38.3928 26.7543 37.9609 26.7543Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M2.12888 13.7246C2.56084 13.7246 2.97511 13.553 3.28056 13.2475C3.586 12.9421 3.7576 12.5278 3.7576 12.0958V8.83839C3.7576 7.54249 4.27239 6.29968 5.18873 5.38334C6.10507 4.467 7.34788 3.95221 8.64378 3.95221H11.9012C12.3332 3.95221 12.7475 3.78062 13.0529 3.47517C13.3584 3.16973 13.53 2.75545 13.53 2.32349C13.53 1.89152 13.3584 1.47725 13.0529 1.17181C12.7475 0.866361 12.3332 0.694763 11.9012 0.694763H8.64378C6.48475 0.697349 4.41489 1.55617 2.88822 3.08283C1.36156 4.6095 0.502739 6.67936 0.500153 8.83839L0.500153 12.0958C0.500153 12.5278 0.67175 12.9421 0.977195 13.2475C1.28264 13.553 1.69691 13.7246 2.12888 13.7246Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M11.9012 36.5267H8.6438C7.34791 36.5267 6.10509 36.0119 5.18875 35.0956C4.27242 34.1792 3.75763 32.9364 3.75763 31.6405V28.3831C3.75763 27.9511 3.58603 27.5368 3.28058 27.2314C2.97514 26.9259 2.56086 26.7543 2.1289 26.7543C1.69694 26.7543 1.28266 26.9259 0.977218 27.2314C0.671773 27.5368 0.500175 27.9511 0.500175 28.3831L0.500175 31.6405C0.502762 33.7995 1.36158 35.8694 2.88824 37.3961C4.41491 38.9227 6.48477 39.7815 8.6438 39.7841H11.9012C12.3332 39.7841 12.7475 39.6125 13.0529 39.3071C13.3584 39.0016 13.53 38.5874 13.53 38.1554C13.53 37.7234 13.3584 37.3092 13.0529 37.0037C12.7475 36.6983 12.3332 36.5267 11.9012 36.5267Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M31.446 0.694748H28.1885C27.7565 0.694748 27.3423 0.866345 27.0368 1.17179C26.7314 1.47724 26.5598 1.89151 26.5598 2.32347C26.5598 2.75544 26.7314 3.16971 27.0368 3.47516C27.3423 3.7806 27.7565 3.9522 28.1885 3.9522H31.446C32.7418 3.9522 33.9847 4.46699 34.901 5.38333C35.8173 6.29966 36.3321 7.54248 36.3321 8.83837V12.0958C36.3321 12.5278 36.5037 12.9421 36.8092 13.2475C37.1146 13.5529 37.5289 13.7245 37.9609 13.7245C38.3928 13.7245 38.8071 13.5529 39.1125 13.2475C39.418 12.9421 39.5896 12.5278 39.5896 12.0958V8.83837C39.587 6.67934 38.7282 4.60948 37.2015 3.08282C35.6748 1.55615 33.605 0.697334 31.446 0.694748V0.694748Z","fill":"white"}})])])]),_vm._v(" "),_c('video',{ref:"videoRef",refInFor:true,attrs:{"crossorigin":"anonymous","loop":"","oncontextmenu":"return false;","controlslist":"nofullscreen nodownload","preload":(index == 0? 'auto': 'none'),"playsinline":"","webkit-playsinline":"","muted":"","src":item.reel},domProps:{"muted":true},on:{"ended":function($event){return _vm.onVideoEnd(index + 1)},"play":function($event){return _vm.onVideoPlay(index + 1)},"click":_vm.onVideoClick}}),_vm._v(" "),_c('div',{staticClass:"description"},[_c('div',{staticClass:"description-box"},[_c('b',[_vm._v(_vm._s(item.model_name))]),_c('br'),_vm._v("\n                                  "+_vm._s(item.model_desc)+"\n                            ")])])])}),1):_vm._e()],2)],2)}
var Slidervue_type_template_id_4945328d_staticRenderFns = []


// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=4945328d&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(36);

// EXTERNAL MODULE: external "vue2-timeago"
var external_vue2_timeago_ = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=8bde1cec&
var Logovue_type_template_id_8bde1cec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div style=\"display: flex; width: calc(100vw - 30px);\"><div style=\"width: 100px;\"><svg width=\"100\" height=\"50\" viewBox=\"0 0 310 79\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.8787 44.6095V52.1009C25.8787 53.463 26.9003 54.4845 28.2623 54.4845C29.6244 54.4845 30.646 53.463 30.646 52.1009V44.6095C31.6675 43.9285 32.1783 42.7367 32.1783 41.5449C32.1783 39.3315 30.4757 37.6289 28.2623 37.6289C26.049 37.6289 24.3464 39.3315 24.3464 41.5449C24.1761 42.7367 24.8572 43.7582 25.8787 44.6095Z\" fill=\"white\"></path> <path d=\"M86.1508 0.340517H76.6164C63.3362 0.340517 52.6099 11.5776 52.6099 25.1983V53.972C52.6099 64.8685 44.097 73.5517 33.7112 73.5517H24.1767C13.6207 73.5517 5.10776 64.6983 5.10776 53.8017V2.72414C5.10776 1.19181 3.91595 0 2.55388 0C1.19181 0 0 1.19181 0 2.72414V53.972C0 67.7629 10.7263 78.8297 24.0065 78.8297H33.5409C46.8211 78.8297 57.5474 67.5927 57.5474 53.972V25.1983C57.5474 14.3017 66.0603 5.61853 76.4461 5.61853H85.9806C96.3664 5.61853 104.879 14.472 104.879 25.1983V75.7651C104.879 77.2974 106.071 78.4892 107.433 78.4892C108.795 78.4892 109.987 77.2974 109.987 75.7651V25.1983C110.157 11.4073 99.431 0.340517 86.1508 0.340517Z\" fill=\"white\"></path> <path d=\"M185.755 73.5517H154.768C144.382 73.5517 135.869 64.6983 135.869 53.8017V2.72414C135.869 1.19181 134.678 0 133.316 0C131.954 0 130.762 1.19181 130.762 2.72414V53.8017C130.762 67.5927 141.488 79 154.768 79H185.755C187.117 79 188.309 77.8082 188.309 76.2759C188.309 74.7435 187.117 73.5517 185.755 73.5517Z\" fill=\"white\"></path> <path d=\"M228.488 0H225.594C210.781 0 198.863 11.9181 198.863 26.7306V51.9289C198.863 66.7414 210.781 78.6595 225.594 78.6595H228.488C243.301 78.6595 255.219 66.7414 255.219 51.9289V26.7306C255.389 11.9181 243.301 0 228.488 0ZM250.281 51.9289C250.281 63.847 240.577 73.5517 228.659 73.5517H225.764C213.846 73.5517 204.141 63.847 204.141 51.9289V26.7306C204.141 14.8125 213.846 5.10776 225.764 5.10776H228.659C240.577 5.10776 250.281 14.8125 250.281 26.7306V51.9289Z\" fill=\"white\"></path> <path d=\"M308.849 74.0625L280.927 48.0129C278.373 45.6293 276.841 42.3944 276.841 39.1595C276.841 35.9246 278.203 32.6896 280.927 30.306L308.509 4.76724C309.53 3.74569 309.7 2.0431 308.849 1.02155C307.998 -0.170259 306.465 -0.170259 305.444 0.681034L277.862 26.2198C277.522 26.5603 277.011 27.0711 276.67 27.4116V2.72414C276.67 1.19181 275.478 0 274.116 0C272.754 0 271.562 1.19181 271.562 2.72414V76.1056C271.562 77.6379 272.754 78.8297 274.116 78.8297C275.478 78.8297 276.67 77.6379 276.67 76.1056V50.9073C277.011 51.2478 277.351 51.7586 277.862 52.0991L305.784 78.1487C306.295 78.6595 306.806 78.8297 307.317 78.8297C307.998 78.8297 308.679 78.4892 309.19 77.8082C310.041 76.7866 309.871 75.084 308.849 74.0625Z\" fill=\"white\"></path></svg></div> <div style=\"width: calc(100% - 100px); display: none;\"><ul class=\"nav\"><li"+(_vm._ssrClass("menu",{'initial': _vm.activeTab !== 1, 'active': _vm.activeTab === 'reels'}))+">Reels</li> <li"+(_vm._ssrClass("menu",{'initial': _vm.activeTab !== 1, 'active': _vm.activeTab === 'photos'}))+">Photos</li></ul></div></div>")])}
var Logovue_type_template_id_8bde1cec_staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=8bde1cec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Logovue_type_script_lang_js_ = ({
  data() {
    return {
      activeTab: 'reels'
    };
  },

  methods: {
    setActiveTab(tabas) {
      let _this = this; //just for context change,
      //this can be ignored if you make                                   //this function an arrow
      //or bind the function


      _this.activeTab = tabas;
      setTimeout(() => {
        if (tabas == 'photos') {
          this.changeToPhotos();
        } else {
          this.changeToReels();
        }
      }, 500);
    },

    toggleShake() {
      this.$refs.logoRef.classList.toggle('shaking');
    },

    changeToPhotos() {
      return this.$emit('callPhotos');
    },

    changeToReels() {
      return this.$emit('callReels');
    }

  }
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Logovue_type_script_lang_js_ = (Logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js_,
  Logovue_type_template_id_8bde1cec_render,
  Logovue_type_template_id_8bde1cec_staticRenderFns,
  false,
  injectStyles,
  null,
  "403e3ebb"
  
)

/* harmony default export */ var Logo = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Photos.vue?vue&type=template&id=77bfbc94&
var Photosvue_type_template_id_77bfbc94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.error)?("<div class=\"error\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</div>"):"<!---->")+" "),_c('swiper',{attrs:{"slides-per-view":1,"space-between":0,"loop":false},on:{"slideChange":_vm.onSlideChange}},[_c('swiper-slide',[(_vm.videos.length > 0)?_c('hooper',{ref:"sliderRef",staticStyle:{"height":"var(--real100vh)"},attrs:{"settings":_vm.sliderSettings},on:{"slide":_vm.onSlide}},_vm._l((_vm.videos),function(item,index){return _c('slide',{key:index,staticClass:"slide",attrs:{"data-username":("" + (item.model_name))}},[_c('div',{staticClass:"background",style:({
            'background-image':
              'url(' + item.poster + ')',
          })}),_vm._v(" "),_c('div',{staticClass:"right-menu"},[_c('div',{staticClass:"menu-element"},[_c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M20.4389 0C16.5734 0 12.7946 1.14628 9.58048 3.29388C6.36637 5.44147 3.86128 8.49394 2.38199 12.0653C0.902695 15.6366 0.515644 19.5664 1.26978 23.3577C2.02392 27.149 3.88537 30.6315 6.61874 33.3649C9.35212 36.0983 12.8347 37.9597 16.626 38.7138C20.4173 39.468 24.347 39.0809 27.9184 37.6016C31.4897 36.1224 34.5422 33.6173 36.6898 30.4032C38.8373 27.189 39.9836 23.4103 39.9836 19.5447C39.978 14.3628 37.9171 9.39483 34.2529 5.7307C30.5888 2.06657 25.6208 0.00560457 20.4389 0V0ZM20.4389 35.8319C17.2176 35.8319 14.0686 34.8767 11.3902 33.087C8.7118 31.2974 6.62422 28.7537 5.39148 25.7776C4.15873 22.8015 3.83619 19.5266 4.46464 16.3672C5.09309 13.2078 6.6443 10.3057 8.92211 8.02787C11.1999 5.75006 14.102 4.19885 17.2614 3.5704C20.4209 2.94196 23.6957 3.2645 26.6718 4.49724C29.6479 5.72999 32.1916 7.81756 33.9813 10.496C35.7709 13.1744 36.7262 16.3234 36.7262 19.5447C36.7214 23.8629 35.0039 28.0029 31.9505 31.0563C28.8971 34.1097 24.7571 35.8272 20.4389 35.8319Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M22.7254 17.1555C21.7039 16.7942 20.0381 16.1872 19.2034 15.5326C19.1529 15.4929 19.0583 15.2549 19.1247 14.9013C19.1567 14.7316 19.3035 14.1649 19.8535 13.9991C20.7028 13.7418 21.5089 13.9108 22.0378 14.3025C22.8728 15.0629 24.1659 15.0051 24.9293 14.1719C25.6918 13.3397 25.6376 12.0486 24.8102 11.2827C24.8102 11.2827 23.8603 10.4369 22.502 10.0367V9.86795C22.502 8.73573 21.584 7.81781 20.4518 7.81781C19.3196 7.81781 18.4017 8.73573 18.4017 9.86795V10.1645C14.7166 11.5048 13.8501 16.5457 16.6733 18.7593C17.9594 19.7677 19.7973 20.4687 21.3574 21.0209C22.3738 21.3803 22.477 22.1091 22.3848 22.6573C22.2822 23.2673 21.7567 24.3021 20.438 24.3107C19.071 24.3194 18.7466 24.2693 17.7489 23.6162C16.8013 22.9962 15.5309 23.2613 14.9107 24.2088C14.2906 25.1563 14.5559 26.427 15.5033 27.0471C16.5932 27.7604 17.4564 28.1138 18.4015 28.2793V28.4766C18.4015 29.6088 19.3195 30.5267 20.4517 30.5267C21.5839 30.5267 22.5018 29.6088 22.5018 28.4766V28.0475C27.4691 26.2523 28.1281 19.0665 22.7254 17.1555Z","fill":"white"}})])]),_vm._v(" "),_c('div',{staticClass:"menu-element",on:{"click":_vm.onShare}},[_c('svg',{attrs:{"width":"40","height":"36","viewBox":"0 0 40 36","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0.262779 33.569V21.8306C0.2671 17.8293 1.81649 13.9931 4.57103 11.1637C7.32556 8.33431 11.0603 6.74282 14.9558 6.73838H22.841V4.07879C22.8411 3.41557 23.0327 2.76728 23.3915 2.21588C23.7503 1.66448 24.2602 1.23472 24.8567 0.980934C25.4532 0.727149 26.1096 0.660734 26.7429 0.790083C27.3762 0.919432 27.9579 1.23874 28.4145 1.70763L38.014 11.5662C38.9321 12.5096 39.4479 13.789 39.4479 15.123C39.4479 16.4569 38.9321 17.7363 38.014 18.6797L28.4145 28.5383C27.9579 29.0072 27.3762 29.3265 26.7429 29.4558C26.1096 29.5852 25.4532 29.5188 24.8567 29.265C24.2602 29.0112 23.7503 28.5814 23.3915 28.03C23.0327 27.4786 22.8411 26.8303 22.841 26.1671V23.5075H13.3232C10.7261 23.5102 8.23615 24.5711 6.39974 26.4574C4.56332 28.3437 3.53048 30.9014 3.52789 33.569C3.52789 34.0138 3.35589 34.4403 3.04972 34.7548C2.74356 35.0693 2.32831 35.2459 1.89533 35.2459C1.46235 35.2459 1.04711 35.0693 0.740943 34.7548C0.43478 34.4403 0.262779 34.0138 0.262779 33.569ZM26.1061 8.41529C26.1061 8.86004 25.9341 9.28657 25.6279 9.60105C25.3218 9.91553 24.9065 10.0922 24.4736 10.0922H14.9558C11.926 10.0958 9.02125 11.3336 6.87885 13.5342C4.73646 15.7348 3.53134 18.7185 3.52789 21.8306V24.7048C4.7516 23.2743 6.25832 22.1284 7.94746 21.3436C9.6366 20.5588 11.4693 20.1531 13.3232 20.1537H24.4736C24.9065 20.1537 25.3218 20.3304 25.6279 20.6449C25.9341 20.9593 26.1061 21.3859 26.1061 21.8306V26.1671L35.7039 16.3085C36.01 15.9941 36.1819 15.5676 36.1819 15.123C36.1819 14.6783 36.01 14.2518 35.7039 13.9374L26.1061 4.07879V8.41529Z","fill":"white"}})])]),_vm._v(" "),_c('div',{staticClass:"menu-element",on:{"click":_vm.openProfile}},[_c('img',{staticClass:"profile",attrs:{"src":"https://unlok.me/media/models/f6da1899a1492914ae13b987f1486d7f/small_main_pic.jpg?hash=1655828319"}})]),_vm._v(" "),_c('div',{staticClass:"menu-element"},[_c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0.500153 39.175L3.45783 29.9889C1.52993 26.9101 0.513955 23.3473 0.528081 19.714C0.528081 17.1474 1.03358 14.6059 2.01509 12.2346C2.9966 9.86331 4.43502 7.70872 6.24861 5.89383C8.06221 4.07894 10.2154 2.63928 12.5849 1.65707C14.9545 0.674854 17.494 0.169312 20.0588 0.169312C22.6236 0.169312 25.1631 0.674854 27.5327 1.65707C29.9023 2.63928 32.0554 4.07894 33.869 5.89383C35.6826 7.70872 37.121 9.86331 38.1025 12.2346C39.0841 14.6059 39.5896 17.1474 39.5896 19.714C39.5896 24.8976 37.5317 29.8689 33.869 33.5342C30.2063 37.1996 25.2387 39.2587 20.0588 39.2587C16.4184 39.2516 12.8526 38.2265 9.76349 36.2991L0.500153 39.175ZM9.67971 32.8648C10.3013 32.8629 10.9104 33.0372 11.4371 33.3674C13.9878 34.9679 16.9365 35.8192 19.9471 35.8244C24.212 35.817 28.2995 34.1164 31.3126 31.0959C34.3257 28.0755 36.0181 23.9819 36.0181 19.714C36.0108 15.4509 34.3153 11.3646 31.303 8.35012C28.2907 5.33567 24.2071 3.6389 19.9471 3.63152C15.6871 3.6389 11.6035 5.33567 8.59118 8.35012C5.57888 11.3646 3.88345 15.4509 3.87607 19.714C3.89296 22.6774 4.73376 25.5777 6.30379 28.0903C6.5567 28.5043 6.71739 28.968 6.77516 29.4499C6.83294 29.9317 6.78609 30.4203 6.63825 30.8824L5.69005 33.842L8.64704 32.8927C8.98759 32.8296 9.33625 32.8202 9.67971 32.8648Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M19.947 21.779C21.0873 21.779 22.0117 20.854 22.0117 19.7129C22.0117 18.5718 21.0873 17.6467 19.947 17.6467C18.8068 17.6467 17.8824 18.5718 17.8824 19.7129C17.8824 20.854 18.8068 21.779 19.947 21.779Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M28.1495 21.779C29.2898 21.779 30.2142 20.854 30.2142 19.7129C30.2142 18.5718 29.2898 17.6467 28.1495 17.6467C27.0092 17.6467 26.0848 18.5718 26.0848 19.7129C26.0848 20.854 27.0092 21.779 28.1495 21.779Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M11.7161 21.779C12.8564 21.779 13.7807 20.854 13.7807 19.7129C13.7807 18.5718 12.8564 17.6467 11.7161 17.6467C10.5758 17.6467 9.6514 18.5718 9.6514 19.7129C9.6514 20.854 10.5758 21.779 11.7161 21.779Z","fill":"white"}})])]),_vm._v(" "),_c('div',{staticClass:"menu-element",on:{"click":_vm.onMenuClick}},[_c('svg',{attrs:{"width":"47","height":"40","viewBox":"0 0 47 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0.463837 12.5085C0.642763 11.688 0.747733 10.844 1.01374 10.0527C2.70996 5.00215 6.2193 1.88484 11.5728 0.978982C15.9994 0.229751 19.8427 1.56574 23.0694 4.61526C23.1433 4.68423 23.2185 4.75202 23.3115 4.83851C23.7052 4.48903 24.0785 4.13954 24.4722 3.81227C31.9548 -2.39548 43.6149 1.41262 45.8347 10.7763C46.6292 14.1273 45.9958 17.2715 44.5107 20.3082C42.9839 23.4314 40.8224 26.1104 38.3962 28.5953C34.2081 32.8838 29.4475 36.4757 24.3386 39.6421C23.6562 40.0652 23.0348 40.0664 22.3501 39.6433C16.4336 35.9848 10.9668 31.798 6.39345 26.5709C4.1855 24.0462 2.30081 21.3111 1.2356 18.119C0.919502 17.1722 0.776361 16.1705 0.550914 15.1945C0.531829 15.1138 0.493658 15.0367 0.463837 14.9572C0.463837 14.1414 0.463837 13.3243 0.463837 12.5085ZM43.3274 13.4541C43.2821 13.0754 43.2678 12.4255 43.1198 11.806C42.1035 7.53504 39.453 4.74267 35.0562 3.83915C30.8109 2.96719 27.3087 4.39318 24.6356 7.73258C23.8113 8.76233 22.7998 8.77987 21.9994 7.72323C19.3191 4.18513 14.6825 2.67965 10.4479 4.12902C6.30995 5.54567 3.94932 8.46661 3.39703 12.7458C3.13342 14.7866 3.63441 16.7082 4.45866 18.5596C5.86025 21.7061 8.02764 24.3267 10.436 26.7672C14.2078 30.5882 18.4877 33.8002 23.0014 36.7258C23.259 36.893 23.4236 36.8626 23.6646 36.7071C27.5234 34.2186 31.1914 31.4906 34.5481 28.3756C37.0721 26.0332 39.3851 23.512 41.1505 20.5537C42.4125 18.4392 43.2773 16.2009 43.3274 13.4541Z","fill":"white"}})])]),_vm._v(" "),_c('div',{staticClass:"menu-element"},[_c('svg',{attrs:{"width":"40","height":"40","viewBox":"0 0 40 40","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M37.9609 26.7543C37.5289 26.7543 37.1146 26.9259 36.8092 27.2314C36.5037 27.5368 36.3321 27.9511 36.3321 28.3831V31.6405C36.3321 32.9364 35.8173 34.1792 34.901 35.0956C33.9847 36.0119 32.7418 36.5267 31.446 36.5267H28.1885C27.7565 36.5267 27.3423 36.6983 27.0368 37.0037C26.7314 37.3092 26.5598 37.7234 26.5598 38.1554C26.5598 38.5874 26.7314 39.0016 27.0368 39.3071C27.3423 39.6125 27.7565 39.7841 28.1885 39.7841H31.446C33.605 39.7815 35.6748 38.9227 37.2015 37.3961C38.7282 35.8694 39.587 33.7995 39.5896 31.6405V28.3831C39.5896 27.9511 39.418 27.5368 39.1125 27.2314C38.8071 26.9259 38.3928 26.7543 37.9609 26.7543Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M2.12888 13.7246C2.56084 13.7246 2.97511 13.553 3.28056 13.2475C3.586 12.9421 3.7576 12.5278 3.7576 12.0958V8.83839C3.7576 7.54249 4.27239 6.29968 5.18873 5.38334C6.10507 4.467 7.34788 3.95221 8.64378 3.95221H11.9012C12.3332 3.95221 12.7475 3.78062 13.0529 3.47517C13.3584 3.16973 13.53 2.75545 13.53 2.32349C13.53 1.89152 13.3584 1.47725 13.0529 1.17181C12.7475 0.866361 12.3332 0.694763 11.9012 0.694763H8.64378C6.48475 0.697349 4.41489 1.55617 2.88822 3.08283C1.36156 4.6095 0.502739 6.67936 0.500153 8.83839L0.500153 12.0958C0.500153 12.5278 0.67175 12.9421 0.977195 13.2475C1.28264 13.553 1.69691 13.7246 2.12888 13.7246Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M11.9012 36.5267H8.6438C7.34791 36.5267 6.10509 36.0119 5.18875 35.0956C4.27242 34.1792 3.75763 32.9364 3.75763 31.6405V28.3831C3.75763 27.9511 3.58603 27.5368 3.28058 27.2314C2.97514 26.9259 2.56086 26.7543 2.1289 26.7543C1.69694 26.7543 1.28266 26.9259 0.977218 27.2314C0.671773 27.5368 0.500175 27.9511 0.500175 28.3831L0.500175 31.6405C0.502762 33.7995 1.36158 35.8694 2.88824 37.3961C4.41491 38.9227 6.48477 39.7815 8.6438 39.7841H11.9012C12.3332 39.7841 12.7475 39.6125 13.0529 39.3071C13.3584 39.0016 13.53 38.5874 13.53 38.1554C13.53 37.7234 13.3584 37.3092 13.0529 37.0037C12.7475 36.6983 12.3332 36.5267 11.9012 36.5267Z","fill":"white"}}),_vm._v(" "),_c('path',{attrs:{"d":"M31.446 0.694748H28.1885C27.7565 0.694748 27.3423 0.866345 27.0368 1.17179C26.7314 1.47724 26.5598 1.89151 26.5598 2.32347C26.5598 2.75544 26.7314 3.16971 27.0368 3.47516C27.3423 3.7806 27.7565 3.9522 28.1885 3.9522H31.446C32.7418 3.9522 33.9847 4.46699 34.901 5.38333C35.8173 6.29966 36.3321 7.54248 36.3321 8.83837V12.0958C36.3321 12.5278 36.5037 12.9421 36.8092 13.2475C37.1146 13.5529 37.5289 13.7245 37.9609 13.7245C38.3928 13.7245 38.8071 13.5529 39.1125 13.2475C39.418 12.9421 39.5896 12.5278 39.5896 12.0958V8.83837C39.587 6.67934 38.7282 4.60948 37.2015 3.08282C35.6748 1.55615 33.605 0.697334 31.446 0.694748V0.694748Z","fill":"white"}})])])]),_vm._v(" "),_c('img',{staticStyle:{"height":"var(--real100vh)","width":"auto"},attrs:{"src":("" + (item.poster))}}),_vm._v(" "),_c('div',{staticClass:"info"},[_c('a',{staticClass:"heart-container",attrs:{"target":"_blank","href":("" + (item.poster))},on:{"click":_vm.onLinkClick}},[_c('div',{staticClass:"heart pulse"}),_vm._v(" "),_c('div',{staticClass:"likes"},[_vm._v("\n              300\n            ")])])]),_vm._v(" "),_c('div',{staticClass:"description"},[_c('div',{staticClass:"description-box"},[_c('b',[_vm._v("Naty")]),_c('br'),_vm._v("\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s\n                            ")])])])}),1):_vm._e()],1),_vm._v(" "),_c('swiper-slide',[(_vm.profile.length > 0)?_c('div',{staticClass:"profile-layout"},[_c('header',[_c('div',{staticClass:"container",attrs:{"id":"prof"}},[_c('div',{staticClass:"cover-image",staticStyle:{"background-image":"url('https://unlok.me/media/models/f6da1899a1492914ae13b987f1486d7f/cover_pic.jpg?hash=1655826915')"}},[_c('img',{attrs:{"src":"https://unlok.me/media/models/f6da1899a1492914ae13b987f1486d7f/small_main_pic.jpg?hash=1655828319","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"profile-section"},[_c('h1',[_vm._v(_vm._s(_vm.profile[0].model_name))])])]),_vm._v(" "),_c('main',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"gallery"},_vm._l((_vm.profile[0].reels),function(item,index){return _c('div',{key:index,staticClass:"gallery-item",attrs:{"tabindex":"0"}},[_c('div',{staticClass:"item-box"},[_c('img',{staticClass:"gallery-image profile-activity",attrs:{"src":("" + (item.poster)),"alt":""}})])])}),0),_vm._v(" "),_c('div',{staticClass:"loader"})])])]):_vm._e()])],1),_vm._ssrNode(" "),_c('Footer')],2)}
var Photosvue_type_template_id_77bfbc94_staticRenderFns = []


// CONCATENATED MODULE: ./components/Photos.vue?vue&type=template&id=77bfbc94&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=fcc8da10&
var Footervue_type_template_id_fcc8da10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer-block\"><svg width=\"29\" height=\"29\" viewBox=\"0 0 29 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25.7645 29.0007H3.2283C3.15827 28.978 3.08708 28.959 3.01502 28.9439C1.90262 28.7524 1.03754 28.1808 0.498072 27.1899C0.271167 26.77 0.162237 26.2837 0 25.8263V13.0074C0.0203833 12.9772 0.036085 12.9441 0.0465333 12.9092C0.159986 12.1313 0.51963 11.4841 1.06761 10.9341C4.11003 7.88753 7.15299 4.8413 10.1965 1.79545C11.2284 0.763627 12.4696 0.147716 13.9246 0.0249876C15.8754 -0.139786 17.5279 0.513058 18.9097 1.90341C21.872 4.88373 24.8418 7.85609 27.8191 10.8205C28.6133 11.6109 29.0059 12.5342 28.9996 13.658C28.9849 16.5024 28.9951 19.3461 28.9945 22.1905C28.9945 23.3149 29.0121 24.4399 28.9843 25.5638C28.948 27.0257 27.9405 28.3445 26.5542 28.7928C26.2938 28.8774 26.0271 28.9342 25.7645 29.0007ZM20.54 26.5899H20.8134C22.2758 26.5899 23.7383 26.5933 25.2012 26.5899C26.1054 26.5871 26.5695 26.1121 26.5695 25.2001C26.5695 21.3637 26.5655 17.5296 26.5757 13.6904C26.5757 13.2109 26.4163 12.8421 26.0816 12.5074C23.1152 9.54417 20.1532 6.57692 17.1955 3.60569C15.6071 2.01477 13.3778 2.01477 11.7849 3.61251C8.8302 6.57313 5.87457 9.53338 2.918 12.4932C2.57764 12.8342 2.40746 13.2086 2.41087 13.6995C2.42221 17.5268 2.41655 21.3541 2.41768 25.1814C2.41768 26.1268 2.8783 26.5893 3.82393 26.5905C5.25797 26.5905 6.6922 26.5905 8.12662 26.5905C8.22646 26.5905 8.32629 26.5808 8.44825 26.5746C8.44825 26.4348 8.44825 26.3229 8.44825 26.2115C8.45903 24.5956 8.41819 22.978 8.4942 21.3655C8.57816 19.5882 9.40182 18.1376 10.7967 17.058C12.3709 15.8387 14.156 15.5205 16.091 16.0058C18.465 16.6012 20.4022 18.9035 20.4958 21.3467C20.5565 22.9694 20.5281 24.5962 20.5389 26.2212C20.5412 26.3303 20.54 26.4411 20.54 26.5899ZM18.0911 26.5729C18.103 26.5423 18.1114 26.5104 18.1161 26.478C18.1161 24.8433 18.1484 23.2075 18.1002 21.574C18.0554 20.0745 16.9215 18.7331 15.4761 18.3353C14.9383 18.1835 14.3727 18.1585 13.8236 18.2621C13.2745 18.3658 12.7568 18.5953 12.311 18.9327C11.8653 19.2702 11.5035 19.7064 11.2541 20.2072C11.0047 20.708 10.8743 21.2598 10.8733 21.8194C10.8586 23.3314 10.8705 24.8433 10.8733 26.3553C10.8733 26.4274 10.8858 26.4996 10.892 26.5717L18.0911 26.5729Z\" fill=\"#F2F2F2\"></path></svg></div> <div class=\"footer-block\"><svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M28.8524 28.6489C29.0799 28.372 29.1758 28.0463 29.1381 27.7155C29.1005 27.3866 28.9326 27.0642 28.6531 26.7848C26.5305 24.6622 24.4078 22.5394 22.285 20.4235C22.1874 20.3258 22.079 20.231 21.9731 20.1384C21.944 20.1129 21.9151 20.0877 21.8867 20.0625C21.8943 20.052 21.9016 20.0418 21.9088 20.0319C21.952 19.9721 21.988 19.9223 22.0276 19.8708L22.0289 19.8691C24.2503 16.8959 25.0541 13.5648 24.1567 9.96134C23.5593 7.56156 22.4768 5.62241 20.938 4.13853C19.3996 2.65494 17.4121 1.63326 15.0148 1.05696V1.05695L15.0142 1.05682C14.7636 0.99759 14.5052 0.955605 14.2541 0.914813C14.1284 0.894388 14.0045 0.874262 13.8844 0.85242L13.8711 0.85H13.8576H13.8528H13.8481H13.8434H13.8387H13.834H13.8293H13.8246H13.8199H13.8151H13.8104H13.8057H13.801H13.7963H13.7916H13.7869H13.7822H13.7774H13.7727H13.768H13.7633H13.7586H13.7539H13.7492H13.7445H13.7398H13.7351H13.7303H13.7256H13.7209H13.7162H13.7115H13.7068H13.7021H13.6974H13.6927H13.688H13.6833H13.6785H13.6738H13.6691H13.6644H13.6597H13.655H13.6503H13.6456H13.6409H13.6362H13.6315H13.6268H13.6221H13.6174H13.6126H13.6079H13.6032H13.5985H13.5938H13.5891H13.5844H13.5797H13.575H13.5703H13.5656H13.5609H13.5562H13.5515H13.5468H13.5421H13.5374H13.5327H13.528H13.5233H13.5185H13.5138H13.5091H13.5044H13.4997H13.495H13.4903H13.4856H13.4809H13.4762H13.4715H13.4668H13.4621H13.4574H13.4527H13.448H13.4433H13.4386H13.4339H13.4292H13.4245H13.4198H13.4151H13.4104H13.4057H13.401H13.3963H13.3916H13.3869H13.3822H13.3775H13.3728H13.3681H13.3634H13.3587H13.354H13.3493H13.3446H13.3399H13.3352H13.3305H13.3258H13.3211H13.3164H13.3117H13.307H13.3023H13.2976H13.2929H13.2882H13.2835H13.2788H13.2741H13.2694H13.2647H13.26H13.2553H13.2506H13.2459H13.2412H13.2365H13.2318H13.2271H13.2224H13.2177H13.213H13.2083H13.2036H13.1989H13.1942H13.1895H13.1848H13.1801H13.1754H13.1707H13.166H13.1613H13.1566H13.1519H13.1472H13.1425H13.1378H13.1331H13.1284H13.1237H13.1191H13.1144H13.1097H13.105H13.1003H13.0956H13.0909H13.0862H13.0815H13.0768H13.0721H13.0674H13.0627H13.058H13.0533H13.0486H13.0439H13.0392H13.0345H13.0298H13.0251H13.0204H13.0157H13.011H13.0063H13.0016H12.997H12.9923H12.9876H12.9829H12.9782H12.9735H12.9688H12.9641H12.9594H12.9547H12.95H12.9453H12.9406H12.9359H12.9312H12.9265H12.9218H12.9171H12.9124H12.9078H12.9031H12.8984H12.8937H12.889H12.8843H12.8796H12.8749H12.8702H12.8655H12.8608H12.8561H12.8514H12.8467H12.842H12.8373H12.8326H12.8279H12.8233H12.8186H12.8139H12.8092H12.8045H12.7998H12.7951H12.7904H12.7857H12.781H12.7763H12.7716H12.7669H12.7622H12.7575H12.7528H12.7481H12.7435H12.7388H12.7341H12.7294H12.7247H12.72H12.7153H12.7106H12.7059H12.7012H12.6965H12.6918H12.6871H12.6824H12.6777H12.673H12.6684H12.6637H12.659H12.6543H12.6496H12.6449H12.6402H12.6355H12.6308H12.6261H12.6214H12.6167H12.612H12.6073H12.6026H12.5979H12.5933H12.5886H12.5839H12.5792H12.5745H12.5698H12.5651H12.5604H12.5557H12.551H12.5463H12.5416H12.5369H12.5322H12.5275H12.5228H12.5182H12.5135H12.5088H12.5041H12.4994H12.4947H12.49H12.4853H12.4806H12.4759H12.4712H12.4665H12.4618H12.4571H12.4524H12.4477H12.443H12.4384H12.4337H12.429H12.4243H12.4196H12.4149H12.4102H12.4055H12.4008H12.3961H12.3914H12.3867H12.382H12.3773H12.3726H12.3679H12.3632H12.3585H12.3538H12.3492H12.3445H12.3398H12.3351H12.3304H12.3257H12.321H12.3163H12.3116H12.3069H12.3022H12.2975H12.2928H12.2881H12.2834H12.2787H12.274H12.2693H12.2646H12.2599H12.2552H12.2505H12.2459H12.2412H12.2365H12.2318H12.2271H12.2224H12.2177H12.213H12.2083H12.2036H12.1989H12.1942H12.1895H12.1848H12.1801H12.1754H12.1707H12.166H12.1613H12.1566H12.1519H12.1472H12.1425H12.1378H12.1331H12.1284H12.1237H12.119H12.1143H12.1096H12.1049H12.1002H12.0956H12.0909H12.0862H12.0815H12.0768H12.0721H12.0674H12.0627H12.058H12.0533H12.0486H12.0439H12.0392H12.0345H12.0298H12.0251H12.0204H12.0157H12.011H12.0063H12.0016H11.9969H11.9922H11.9875H11.9828H11.9781H11.9734H11.9687H11.964H11.9593H11.9546H11.9499H11.9452H11.9405H11.9358H11.9311H11.9264H11.9217H11.917H11.9123H11.9076H11.9029H11.8982H11.8935H11.8888H11.8841H11.8794H11.8747H11.87H11.8653H11.8605H11.8558H11.8511H11.8464H11.8417H11.837H11.8323H11.8276H11.8229H11.8182H11.8135H11.8088H11.8041H11.7994H11.7947H11.79H11.7853H11.7806H11.7759H11.7712H11.7665H11.7618H11.7571H11.7524H11.7477H11.743H11.7383H11.7335H11.7288H11.7241H11.7194H11.7147H11.71H11.7053H11.7006H11.6959H11.6912H11.6865H11.6818H11.6771H11.6724H11.6677H11.663H11.6582H11.6535H11.6488H11.6441H11.6394H11.6347H11.63H11.6253H11.6206H11.6159H11.6112H11.6065H11.6017H11.597H11.5923H11.5876H11.5829H11.5782H11.5735H11.5688H11.5641H11.5594H11.5547H11.5499H11.5452H11.5405H11.5358H11.5311H11.5264H11.5217H11.517H11.5123H11.5075H11.5028H11.4981H11.4934H11.4887H11.484H11.4793H11.4746H11.4698H11.4651H11.4604H11.4557H11.451H11.4365L11.4222 0.852784C11.2476 0.886905 11.0704 0.918949 10.892 0.951189C10.4794 1.02579 10.061 1.10143 9.65593 1.20627C7.4989 1.76096 5.6492 2.85726 4.1092 4.47254L4.10916 4.47259C2.59669 6.06034 1.59662 7.91651 1.11062 10.0522L1.1105 10.0527C1.03053 10.4099 0.96707 10.7721 0.904725 11.1278C0.887291 11.2273 0.869945 11.3263 0.852349 11.4245L0.85 11.4377V11.451V11.4557V11.4604V11.4651V11.4698V11.4746V11.4793V11.484V11.4887V11.4934V11.4981V11.5028V11.5075V11.5123V11.517V11.5217V11.5264V11.5311V11.5358V11.5405V11.5452V11.5499V11.5547V11.5594V11.5641V11.5688V11.5735V11.5782V11.5829V11.5876V11.5923V11.597V11.6017V11.6065V11.6112V11.6159V11.6206V11.6253V11.63V11.6347V11.6394V11.6441V11.6488V11.6535V11.6582V11.663V11.6677V11.6724V11.6771V11.6818V11.6865V11.6912V11.6959V11.7006V11.7053V11.71V11.7147V11.7194V11.7241V11.7288V11.7335V11.7383V11.743V11.7477V11.7524V11.7571V11.7618V11.7665V11.7712V11.7759V11.7806V11.7853V11.79V11.7947V11.7994V11.8041V11.8088V11.8135V11.8182V11.8229V11.8276V11.8323V11.837V11.8417V11.8464V11.8511V11.8558V11.8605V11.8653V11.87V11.8747V11.8794V11.8841V11.8888V11.8935V11.8982V11.9029V11.9076V11.9123V11.917V11.9217V11.9264V11.9311V11.9358V11.9405V11.9452V11.9499V11.9546V11.9593V11.964V11.9687V11.9734V11.9781V11.9828V11.9875V11.9922V11.9969V12.0016V12.0063V12.011V12.0157V12.0204V12.0251V12.0298V12.0345V12.0392V12.0439V12.0486V12.0533V12.058V12.0627V12.0674V12.0721V12.0768V12.0815V12.0862V12.0909V12.0956V12.1002V12.1049V12.1096V12.1143V12.119V12.1237V12.1284V12.1331V12.1378V12.1425V12.1472V12.1519V12.1566V12.1613V12.166V12.1707V12.1754V12.1801V12.1848V12.1895V12.1942V12.1989V12.2036V12.2083V12.213V12.2177V12.2224V12.2271V12.2318V12.2365V12.2412V12.2459V12.2505V12.2552V12.2599V12.2646V12.2693V12.274V12.2787V12.2834V12.2881V12.2928V12.2975V12.3022V12.3069V12.3116V12.3163V12.321V12.3257V12.3304V12.3351V12.3398V12.3445V12.3492V12.3538V12.3585V12.3632V12.3679V12.3726V12.3773V12.382V12.3867V12.3914V12.3961V12.4008V12.4055V12.4102V12.4149V12.4196V12.4243V12.429V12.4337V12.4384V12.443V12.4477V12.4524V12.4571V12.4618V12.4665V12.4712V12.4759V12.4806V12.4853V12.49V12.4947V12.4994V12.5041V12.5088V12.5135V12.5182V12.5228V12.5275V12.5322V12.5369V12.5416V12.5463V12.551V12.5557V12.5604V12.5651V12.5698V12.5745V12.5792V12.5839V12.5886V12.5933V12.5979V12.6026V12.6073V12.612V12.6167V12.6214V12.6261V12.6308V12.6355V12.6402V12.6449V12.6496V12.6543V12.659V12.6637V12.6684V12.673V12.6777V12.6824V12.6871V12.6918V12.6965V12.7012V12.7059V12.7106V12.7153V12.72V12.7247V12.7294V12.7341V12.7388V12.7435V12.7481V12.7528V12.7575V12.7622V12.7669V12.7716V12.7763V12.781V12.7857V12.7904V12.7951V12.7998V12.8045V12.8092V12.8139V12.8186V12.8233V12.8279V12.8326V12.8373V12.842V12.8467V12.8514V12.8561V12.8608V12.8655V12.8702V12.8749V12.8796V12.8843V12.889V12.8937V12.8984V12.9031V12.9078V12.9124V12.9171V12.9218V12.9265V12.9312V12.9359V12.9406V12.9453V12.95V12.9547V12.9594V12.9641V12.9688V12.9735V12.9782V12.9829V12.9876V12.9923V12.997V13.0016V13.0063V13.011V13.0157V13.0204V13.0251V13.0298V13.0345V13.0392V13.0439V13.0486V13.0533V13.058V13.0627V13.0674V13.0721V13.0768V13.0815V13.0862V13.0909V13.0956V13.1003V13.105V13.1097V13.1144V13.1191V13.1237V13.1284V13.1331V13.1378V13.1425V13.1472V13.1519V13.1566V13.1613V13.166V13.1707V13.1754V13.1801V13.1848V13.1895V13.1942V13.1989V13.2036V13.2083V13.213V13.2177V13.2224V13.2271V13.2318V13.2365V13.2412V13.2459V13.2506V13.2553V13.26V13.2647V13.2694V13.2741V13.2788V13.2835V13.2882V13.2929V13.2976V13.3023V13.307V13.3117V13.3164V13.3211V13.3258V13.3305V13.3352V13.3399V13.3446V13.3493V13.354V13.3587V13.3634V13.3681V13.3728V13.3775V13.3822V13.3869V13.3916V13.3963V13.401V13.4057V13.4104V13.4151V13.4198V13.4245V13.4292V13.4339V13.4386V13.4433V13.448V13.4527V13.4574V13.4621V13.4668V13.4715V13.4762V13.4809V13.4856V13.4903V13.495V13.4997V13.5044V13.5091V13.5138V13.5185V13.5233V13.528V13.5327V13.5374V13.5421V13.5468V13.5515V13.5562V13.5609V13.5656V13.5703V13.575V13.5797V13.5844V13.5891V13.5938V13.5985V13.6032V13.6079V13.6126V13.6174V13.6221V13.6268V13.6315V13.6362V13.6409V13.6456V13.6503V13.655V13.6597V13.6644V13.6691V13.6738V13.6785V13.6833V13.688V13.6927V13.6974V13.7021V13.7068V13.7115V13.7162V13.7209V13.7256V13.7303V13.7351V13.7398V13.7445V13.7492V13.7539V13.7586V13.7633V13.768V13.7727V13.7774V13.7822V13.7869V13.7916V13.7963V13.801V13.8057V13.8104V13.8151V13.8199V13.8246V13.8293V13.834V13.8387V13.8434V13.8481V13.8528V13.8576V13.8746L0.853841 13.8913C0.859988 13.9179 0.866006 13.9422 0.871642 13.9649C0.887477 14.0287 0.900293 14.0803 0.904461 14.1386L0.904227 14.1387L0.905292 14.147C1.05564 15.3225 1.35682 16.4675 1.87205 17.5392C3.6564 21.2514 6.56854 23.5547 10.6394 24.3073C13.4422 24.8281 16.0734 24.2993 18.5411 22.9184L18.542 22.918C18.9171 22.705 19.28 22.4583 19.6491 22.2075C19.788 22.1132 19.9277 22.0182 20.0693 21.9242C20.1084 21.9702 20.1523 22.0207 20.1938 22.0621C22.3772 24.2456 24.5541 26.4225 26.7378 28.5926C26.7497 28.6045 26.7618 28.6167 26.7742 28.6292C26.8618 28.7177 26.9637 28.8206 27.0831 28.9006C27.6561 29.3043 28.4124 29.1874 28.8524 28.6489ZM28.8524 28.6489C28.8524 28.6488 28.8525 28.6488 28.8525 28.6487L28.7364 28.5538L28.8522 28.6491C28.8523 28.649 28.8523 28.649 28.8524 28.6489ZM21.8601 12.6938L22.0101 12.6948L21.8601 12.6938C21.8269 17.7497 17.6886 21.8734 12.6614 21.8601C7.58602 21.8468 3.46901 17.7159 3.48897 12.6549C3.50892 7.5791 7.66028 3.44918 12.707 3.49572C17.7905 3.5423 21.8934 7.66078 21.8601 12.6938Z\" fill=\"#F2F2F2\" stroke=\"#F2F2F2\" stroke-width=\"0.3\"></path></svg></div> <div class=\"footer-block\"><svg width=\"32\" height=\"23\" viewBox=\"0 0 32 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 21.4324H29.5676M2 2H29.5676M2 11.7027H29.5676\" stroke=\"#F2F2F2\" stroke-width=\"3\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div>")])}
var Footervue_type_template_id_fcc8da10_staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=fcc8da10&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  methods: {
    toggleShake() {
      this.$refs.logoRef.classList.toggle('shaking');
    }

  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Footer.vue



function Footer_injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Footer_component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  Footervue_type_template_id_fcc8da10_render,
  Footervue_type_template_id_fcc8da10_staticRenderFns,
  false,
  Footer_injectStyles,
  null,
  "14fb98ab"
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// EXTERNAL MODULE: external "swiper-vue2"
var external_swiper_vue2_ = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.css
var swiper_bundle = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Photos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








const swiper = new external_swiper_vue2_["Swiper"]('.swiper', {
  speed: 400,
  spaceBetween: 100
});
/* harmony default export */ var Photosvue_type_script_lang_js_ = ({
  computed: Object(external_vuex_["mapGetters"])({
    videos: 'videos/videos',
    profile: 'profile/videkai'
  }),

  data() {
    return {
      firstPlayDone: false,
      currentSlide: 0,
      prevSlide: 0,
      error: false,
      sliderSettings: {
        vertical: true,
        itemsToShow: 1,
        centerMode: true,
        mouseDrag: false,
        touchDrag: true
      }
    };
  },

  components: {
    Hooper: external_hooper_["Hooper"],
    TimeAgo: external_vue2_timeago_["TimeAgo"],
    Slide: external_hooper_["Slide"],
    Logo: Logo,
    Swiper: external_swiper_vue2_["Swiper"],
    SwiperSlide: external_swiper_vue2_["SwiperSlide"],
    Footer: Footer
  },

  async created() {
    await this.loadVideos();

    if (this.videos.length <= 0) {
      this.error = '⚠️ API is not working, refresh or try later';
    }
  },

  methods: {
    loadVideos() {
      return this.$store.dispatch('videos/get').then(() => this.restart());
    },

    loadProfile() {
      return this.$store.dispatch('profile/get').then(() => this.showProfile());
    },

    loadMore() {
      // load more if there is less than 8 videos left
      if (this.currentSlide + 8 > this.videos.length) {
        this.loadVideos();
      }
    },

    onVideoEnd(index) {
      this.$refs.sliderRef.slideNext();
      this.loadMore(index);
    },

    onVideoPlay(index) {//this.$refs.videoRef[index].volume = 0
    },

    onVideoClick(event) {
      const video = event.target;

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },

    onLinkClick() {
      this.$refs.videoRef[this.currentSlide].pause();
    },

    onPlayClick() {
      this.firstPlayDone = true;
      this.$refs.videoRef[this.currentSlide].play();
    },

    onMenuClick() {
      alert('You liked the reel!');
    },

    openProfile() {
      location.href = 'https://www.unlok.me/franundurraga';
    },

    async onShare() {
      var link = 'http://ec2-44-206-90-48.compute-1.amazonaws.com/';

      if (navigator.share) {
        navigator.share({
          title: '',
          text: '',
          url: link
        }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing', error));
      } else {
        alert('phone only');
      }
    },

    onSlideChange() {
      var model = document.getElementsByClassName('is-active')[0].getAttribute('data-username');
      this.loadProfile();
      console.log('onSlideChange ' + model);
    },

    onSlide({
      currentSlide,
      slideFrom
    }) {
      this.currentSlide = currentSlide;
      this.prevSlide = slideFrom; // play video and pause previous

      if (this.firstPlayDone) {
        console.log('lets play');
        console.log(this.$refs.videoRef[currentSlide]);
        this.$refs.videoRef[currentSlide].volume = 0;

        if (this.$refs.videoRef[currentSlide].paused) {
          var playPromise = this.$refs.videoRef[currentSlide].play();

          if (playPromise !== undefined) {
            playPromise.then(_ => {// console.log('playback done');
              // Automatic playback started!
              // Show playing UI.
            }).catch(error => {
              console.log(error); // div.remove();
              // console.log('playback not gonna run... hidden');
              // Auto-play was prevented
              // Show paused UI.
            });
          }
        } // this.$refs.videoRef[currentSlide].play()


        this.$refs.videoRef[slideFrom].pause();
      }

      this.loadMore();
    },

    restart() {
      return this.$nextTick().then(async () => {
        if (this.videos.length > 0) {// await this.$refs.sliderRef.update()
        }
      });
    },

    showProfile() {
      // this.$refs.profileRef.update()
      document.getElementsByClassName('loader')[0].style.visibility = 'hidden';
      console.log('showing profile lol');
    },

    prettyNumber(number) {
      const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
      const tier = Math.log10(Math.abs(number)) / 3 | 0;
      if (tier == 0) return number;
      const suffix = SI_SYMBOL[tier];
      const scale = Math.pow(10, tier * 3);
      const scaled = number / scale;
      return scaled.toFixed(1) + suffix;
    }

  }
});
// CONCATENATED MODULE: ./components/Photos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Photosvue_type_script_lang_js_ = (Photosvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Photos.vue





/* normalize component */

var Photos_component = Object(componentNormalizer["a" /* default */])(
  components_Photosvue_type_script_lang_js_,
  Photosvue_type_template_id_77bfbc94_render,
  Photosvue_type_template_id_77bfbc94_staticRenderFns,
  false,
  null,
  null,
  "b9cceede"
  
)

/* harmony default export */ var Photos = (Photos_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Match.vue?vue&type=template&id=707f1053&
var Matchvue_type_template_id_707f1053_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"matches\" style=\"padding-bottom: 200px;\"><div style=\"width: 80%; margin: 0 auto;\"><p class=\"freshy-p text-center\">test</p></div> <div id=\"hidden-divs\" style=\"display: none;\"></div> <input type=\"hidden\" id=\"match-offset\"> <input type=\"hidden\" id=\"match-passed\"> <input type=\"hidden\" id=\"match-all\"> <div id=\"phone\"><div id=\"app\"><div class=\"header\"><div class=\"top\"><span class=\"left\"><span class=\"fontawesome-circle\"></span> <span class=\"fontawesome-circle\"></span> <span class=\"fontawesome-circle-blank\"></span> <span class=\"fontawesome-signal\"></span></span> <span class=\"center clock\"></span> <span class=\"right\"><span>75%</span> <div id=\"battery\"></div> <span class=\"fontawesome-bolt\"></span></span></div></div> <div id=\"people\"></div> <div id=\"control\"><div class=\"button no\"><a href=\"#\" onclick=\"return false;\" class=\"trigger\"><svg width=\"24\" height=\"50\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.9328 13.0218L23.004 6.93864C24.332 5.60795 24.332 3.32676 23.004 1.99607C21.6759 0.665374 19.3992 0.665374 18.0711 1.99607L12 8.07924L5.92885 1.99607C4.60079 0.665374 2.32411 0.665374 0.996047 1.99607C-0.332016 3.32676 -0.332016 5.60795 0.996047 6.93864L7.06719 13.0218L0.996047 19.105C-0.332016 20.4357 -0.332016 22.7169 0.996047 24.0476C1.75494 24.8079 2.51383 24.998 3.46245 24.998C4.41107 24.998 5.16996 24.6178 5.92885 24.0476L12 17.9644L18.0711 24.0476C18.83 24.8079 19.5889 24.998 20.5375 24.998C21.4862 24.998 22.2451 24.6178 23.004 24.0476C24.332 22.7169 24.332 20.4357 23.004 19.105L16.9328 13.0218Z\" fill=\"#FF0000\"></path></svg></a></div> <div class=\"button info\"><a href=\"#\" onclick=\"return false;\" class=\"trigger\"><svg width=\"25\" height=\"53\" viewBox=\"0 0 51 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 19.8634C0.249103 19.6277 0.474897 19.3597 0.748765 19.1591C9.32168 12.9139 17.9004 6.67597 26.4777 0.438063C26.638 0.320919 26.7982 0.197918 26.9745 0.108596C27.5382 -0.176942 28.1515 0.123239 28.2695 0.744101C28.303 0.922745 28.2943 1.11018 28.2943 1.29321C28.2957 4.41363 28.2957 7.53405 28.2957 10.6559C28.2957 10.8346 28.2957 11.0132 28.2957 11.1758C29.5194 11.3017 30.6935 11.3808 31.8545 11.5492C35.6231 12.0968 39.1004 13.4293 42.2294 15.6184C44.9128 17.4957 47.0862 19.8546 48.6406 22.7613C50.7455 26.7002 51.5045 30.8691 50.664 35.2869C49.8351 39.6432 47.6791 43.2878 44.5369 46.3335C43.2768 47.5548 41.8274 48.5798 40.4624 49.6897C39.9686 50.0909 39.3917 50.0426 38.8484 49.8815C38.1622 49.6795 38.0632 48.9429 38.6051 48.3484C39.1659 47.7334 39.7661 47.1521 40.2832 46.5034C41.7312 44.6891 42.6723 42.6464 42.7189 40.2889C42.7786 37.1919 41.4326 34.7143 39.1543 32.7287C36.4957 30.4108 33.3157 29.377 29.8617 29.0797C29.3679 29.0373 28.8697 29.0299 28.2957 29.0021C28.2957 29.2276 28.2957 29.4194 28.2957 29.6127C28.2957 32.7331 28.2928 35.8536 28.2986 38.9754C28.3001 39.4308 28.2578 39.8482 27.799 40.0839C27.3401 40.3197 26.973 40.1044 26.6088 39.8408C17.9485 33.5795 9.28381 27.3182 0.626398 21.0495C0.381666 20.8723 0.206857 20.5941 0 20.3642C0 20.1973 0 20.0304 0 19.8634Z\" fill=\"#BDBDBD\"></path></svg></a></div> <div class=\"button yes\"><a href=\"#\" onclick=\"return false;\" class=\"trigger\" style=\"background-color: #00A893;\"><svg width=\"28\" height=\"50\" viewBox=\"0 0 28 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.1265 23.8021C5.42427 17.0625 0 13.4925 0 7.81414C0 3.52011 3.06133 0 7.25334 0C10.1623 0 12.3209 1.78651 13.6533 4.3208C14.9857 1.78667 17.1442 0 20.0533 0C24.2458 0 27.3067 3.5208 27.3067 7.81414C27.3067 13.4918 21.8895 17.0563 14.1802 23.802C13.8785 24.066 13.4282 24.066 13.1265 23.8021Z\" fill=\"white\"></path></svg></a></div> <div class=\"button picture\"><a href=\"#\" onclick=\"return false;\" class=\"trigger\" style=\"background-color: #00A893;\"><img src=\"https://unlok.me/media/models/e973d6721f990140341f7f60ac17a0f7/main_pic.jpg?v=1631116722\" id=\"circle-image\"></a></div></div></div></div></div> <link rel=\"stylesheet\" href=\"https://www.unlok.me/css/match.css\"> <script src=\"https://www.unlok.me/js/match.js\"></script>")])}
var Matchvue_type_template_id_707f1053_staticRenderFns = []


// CONCATENATED MODULE: ./components/Match.vue?vue&type=template&id=707f1053&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Match.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Matchvue_type_script_lang_js_ = ({
  methods: {
    toggleShake() {
      this.$refs.logoRef.classList.toggle('shaking');
    },

    changeToPhotos() {
      return this.$emit('callPhotos');
    },

    changeToMatch() {
      return this.$emit('callMatch');
    }

  }
});
// CONCATENATED MODULE: ./components/Match.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Matchvue_type_script_lang_js_ = (Matchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Match.vue



function Match_injectStyles (context) {
  
  
}

/* normalize component */

var Match_component = Object(componentNormalizer["a" /* default */])(
  components_Matchvue_type_script_lang_js_,
  Matchvue_type_template_id_707f1053_render,
  Matchvue_type_template_id_707f1053_staticRenderFns,
  false,
  Match_injectStyles,
  null,
  "4bc50ce5"
  
)

/* harmony default export */ var Match = (Match_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  computed: Object(external_vuex_["mapGetters"])({
    videos: 'videos/videos',
    profile: 'profile/videkai'
  }),

  data() {
    return {
      firstPlayDone: false,
      currentSlide: 0,
      prevSlide: 0,
      reelsPage: 0,
      reelsOrder: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      error: false,
      sliderSettings: {
        vertical: true,
        itemsToShow: 1,
        centerMode: true,
        mouseDrag: false,
        touchDrag: true
      },
      currentComponent: external_hooper_["Hooper"]
    };
  },

  components: {
    Hooper: external_hooper_["Hooper"],
    TimeAgo: external_vue2_timeago_["TimeAgo"],
    Slide: external_hooper_["Slide"],
    Logo: Logo,
    Photos: Photos,
    Match: Match
  },

  async created() {
    this.set100vhVar();
    await this.loadVideos();

    if (this.videos.length <= 0) {
      this.error = '⚠️ Website issues';
    }
  },

  methods: {
    set100vhVar() {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        // If less than most tablets, set CSS var to window height.
        let value = "100vh"; // If window size is iPad or smaller, then use JS to set screen height.

        if (window.innerWidth && window.innerWidth <= 1024) {
          value = `${window.innerHeight}px`;
        }

        console.log('real100vh', value);
        document.documentElement.style.setProperty("--real100vh", value);
      }
    },

    swapComponent: function () {
      this.currentComponent = Photos;
    },
    openReels: function () {
      this.currentComponent = external_hooper_["Slide"];
    },

    loadVideos() {
      this.reelsPage = this.reelsPage + 1;
      return this.$store.dispatch('videos/get', {
        page: this.reelsPage,
        order: this.reelsOrder
      }).then(() => this.restart());
    },

    loadProfile() {
      return this.$store.dispatch('profile/get').then(() => this.showProfile());
    },

    loadMore() {
      // load more if there is less than 8 videos left
      if (this.currentSlide + 8 > this.videos.length) {
        this.loadVideos();
      }
    },

    onVideoEnd(index) {
      this.$refs.sliderRef.slideNext();
      this.loadMore(index);
    },

    onVideoPlay(index) {//this.$refs.videoRef[index].volume = 0
    },

    onVideoClick(event) {
      const video = event.target;

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },

    onLinkClick() {
      this.$refs.videoRef[this.currentSlide].pause();
    },

    onPlayClick() {
      this.firstPlayDone = true;
      this.$refs.videoRef[this.currentSlide].play();
    },

    onLikeReel(id) {
      var element = document.body.querySelector('path[data-id="' + id + '"]');
      element.setAttribute("fill", "red");
    },

    onFullScreen() {
      var element = this.$refs.videoRef[this.currentSlide];

      if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.webkitEnterFullScreen) {
        element.webkitEnterFullScreen();
      }
    },

    openProfile(name) {
      location.href = 'https://www.unlok.me/' + name;
    },

    async onShare() {
      var link = 'http://ec2-44-206-90-48.compute-1.amazonaws.com/';

      if (navigator.share) {
        navigator.share({
          title: '',
          text: '',
          url: link
        }).then(() => console.log('Successful share')).catch(error => console.log('Error sharing', error));
      } else {
        alert('phone only');
      }
    },

    onSlideChange() {
      var model = document.getElementsByClassName('is-active')[0].getAttribute('data-username');
      this.loadProfile();
      console.log('onSlideChange ' + model);
    },

    onSlide({
      currentSlide,
      slideFrom
    }) {
      this.currentSlide = currentSlide;
      this.prevSlide = slideFrom; // play video and pause previous

      if (this.firstPlayDone) {
        console.log('lets play');
        this.$refs.videoRef[currentSlide].volume = 0;

        if (this.$refs.videoRef[currentSlide].paused) {
          var playPromise = this.$refs.videoRef[currentSlide].play();

          if (playPromise !== undefined) {
            playPromise.then(_ => {// console.log('playback done');
              // Automatic playback started!
              // Show playing UI.
            }).catch(error => {
              console.log(error); // div.remove();
              // console.log('playback not gonna run... hidden');
              // Auto-play was prevented
              // Show paused UI.
            });
          }
        } // this.$refs.videoRef[currentSlide].play()


        this.$refs.videoRef[slideFrom].pause();
      } // preload next video


      if (undefined !== this.$refs.videoRef[currentSlide + 1]) {
        this.$refs.videoRef[currentSlide + 1].preload = 'auto';
      }

      this.loadMore();
    },

    restart() {
      return this.$nextTick().then(async () => {
        if (this.videos.length > 0) {// await this.$refs.sliderRef.update()
        }
      });
    },

    showProfile() {
      // this.$refs.profileRef.update()
      document.getElementsByClassName('loader')[0].style.visibility = 'hidden';
      console.log('showing profile lol');
    },

    prettyNumber(number) {
      const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
      const tier = Math.log10(Math.abs(number)) / 3 | 0;
      if (tier == 0) return number;
      const suffix = SI_SYMBOL[tier];
      const scale = Math.pow(10, tier * 3);
      const scaled = number / scale;
      return scaled.toFixed(1) + suffix;
    }

  }
});
// CONCATENATED MODULE: ./components/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Slider.vue



function Slider_injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(51)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var Slider_component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js_,
  Slidervue_type_template_id_4945328d_render,
  Slidervue_type_template_id_4945328d_staticRenderFns,
  false,
  Slider_injectStyles,
  null,
  "023e48f1"
  
)

/* harmony default export */ var Slider = (Slider_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Slider: Slider
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  
}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "4651825e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map