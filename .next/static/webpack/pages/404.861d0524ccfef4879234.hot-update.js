"use strict";
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NotFound; }
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_hapuSymbol_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/hapuSymbol.svg */ "./public/hapuSymbol.svg");
/* harmony import */ var _styles_NotFoundComponent_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/NotFoundComponent.module.css */ "./src/styles/NotFoundComponent.module.css");
/* harmony import */ var _styles_NotFoundComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NotFoundComponent_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\mathe\\Desktop\\JungleDevs_ReactChallenge\\src\\pages\\404.js";





function NotFound() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    style: {
      width: "100vw",
      height: "100vh"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      style: {
        display: "grid",
        placeItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        style: {
          backgroundColor: "#FFFFFF"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: (_styles_NotFoundComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoBackground),
            "aria-label": "Redirect to home page",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              src: _public_hapuSymbol_svg__WEBPACK_IMPORTED_MODULE_2__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = NotFound;

var _c;

$RefreshReg$(_c, "NotFound");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./public/hapuSymbol.svg":
/*!*******************************!*\
  !*** ./public/hapuSymbol.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/hapuSymbol.b975b22dcafb7b4c1827e1a772552397.svg","height":22,"width":22});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0Ljg2MWQwNTI0Y2NmZWY0ODc5MjM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ksUUFBVCxHQUFvQjtBQUNqQyxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxNQUFBQSxLQUFLLEVBQUUsT0FERjtBQUVMQyxNQUFBQSxNQUFNLEVBQUU7QUFGSCxLQURUO0FBQUEsMkJBTUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTEMsUUFBQUEsVUFBVSxFQUFFLFFBRlA7QUFHTEgsUUFBQUEsS0FBSyxFQUFFLE1BSEY7QUFJTEMsUUFBQUEsTUFBTSxFQUFFLE1BSkg7QUFLTEcsUUFBQUEsYUFBYSxFQUFFLEtBTFY7QUFNTEMsUUFBQUEsUUFBUSxFQUFFO0FBTkwsT0FEVDtBQUFBLDZCQVVFO0FBQUssYUFBSyxFQUFFO0FBQUVDLFVBQUFBLGVBQWUsRUFBRTtBQUFuQixTQUFaO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRVIsNEZBRGI7QUFFRSwwQkFBVyx1QkFGYjtBQUFBLG1DQUlFLDhEQUFDLG1EQUFEO0FBQU8saUJBQUcsRUFBRUQsMkRBQVVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEO0tBL0J1QkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHhCLCtEQUFlLENBQUMsMEdBQTBHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy80MDQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9oYXB1U3ltYm9sLnN2ZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaGFwdVN5bWJvbCBmcm9tIFwiLi4vLi4vcHVibGljL2hhcHVTeW1ib2wuc3ZnXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ob3RGb3VuZENvbXBvbmVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgIHBsYWNlSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGRkZGRlwiIH19PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvQmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVkaXJlY3QgdG8gaG9tZSBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2hhcHVTeW1ib2x9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9oYXB1U3ltYm9sLmI5NzViMjJkY2FmYjdiNGMxODI3ZTFhNzcyNTUyMzk3LnN2Z1wiLFwiaGVpZ2h0XCI6MjIsXCJ3aWR0aFwiOjIyfTsiXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiaGFwdVN5bWJvbCIsInN0eWxlcyIsIk5vdEZvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwicGxhY2VJdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImJhY2tncm91bmRDb2xvciIsImxvZ29CYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==