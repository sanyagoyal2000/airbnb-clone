"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DiscoveryCard.js":
/*!*************************************!*\
  !*** ./components/DiscoveryCard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/sanyagoyal/airbnb-clone/components/DiscoveryCard.js\";\n\n\n\nfunction DiscoveryCard(_ref) {\n  var img = _ref.img,\n      title = _ref.title,\n      description = _ref.description;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"cursor-pointer hover:scale-105 transform transition-duration-300 ease-out \",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"relative h-82 w-82\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n          src: img,\n          layout: \"fill\",\n          className: \"rounded\",\n          objectFit: \"cover\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n        className: \"text -2xl mt-3 font-fira-sans font-semibold\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"text-sm text-gray-700\",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 9\n  }, this);\n}\n\n_c = DiscoveryCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiscoveryCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"DiscoveryCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rpc2NvdmVyeUNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFDQSxTQUFTQyxhQUFULE9BQWdEO0FBQUEsTUFBeEJDLEdBQXdCLFFBQXhCQSxHQUF3QjtBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7QUFDNUMsc0JBQ0k7QUFBQSwyQkFFQTtBQUFLLGVBQVMsRUFBQyw0RUFBZjtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLCtCQUNJLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFRixHQUFaO0FBQWlCLGdCQUFNLEVBQUMsTUFBeEI7QUFBK0IsbUJBQVMsRUFBQyxTQUF6QztBQUFtRCxtQkFBUyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFJQTtBQUFJLGlCQUFTLEVBQUMsNkNBQWQ7QUFBQSxrQkFBNkRDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKQSxlQUtBO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBLGtCQUFzQ0M7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztLQWJRSDtBQWVULCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGlzY292ZXJ5Q2FyZC5qcz9iNThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuZnVuY3Rpb24gRGlzY292ZXJ5Q2FyZCh7aW1nLHRpdGxlLGRlc2NyaXB0aW9ufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMDUgdHJhbnNmb3JtIHRyYW5zaXRpb24tZHVyYXRpb24tMzAwIGVhc2Utb3V0IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtODIgdy04MlwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nfSBsYXlvdXQ9XCJmaWxsXCIgY2xhc3NOYW1lPVwicm91bmRlZFwiIG9iamVjdEZpdD1cImNvdmVyXCIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQgLTJ4bCBtdC0zIGZvbnQtZmlyYS1zYW5zIGZvbnQtc2VtaWJvbGRcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXJ5Q2FyZFxuIl0sIm5hbWVzIjpbIkltYWdlIiwiRGlzY292ZXJ5Q2FyZCIsImltZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DiscoveryCard.js\n");

/***/ })

});