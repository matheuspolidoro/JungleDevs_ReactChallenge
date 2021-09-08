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
          backgroundColor: "#FFFFFF",
          display: "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
            className: (_styles_NotFoundComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoBackground),
            "aria-label": "Redirect to home page",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              src: _public_hapuSymbol_svg__WEBPACK_IMPORTED_MODULE_2__.default,
              width: 32,
              className: (_styles_NotFoundComponent_module_css__WEBPACK_IMPORTED_MODULE_4___default().image)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), "aaaaaaaaaaa"]
      }, void 0, true, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0Ljk3Y2YwMzZkY2VjZDY2YmZhOWZjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0ksUUFBVCxHQUFvQjtBQUNqQyxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxNQUFBQSxLQUFLLEVBQUUsT0FERjtBQUVMQyxNQUFBQSxNQUFNLEVBQUU7QUFGSCxLQURUO0FBQUEsMkJBTUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsUUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTEMsUUFBQUEsVUFBVSxFQUFFLFFBRlA7QUFHTEgsUUFBQUEsS0FBSyxFQUFFLE1BSEY7QUFJTEMsUUFBQUEsTUFBTSxFQUFFLE1BSkg7QUFLTEcsUUFBQUEsYUFBYSxFQUFFLEtBTFY7QUFNTEMsUUFBQUEsUUFBUSxFQUFFO0FBTkwsT0FEVDtBQUFBLDZCQVVFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xDLFVBQUFBLGVBQWUsRUFBRSxTQURaO0FBR0xKLFVBQUFBLE9BQU8sRUFBRTtBQUhKLFNBRFQ7QUFBQSxnQ0FPRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFFSiw0RkFEYjtBQUVFLDBCQUFXLHVCQUZiO0FBQUEsbUNBSUUsOERBQUMsbURBQUQ7QUFBTyxpQkFBRyxFQUFFRCwyREFBWjtBQUF3QixtQkFBSyxFQUFFLEVBQS9CO0FBQW1DLHVCQUFTLEVBQUVDLG1GQUFZVTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDtLQXRDdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy80MDQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGhhcHVTeW1ib2wgZnJvbSBcIi4uLy4uL3B1YmxpYy9oYXB1U3ltYm9sLnN2Z1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTm90Rm91bmRDb21wb25lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90Rm91bmQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPG1haW5cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICBwbGFjZUl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkZGRkZGXCIsXHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvQmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVkaXJlY3QgdG8gaG9tZSBwYWdlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2hhcHVTeW1ib2x9IHdpZHRoPXszMn0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIGFhYWFhYWFhYWFhXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJoYXB1U3ltYm9sIiwic3R5bGVzIiwiTm90Rm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJwbGFjZUl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwiYmFja2dyb3VuZENvbG9yIiwibG9nb0JhY2tncm91bmQiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=