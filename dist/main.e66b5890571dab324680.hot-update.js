"use strict";
self["webpackHotUpdate_donvadicastro_intapp_host_demo"]("main",{

/***/ "./src/layout.tsx":
/*!************************!*\
  !*** ./src/layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errors": () => (/* binding */ errors),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation.tsx");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Loading */ "./src/components/Loading.tsx");





var home = function home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Redirect, {
    to: "/browse"
  });
};
var layout = {
  Layout: _components_App__WEBPACK_IMPORTED_MODULE_1__["default"],
  MenuContainer: _components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"],
  LoadingIndicator: _components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"],
  MenuItem: function MenuItem(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, children);
  }
};
var errors = {
  not_found: function not_found() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cbe95da039e1c7bbe7df")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e66b5890571dab324680.hot-update.js.map