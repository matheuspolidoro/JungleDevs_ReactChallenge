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
      className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),
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
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().divider)
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
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().divider)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
        style: {
          display: "flex",
          marginBottom: "50px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionLeft),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_5__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionRight)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().divider)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
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
          lineNumber: 135,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("aside", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionImage), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().sectionRight)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("hr", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_9___default().divider)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
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
            lineNumber: 164,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTMyMDRhMmRhZGU2Yzk4ZDE2MWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNPLGFBQVQsR0FBeUI7QUFDdEMsTUFBTUMsbUJBQW1CO0FBQUEsaVRBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFTUMsY0FBQUEsUUFIb0IsR0FHVDtBQUNmQyxnQkFBQUEsSUFBSSxFQUFFSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUQsSUFBYixDQUFrQkUsS0FEVDtBQUVmQyxnQkFBQUEsS0FBSyxFQUFFTixLQUFLLENBQUNJLE1BQU4sQ0FBYUUsS0FBYixDQUFtQkQ7QUFGWCxlQUhTO0FBQUE7QUFBQSxxQkFRSEUsS0FBSyxDQUMxQix5REFEMEIsRUFFMUI7QUFDRUMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLFFBQWYsQ0FEUjtBQUVFUyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRlg7QUFLRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUxWLGVBRjBCLENBUkY7O0FBQUE7QUFRcEJDLGNBQUFBLFFBUm9CO0FBQUE7QUFBQSxxQkFtQkxBLFFBQVEsQ0FBQ0MsSUFBVCxFQW5CSzs7QUFBQTtBQW1CcEJDLGNBQUFBLE1BbkJvQjtBQW9CMUJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE1BQXZCLEVBcEIwQixDQXFCMUI7O0FBckIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQmhCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUF3QkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVGLG1GQUFoQjtB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QUFBQTtBQUFBO0FBQUEsY0EvRkYsZUF5SEU7QUFBSSxpQkFBUyxFQUFFRSxpRkFBYzJCO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6SEYsZUEySEU7QUFDRSxpQkFBUyxZQUFLM0IscUZBQUwsZUFBNEJBLHFGQUE1QixDQURYO0FBRUUsYUFBSyxFQUFFO0FBQUU0QixVQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QkMsVUFBQUEsY0FBYyxFQUFFO0FBQXhDLFNBRlQ7QUFBQSxnQ0FJRTtBQUFTLGVBQUssRUFBRTtBQUFFSyxZQUFBQSxZQUFZLEVBQUU7QUFBaEIsV0FBaEI7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRW5DLDhEQURQO0FBRUUsZUFBRyxFQUFDLDBEQUZOO0FBR0UsbUJBQU8sRUFBRTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRTtBQUFHLGVBQUssRUFBRTtBQUFFb0MsWUFBQUEsU0FBUyxFQUFFO0FBQWIsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUpEO0tBNUt1QmxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjEucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24zIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMy5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb240LnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNSBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjUucG5nXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NYWluQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Db21wb25lbnQoKSB7XHJcbiAgY29uc3Qgc3Vic2NyaWJlTmV3c2xldHRlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuanVuZ2xlZGV2cy5jb20vYXBpL3YxL2NoYWxsZW5nZS1uZXdzbGV0dGVyL1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBcIiwgcmVzdWx0KTtcclxuICAgIC8vIHJlc3VsdC51c2VyID0+ICdBZGEgTG92ZWxhY2UnXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uUmlnaHR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbn1cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlIHlvdXIgaG9tZSw8L2gyPlxyXG4gICAgICAgICAgICA8aDI+bmFubnkgYW5kIGNvc3RzPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgWW91IGhhdmUgYSBmYW50YXN0aWMgaG9tZSwgYSBmYW50YXN0aWMgbmFubnkgYW5kIHdvdWxkbuKAmXQgY3V0dGluZ1xyXG4gICAgICAgICAgICAgIHlvdXIgY29zdHMgaW4gaGFsZiBiZSwgd2VsbCwgZmFudGFzdGljPyEgSWYgb25seSBpdCB3YXMgZWFzeSB0b1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBvdGhlciBwYXJlbnRzIHRvIHNoYXJlIHlvdXIgY29zdHM/IFdlbGwgbm93IGl0IGlzLFxyXG4gICAgICAgICAgICAgIHdpdGggSGFwdS4gSGFwdSBtZWFucyB0cmliZSBhbmQgaXTigJlzIG91ciBmb3VuZGF0aW9uYWwgMyB0cmliYWxcclxuICAgICAgICAgICAgICBwcmluY2lwbGVzIHRoYXQgZW1wb3dlcnMgeW91IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHlvdXIgb3duIHRyaWJlLlxyXG4gICAgICAgICAgICAgIEEgdHJpYmUgdGhhdCB0b2dldGhlciBoYXMgdGhlIHBvd2VyIHRvIGNyZWF0ZSBuZXcgYWZmb3JkYWJsZVxyXG4gICAgICAgICAgICAgIHNvbHV0aW9ucyBpbiBjaGlsZGNhcmUgdGhhdCB3b3JrIGZvciB5b3UgYW5kIHlvdXIgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlJlYWR5IHRvIGdldCBzdGFydGVkPzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJ9IC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMz5BcmUgeW91IGEgcGFyZW50IHdpdGhvdXQgYSBuYW5ueSBhbmQgbG9va2luZyB0byBzaGFyZT88L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExlYXZlIHVzIHlvdXIgbmFtZSBhbmQgZW1haWwgYW5kIHdl4oCZbGwgdXBkYXRlIHlvdSBhcyBzb29uIGFzIGEgc2hhcmVcclxuICAgICAgICAgICAgYmVjb21lcyBhdmFpbGFibGUgaW4geW91ciBhcmVhIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3N1YnNjcmliZU5ld3NsZXR0ZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQzg4Q1wiLCBjb2xvcjogXCIjRkZGRkZGXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uTGVmdH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uM31cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvblJpZ2h0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmVkIHBheW1lbnRzIG1hZGUgc2ltcGxlPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU29tZXRpbWVzIGl04oCZcyBoYXJkIGVub3VnaCBqdXN0IHNoYXJpbmcgYSByZXN0YXVyYW50IGJpbGwuIFRyeVxyXG4gICAgICAgICAgICAgIHNoYXJpbmcgdGhhdCBiaWxsIHdlZWsgaW4sIHdlZWsgb3V0IGFuZCB5b3UgbWlnaHQgZW5jb3VudGVyIG1vcmVcclxuICAgICAgICAgICAgICB0aGFuIGEgZmV3IHNuYXJlcy4gQnV0IG5vdCB3aXRoIEhhcHUuIFNpbXBseSBzZXQgeW91ciByYXRlcyBhbmRcclxuICAgICAgICAgICAgICBvdXIgYXV0b21hdGVkIHBheW1lbnQgc3lzdGVtIHRha2VzIGNhcmUgb2YgdGhlIHJlc3QuIFlvdSBuZWVkXHJcbiAgICAgICAgICAgICAgbmV2ZXIgdGFsayBtb25leSBvciB3aG8gb3dlcyB3aGF0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXdkYXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICBSZWFkIGhvdyBCcmlkZ2V04oCZcyBzaGFyZSAod2l0aG91dCBIYXB1KSBlbmRlZCBvdmVyICQxNVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJ9IC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5BIGZyYW1ld29yayBidWlsdCBmb3IgdGhlIGxvbmcgdGVybTwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIENoaWxkY2FyZSBpcyBmb3IgdGhlIGxvbmcgdGVybS4gQW5kIHlvdSBuZWVkIGEgZnJhbWV3b3JrIHlvdSBjYW5cclxuICAgICAgICAgICAgY291bnQgb24gdGhhdCBnaXZlcyB5b3VyIHNoYXJlIGxvbmcgdGVybSB2aWFiaWxpdHkgYW5kIHN1Y2Nlc3MuXHJcbiAgICAgICAgICAgIFRoYXTigJlzIHdoeSB3ZeKAmXZlIGRlZmluZWQgSGFwdSBhcm91bmQgb3VyIHRocmVlIHRyaWJhbCBwcmluY2lwbGVzO1xyXG4gICAgICAgICAgICBjbGVhcmx5IGRlZmluZWQgcHJvY2VzcywgdHJhbnNwYXJlbmN5IG92ZXIgbW9uZXkgYW5kIGVxdWFsaXR5IG9mXHJcbiAgICAgICAgICAgIHBhcnRpY2lwYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgUmVhZCBob3cgSGFwdeKAmXMgdHJpYmFsIGJhY2tncm91bmQgZGVmaW5lcyBvdXIgYXBwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uSW1hZ2V9ICAke3N0eWxlcy5zZWN0aW9uUmlnaHR9YH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNH1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5kaXZpZGVyfSAvPlxyXG5cclxuICAgICAgICA8Zm9vdGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI0OHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNX1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPGgyPkNvbWluZyBzb29uOiBOYW5ueSBTaGFyZSBEYWlseSBEaWFyeSE8L2gyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICBXaXRoIHRoZSBIYXB1IGRhaWx5IGRpYXJ5IHlvdXIgbmFubnkgd2lsbCBiZSBhYmxlIHRvIHVwZGF0ZSB5b3UgYW5kXHJcbiAgICAgICAgICAgIHlvdXIgc2hhcmVycyB3aXRoIHBob3RvcyBhbmQgY29tbWVudGFyeSBvZiB0aGUgZGF5LiBZb3UgYW5kIHNoYXJlcnNcclxuICAgICAgICAgICAgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYW5kIHlvdeKAmWxsIGJlIGFibGUgdG8gbG9naW4gdG8gdmlldyB0aGVcclxuICAgICAgICAgICAgZGFpbHkgYWR2ZW50dXJlcyBmbyB5b3VyIGxpdHRsZSBvbmVzLiBXZSBjYW7igJl0IHdhaXQhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsImltYWdlU2VjdGlvbiIsImltYWdlU2VjdGlvbjMiLCJpbWFnZVNlY3Rpb240IiwiaW1hZ2VTZWN0aW9uNSIsInN0eWxlcyIsIk1haW5Db21wb25lbnQiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJkaXZpZGVyIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9ybSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiZGlzcGxheSIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsInNlY3Rpb25JbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=