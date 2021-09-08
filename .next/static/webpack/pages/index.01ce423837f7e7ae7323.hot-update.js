"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/MainComponent.js":
/*!*****************************************!*\
  !*** ./src/components/MainComponent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_ImageSection1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/ImageSection1.png */ "./assets/ImageSection1.png");
/* harmony import */ var _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/ImageSection3.png */ "./assets/ImageSection3.png");
/* harmony import */ var _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/ImageSection4.png */ "./assets/ImageSection4.png");
/* harmony import */ var _assets_ImageSection5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/ImageSection5.png */ "./assets/ImageSection5.png");
/* harmony import */ var _styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/MainComponent.module.css */ "./src/styles/MainComponent.module.css");
/* harmony import */ var _styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\mathe\\Desktop\\JungleDevs_ReactChallenge\\src\\components\\MainComponent.js";









function MainComponent() {
  var subscribeNewsletter = /*#__PURE__*/function () {
    var _ref = (0,C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
      var userData, response, result;
      return C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              userData = {
                name: event.target.name.value,
                email: event.target.email.value
              };
              _context.next = 4;
              return fetch("https://api.jungledevs.com/api/v1/challenge-newsletter/", {
                body: JSON.stringify(userData),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST"
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              console.log("result ", result); // result.user => 'Ada Lovelace'

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function subscribeNewsletter(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("main", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("article", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionRight),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection1_png__WEBPACK_IMPORTED_MODULE_4__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            children: "Share your home,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            children: "nanny and costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: "You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              className: "a",
              children: "Ready to get started?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h3", {
          children: "Are you a parent without a nanny and looking to share?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          children: "Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("form", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().form),
          onSubmit: subscribeNewsletter,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            id: "name",
            type: "text",
            placeholder: "Your name",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            id: "email",
            type: "email",
            placeholder: "Your email",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            type: "submit",
            className: "button",
            style: {
              backgroundColor: "#00C88C",
              color: "#FFFFFF"
            },
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_5__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
          children: "A framework built for the long term"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("aside", {
          className: "displayNone",
          style: {
            margin: "48px 0"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("footer", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          style: {
            marginBottom: "48px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection5_png__WEBPACK_IMPORTED_MODULE_7__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
_c = MainComponent;

var _c;

$RefreshReg$(_c, "MainComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDFjZTQyMzgzN2Y3ZTdhZTczMjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNPLGFBQVQsR0FBeUI7QUFDdEMsTUFBTUMsbUJBQW1CO0FBQUEsaVRBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFTUMsY0FBQUEsUUFIb0IsR0FHVDtBQUNmQyxnQkFBQUEsSUFBSSxFQUFFSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUQsSUFBYixDQUFrQkUsS0FEVDtBQUVmQyxnQkFBQUEsS0FBSyxFQUFFTixLQUFLLENBQUNJLE1BQU4sQ0FBYUUsS0FBYixDQUFtQkQ7QUFGWCxlQUhTO0FBQUE7QUFBQSxxQkFRSEUsS0FBSyxDQUMxQix5REFEMEIsRUFFMUI7QUFDRUMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLFFBQWYsQ0FEUjtBQUVFUyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRlg7QUFLRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUxWLGVBRjBCLENBUkY7O0FBQUE7QUFRcEJDLGNBQUFBLFFBUm9CO0FBQUE7QUFBQSxxQkFtQkxBLFFBQVEsQ0FBQ0MsSUFBVCxFQW5CSzs7QUFBQTtBQW1CcEJDLGNBQUFBLE1BbkJvQjtBQW9CMUJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE1BQXZCLEVBcEIwQixDQXFCMUI7O0FBckIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQmhCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUF3QkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVGLG1GQUFoQjtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFDLFdBQWhCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFFQSxpRkFBcEI7QUFBQSxnQ0FDRTtBQUFTLG1CQUFTLEVBQUVBLHNGQUFwQjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsZUFBRyxFQUFFSiw4REFEUDtBQUVFLGVBQUcsRUFBQyx5Q0FGTjtBQUdFLG1CQUFPLEVBQUU7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQVMsbUJBQVMsWUFBS0kscUZBQUwsY0FBMkJBLHFGQUEzQixDQUFsQjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQVlFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQTJCRTtBQUFJLGlCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLGVBNkJFO0FBQ0UsaUJBQVMsWUFBS0EscUZBQUwsZUFBNEJBLHFGQUE1QixDQURYO0FBRUUsYUFBSyxFQUFFO0FBQUUwQixVQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QkMsVUFBQUEsY0FBYyxFQUFFO0FBQXhDLFNBRlQ7QUFBQSxnQ0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBU0U7QUFBTSxtQkFBUyxFQUFFM0IsOEVBQWpCO0FBQThCLGtCQUFRLEVBQUVFLG1CQUF4QztBQUFBLGtDQUNFO0FBQ0UsY0FBRSxFQUFDLE1BREw7QUFFRSxnQkFBSSxFQUFDLE1BRlA7QUFHRSx1QkFBVyxFQUFDLFdBSGQ7QUFJRSxxQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU9FO0FBQ0UsY0FBRSxFQUFDLE9BREw7QUFFRSxnQkFBSSxFQUFDLE9BRlA7QUFHRSx1QkFBVyxFQUFDLFlBSGQ7QUFJRSxxQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQWFFO0FBQ0UsZ0JBQUksRUFBQyxRQURQO0FBRUUscUJBQVMsRUFBQyxRQUZaO0FBR0UsaUJBQUssRUFBRTtBQUFFMkIsY0FBQUEsZUFBZSxFQUFFLFNBQW5CO0FBQThCQyxjQUFBQSxLQUFLLEVBQUU7QUFBckMsYUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGLGVBNkRFO0FBQUksaUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3REYsZUErREU7QUFBUyxpQkFBUyxFQUFFOUIsaUZBQXBCO0FBQUEsZ0NBQ0U7QUFBUyxtQkFBUyxZQUFLQSxxRkFBTCxlQUE0QkEscUZBQTVCLENBQWxCO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQVNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxRQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWdCRTtBQUFTLG1CQUFTLFlBQUtBLHFGQUFMLGNBQTJCQSxxRkFBM0IsQ0FBbEI7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRUgsOERBRFA7QUFFRSxlQUFHLEVBQUMseUNBRk47QUFHRSxtQkFBTyxFQUFFO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9ERixlQXdGRTtBQUFJLGlCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEZGLGVBMEZFO0FBQ0UsaUJBQVMsWUFBS0cscUZBQUwsZUFBNEJBLHFGQUE1QixDQURYO0FBRUUsYUFBSyxFQUFFO0FBQUUwQixVQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QkMsVUFBQUEsY0FBYyxFQUFFO0FBQXhDLFNBRlQ7QUFBQSxnQ0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQUtFO0FBQUcsZUFBSyxFQUFFO0FBQUVJLFlBQUFBLFNBQVMsRUFBRTtBQUFiLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFZRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBaUJFO0FBQU8sbUJBQVMsRUFBQyxhQUFqQjtBQUErQixlQUFLLEVBQUU7QUFBRUMsWUFBQUEsTUFBTSxFQUFFO0FBQVYsV0FBdEM7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRWxDLDhEQURQO0FBRUUsZUFBRyxFQUFDLDBEQUZOO0FBR0UsbUJBQU8sRUFBRTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExRkYsZUFvSEU7QUFBSSxpQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBIRixlQXNIRTtBQUNFLGlCQUFTLFlBQUtFLHFGQUFMLGVBQTRCQSxxRkFBNUIsQ0FEWDtBQUVFLGFBQUssRUFBRTtBQUFFMEIsVUFBQUEsVUFBVSxFQUFFLFFBQWQ7QUFBd0JDLFVBQUFBLGNBQWMsRUFBRTtBQUF4QyxTQUZUO0FBQUEsZ0NBSUU7QUFBUyxlQUFLLEVBQUU7QUFBRU0sWUFBQUEsWUFBWSxFQUFFO0FBQWhCLFdBQWhCO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxlQUFHLEVBQUVsQyw4REFEUDtBQUVFLGVBQUcsRUFBQywwREFGTjtBQUdFLG1CQUFPLEVBQUU7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBWUU7QUFBRyxlQUFLLEVBQUU7QUFBRWdDLFlBQUFBLFNBQVMsRUFBRTtBQUFiLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThJRDtLQXZLdUI5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb24xLnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uMyBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjMucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb240IGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uNC5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb241LnBuZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWFpbkNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IHN1YnNjcmliZU5ld3NsZXR0ZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLnZhbHVlLFxyXG4gICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vYXBpLmp1bmdsZWRldnMuY29tL2FwaS92MS9jaGFsbGVuZ2UtbmV3c2xldHRlci9cIixcclxuICAgICAge1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHQgXCIsIHJlc3VsdCk7XHJcbiAgICAvLyByZXN1bHQudXNlciA9PiAnQWRhIExvdmVsYWNlJ1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvblJpZ2h0fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgYWx0PVwiVGFibGUgd2l0aCBzaW11bGF0aW9uIHNoYXJlIGluIGEgbGFwdG9wXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxoMj5TaGFyZSB5b3VyIGhvbWUsPC9oMj5cclxuICAgICAgICAgICAgPGgyPm5hbm55IGFuZCBjb3N0czwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFlvdSBoYXZlIGEgZmFudGFzdGljIGhvbWUsIGEgZmFudGFzdGljIG5hbm55IGFuZCB3b3VsZG7igJl0IGN1dHRpbmdcclxuICAgICAgICAgICAgICB5b3VyIGNvc3RzIGluIGhhbGYgYmUsIHdlbGwsIGZhbnRhc3RpYz8hIElmIG9ubHkgaXQgd2FzIGVhc3kgdG9cclxuICAgICAgICAgICAgICBjb25uZWN0IHdpdGggb3RoZXIgcGFyZW50cyB0byBzaGFyZSB5b3VyIGNvc3RzPyBXZWxsIG5vdyBpdCBpcyxcclxuICAgICAgICAgICAgICB3aXRoIEhhcHUuIEhhcHUgbWVhbnMgdHJpYmUgYW5kIGl04oCZcyBvdXIgZm91bmRhdGlvbmFsIDMgdHJpYmFsXHJcbiAgICAgICAgICAgICAgcHJpbmNpcGxlcyB0aGF0IGVtcG93ZXJzIHlvdSB0byBjcmVhdGUgYW5kIG1hbmFnZSB5b3VyIG93biB0cmliZS5cclxuICAgICAgICAgICAgICBBIHRyaWJlIHRoYXQgdG9nZXRoZXIgaGFzIHRoZSBwb3dlciB0byBjcmVhdGUgbmV3IGFmZm9yZGFibGVcclxuICAgICAgICAgICAgICBzb2x1dGlvbnMgaW4gY2hpbGRjYXJlIHRoYXQgd29yayBmb3IgeW91IGFuZCB5b3VyIGNvbW11bml0eS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5SZWFkeSB0byBnZXQgc3RhcnRlZD88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgzPkFyZSB5b3UgYSBwYXJlbnQgd2l0aG91dCBhIG5hbm55IGFuZCBsb29raW5nIHRvIHNoYXJlPzwvaDM+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgTGVhdmUgdXMgeW91ciBuYW1lIGFuZCBlbWFpbCBhbmQgd2XigJlsbCB1cGRhdGUgeW91IGFzIHNvb24gYXMgYSBzaGFyZVxyXG4gICAgICAgICAgICBiZWNvbWVzIGF2YWlsYWJsZSBpbiB5b3VyIGFyZWEhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17c3Vic2NyaWJlTmV3c2xldHRlcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGVJbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGVJbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDBDODhDXCIsIGNvbG9yOiBcIiNGRkZGRkZcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmVkIHBheW1lbnRzIG1hZGUgc2ltcGxlPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU29tZXRpbWVzIGl04oCZcyBoYXJkIGVub3VnaCBqdXN0IHNoYXJpbmcgYSByZXN0YXVyYW50IGJpbGwuIFRyeVxyXG4gICAgICAgICAgICAgIHNoYXJpbmcgdGhhdCBiaWxsIHdlZWsgaW4sIHdlZWsgb3V0IGFuZCB5b3UgbWlnaHQgZW5jb3VudGVyIG1vcmVcclxuICAgICAgICAgICAgICB0aGFuIGEgZmV3IHNuYXJlcy4gQnV0IG5vdCB3aXRoIEhhcHUuIFNpbXBseSBzZXQgeW91ciByYXRlcyBhbmRcclxuICAgICAgICAgICAgICBvdXIgYXV0b21hdGVkIHBheW1lbnQgc3lzdGVtIHRha2VzIGNhcmUgb2YgdGhlIHJlc3QuIFlvdSBuZWVkXHJcbiAgICAgICAgICAgICAgbmV2ZXIgdGFsayBtb25leSBvciB3aG8gb3dlcyB3aGF0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXdkYXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICBSZWFkIGhvdyBCcmlkZ2V04oCZcyBzaGFyZSAod2l0aG91dCBIYXB1KSBlbmRlZCBvdmVyICQxNVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjN9XHJcbiAgICAgICAgICAgICAgYWx0PVwiVGFibGUgd2l0aCBzaW11bGF0aW9uIHNoYXJlIGluIGEgbGFwdG9wXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5BIGZyYW1ld29yayBidWlsdCBmb3IgdGhlIGxvbmcgdGVybTwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIENoaWxkY2FyZSBpcyBmb3IgdGhlIGxvbmcgdGVybS4gQW5kIHlvdSBuZWVkIGEgZnJhbWV3b3JrIHlvdSBjYW5cclxuICAgICAgICAgICAgY291bnQgb24gdGhhdCBnaXZlcyB5b3VyIHNoYXJlIGxvbmcgdGVybSB2aWFiaWxpdHkgYW5kIHN1Y2Nlc3MuXHJcbiAgICAgICAgICAgIFRoYXTigJlzIHdoeSB3ZeKAmXZlIGRlZmluZWQgSGFwdSBhcm91bmQgb3VyIHRocmVlIHRyaWJhbCBwcmluY2lwbGVzO1xyXG4gICAgICAgICAgICBjbGVhcmx5IGRlZmluZWQgcHJvY2VzcywgdHJhbnNwYXJlbmN5IG92ZXIgbW9uZXkgYW5kIGVxdWFsaXR5IG9mXHJcbiAgICAgICAgICAgIHBhcnRpY2lwYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgUmVhZCBob3cgSGFwdeKAmXMgdHJpYmFsIGJhY2tncm91bmQgZGVmaW5lcyBvdXIgYXBwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJkaXNwbGF5Tm9uZVwiIHN0eWxlPXt7IG1hcmdpbjogXCI0OHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb240fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8Zm9vdGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI0OHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNX1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPGgyPkNvbWluZyBzb29uOiBOYW5ueSBTaGFyZSBEYWlseSBEaWFyeSE8L2gyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICBXaXRoIHRoZSBIYXB1IGRhaWx5IGRpYXJ5IHlvdXIgbmFubnkgd2lsbCBiZSBhYmxlIHRvIHVwZGF0ZSB5b3UgYW5kXHJcbiAgICAgICAgICAgIHlvdXIgc2hhcmVycyB3aXRoIHBob3RvcyBhbmQgY29tbWVudGFyeSBvZiB0aGUgZGF5LiBZb3UgYW5kIHNoYXJlcnNcclxuICAgICAgICAgICAgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYW5kIHlvdeKAmWxsIGJlIGFibGUgdG8gbG9naW4gdG8gdmlldyB0aGVcclxuICAgICAgICAgICAgZGFpbHkgYWR2ZW50dXJlcyBmbyB5b3VyIGxpdHRsZSBvbmVzLiBXZSBjYW7igJl0IHdhaXQhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsImltYWdlU2VjdGlvbiIsImltYWdlU2VjdGlvbjMiLCJpbWFnZVNlY3Rpb240IiwiaW1hZ2VTZWN0aW9uNSIsInN0eWxlcyIsIk1haW5Db21wb25lbnQiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJhcnRpY2xlIiwic2VjdGlvblJpZ2h0Iiwic2VjdGlvblRleHQiLCJzZWN0aW9uTGVmdCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvcm0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=