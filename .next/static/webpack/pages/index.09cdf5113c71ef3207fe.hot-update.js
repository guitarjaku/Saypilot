webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __prefresh_utils__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.module.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/g4rtu1/Work/saypilot/components/Footer.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement;\n\n/* Copyright 2020 Genemator Sakhib. All rights reserved. MPL-2.0 license. */\n\n\nvar Footer = function Footer(props) {\n  var queryString;\n\n  if (true) {\n    queryString = window.location.search;\n  }\n\n  var urlParams = new URLSearchParams(queryString);\n  var id = urlParams.get(\"id\") || \"\";\n  return;\n\n  __jsx(\"div\", {\n    className: props.simple ? undefined : \"bg-transparent border-t border-b border-gray-200\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"max-w-screen-xl mx-2 py-6 px-4 overflow-hidden sm:px-6 lg:px-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"-mx-5 -my-2 flex flex-wrap justify-start\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"px-5 py-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/editCampaign/?id=\".concat(id),\n    className: \"text-base leading-6 text-black hover:text-gray-200 border  border-gray-400 rounded-none p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"EDIT CAMPAIGN\")), __jsx(\"div\", {\n    className: \"px-5 py-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"https://t.me/bsba_bot\",\n    className: \"text-base leading-6 text-black hover:text-gray-200 border  border-gray-400 rounded-none p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"STOP ACCEPTING APPLICATIONS\")), __jsx(\"div\", {\n    className: \"px-5 py-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"https://t.me/bsba_bot\",\n    className: \"text-base leading-6 text-black hover:text-gray-200 border  border-gray-400 rounded-none p-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"ARCHIVE CAMPAIGN\")))));\n};\n\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n\nconst isPrefreshComponent = __prefresh_utils__.registerExports(module);\n\nif ( true && isPrefreshComponent) {\n\tconst hotModuleExports = __prefresh_utils__.getExports(module);\n\tconst previousHotModuleExports =\n\t\tmodule.hot.data && module.hot.data.moduleExports;\n\n\tif (previousHotModuleExports) {\n\t\ttry {\n\t\t\tfor (let i in hotModuleExports) {\n\t\t\t\tif (typeof hotModuleExports[i] === 'function') {\n\t\t\t\t\tif (i in previousHotModuleExports) {\n\t\t\t\t\t\t__prefresh_utils__.compareSignatures(\n\t\t\t\t\t\t\tpreviousHotModuleExports[i],\n\t\t\t\t\t\t\thotModuleExports[i]\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t__prefresh_utils__.flush();\n\t\t} catch (e) {\n\t\t\t// Only available in newer webpack versions.\n\t\t\tif (module.hot.invalidate) {\n\t\t\t\tmodule.hot.invalidate();\n\t\t\t} else {\n\t\t\t\tself.location.reload();\n\t\t\t}\n\t\t}\n\t}\n\n\tmodule.hot.dispose(function(data) {\n\t\tdata.moduleExports = __prefresh_utils__.getExports(module);\n\t});\n\n\tmodule.hot.accept(function errorRecovery() {\n\t\t__webpack_require__.c[module.i].hot.accept(errorRecovery);\n\t});\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), __webpack_require__(/*! ./node_modules/@prefresh/next/src/utils/prefresh.js */ \"./node_modules/@prefresh/next/src/utils/prefresh.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIudHN4P2UyODUiXSwibmFtZXMiOlsiRm9vdGVyIiwicHJvcHMiLCJxdWVyeVN0cmluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaWQiLCJnZXQiLCJzaW1wbGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBaUM7QUFDOUMsTUFBSUMsV0FBSjs7QUFDQSxZQUFtQztBQUNqQ0EsZUFBVyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQTlCO0FBQ0Q7O0FBQ0QsTUFBTUMsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0JMLFdBQXBCLENBQWxCO0FBQ0EsTUFBTU0sRUFBVSxHQUFHRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxJQUFkLEtBQXVCLEVBQTFDO0FBRUE7O0FBQ0E7QUFDRSxhQUFTLEVBQ1BSLEtBQUssQ0FBQ1MsTUFBTixHQUNJQyxTQURKLEdBRUksa0RBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQUssYUFBUyxFQUFDLGdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLDhCQUF1QkgsRUFBdkIsQ0FETjtBQUVFLGFBQVMsRUFBQyw2RkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyx1QkFEUDtBQUVFLGFBQVMsRUFBQyw2RkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLENBVEYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsdUJBRFA7QUFFRSxhQUFTLEVBQUMsNkZBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQWpCRixDQURGLENBUEY7QUFvQ0QsQ0E3Q0Q7O0tBQU1SLE07QUErQ1NBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb290ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29weXJpZ2h0IDIwMjAgR2VuZW1hdG9yIFNha2hpYi4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTVBMLTIuMCBsaWNlbnNlLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wczogeyBzaW1wbGU/OiBib29sZWFuIH0pID0+IHtcbiAgbGV0IHF1ZXJ5U3RyaW5nO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgfVxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcbiAgY29uc3QgaWQ6IHN0cmluZyA9IHVybFBhcmFtcy5nZXQoXCJpZFwiKSB8fCBcIlwiO1xuXG4gIHJldHVybjtcbiAgPGRpdlxuICAgIGNsYXNzTmFtZT17XG4gICAgICBwcm9wcy5zaW1wbGVcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiXG4gICAgfVxuICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgbXgtMiBweS02IHB4LTQgb3ZlcmZsb3ctaGlkZGVuIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCItbXgtNSAtbXktMiBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0yXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2AvZWRpdENhbXBhaWduLz9pZD0ke2lkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy02IHRleHQtYmxhY2sgaG92ZXI6dGV4dC1ncmF5LTIwMCBib3JkZXIgIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW5vbmUgcC00XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFRElUIENBTVBBSUdOXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTJcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdC5tZS9ic2JhX2JvdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbGVhZGluZy02IHRleHQtYmxhY2sgaG92ZXI6dGV4dC1ncmF5LTIwMCBib3JkZXIgIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW5vbmUgcC00XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTVE9QIEFDQ0VQVElORyBBUFBMSUNBVElPTlNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMlwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90Lm1lL2JzYmFfYm90XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBsZWFkaW5nLTYgdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWdyYXktMjAwIGJvcmRlciAgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbm9uZSBwLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFSQ0hJVkUgQ0FNUEFJR05cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n");

/***/ })

})