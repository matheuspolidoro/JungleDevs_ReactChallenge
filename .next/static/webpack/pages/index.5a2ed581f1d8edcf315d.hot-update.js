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
            textAlign: "center",
            fontSize: "12px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWEyZWQ1ODFmMWQ4ZWRjZjMxNWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNPLGFBQVQsR0FBeUI7QUFDdEMsTUFBTUMsbUJBQW1CO0FBQUEsaVRBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCQSxjQUFBQSxLQUFLLENBQUNDLGNBQU47QUFFTUMsY0FBQUEsUUFIb0IsR0FHVDtBQUNmQyxnQkFBQUEsSUFBSSxFQUFFSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUQsSUFBYixDQUFrQkUsS0FEVDtBQUVmQyxnQkFBQUEsS0FBSyxFQUFFTixLQUFLLENBQUNJLE1BQU4sQ0FBYUUsS0FBYixDQUFtQkQ7QUFGWCxlQUhTO0FBQUE7QUFBQSxxQkFRSEUsS0FBSyxDQUMxQix5REFEMEIsRUFFMUI7QUFDRUMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLFFBQWYsQ0FEUjtBQUVFUyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBRlg7QUFLRUMsZ0JBQUFBLE1BQU0sRUFBRTtBQUxWLGVBRjBCLENBUkY7O0FBQUE7QUFRcEJDLGNBQUFBLFFBUm9CO0FBQUE7QUFBQSxxQkFtQkxBLFFBQVEsQ0FBQ0MsSUFBVCxFQW5CSzs7QUFBQTtBQW1CcEJDLGNBQUFBLE1BbkJvQjtBQW9CMUJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJGLE1BQXZCLEVBcEIwQixDQXFCMUI7O0FBckIwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQmhCLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUF3QkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVGLG1GQUFoQjtB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QUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEhGLGVBc0hFO0FBQ0UsaUJBQVMsWUFBS0UscUZBQUwsZUFBNEJBLHFGQUE1QixDQURYO0FBRUUsYUFBSyxFQUFFO0FBQUUyQixVQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QkMsVUFBQUEsY0FBYyxFQUFFO0FBQXhDLFNBRlQ7QUFBQSxnQ0FJRTtBQUFTLGVBQUssRUFBRTtBQUFFTSxZQUFBQSxZQUFZLEVBQUU7QUFBaEIsV0FBaEI7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRW5DLDhEQURQO0FBRUUsZUFBRyxFQUFDLDBEQUZOO0FBR0UsbUJBQU8sRUFBRTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRTtBQUFHLGVBQUssRUFBRTtBQUFFaUMsWUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJHLFlBQUFBLFFBQVEsRUFBRTtBQUFqQyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4SUQ7S0F2S3VCbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMS5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb24zLnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNCBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjQucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb241IGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uNS5wbmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01haW5Db21wb25lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudCgpIHtcclxuICBjb25zdCBzdWJzY3JpYmVOZXdzbGV0dGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcclxuICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS5qdW5nbGVkZXZzLmNvbS9hcGkvdjEvY2hhbGxlbmdlLW5ld3NsZXR0ZXIvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IFwiLCByZXN1bHQpO1xyXG4gICAgLy8gcmVzdWx0LnVzZXIgPT4gJ0FkYSBMb3ZlbGFjZSdcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25SaWdodH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9ufVxyXG4gICAgICAgICAgICAgIGFsdD1cIlRhYmxlIHdpdGggc2ltdWxhdGlvbiBzaGFyZSBpbiBhIGxhcHRvcFwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmUgeW91ciBob21lLDwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5uYW5ueSBhbmQgY29zdHM8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBZb3UgaGF2ZSBhIGZhbnRhc3RpYyBob21lLCBhIGZhbnRhc3RpYyBuYW5ueSBhbmQgd291bGRu4oCZdCBjdXR0aW5nXHJcbiAgICAgICAgICAgICAgeW91ciBjb3N0cyBpbiBoYWxmIGJlLCB3ZWxsLCBmYW50YXN0aWM/ISBJZiBvbmx5IGl0IHdhcyBlYXN5IHRvXHJcbiAgICAgICAgICAgICAgY29ubmVjdCB3aXRoIG90aGVyIHBhcmVudHMgdG8gc2hhcmUgeW91ciBjb3N0cz8gV2VsbCBub3cgaXQgaXMsXHJcbiAgICAgICAgICAgICAgd2l0aCBIYXB1LiBIYXB1IG1lYW5zIHRyaWJlIGFuZCBpdOKAmXMgb3VyIGZvdW5kYXRpb25hbCAzIHRyaWJhbFxyXG4gICAgICAgICAgICAgIHByaW5jaXBsZXMgdGhhdCBlbXBvd2VycyB5b3UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgeW91ciBvd24gdHJpYmUuXHJcbiAgICAgICAgICAgICAgQSB0cmliZSB0aGF0IHRvZ2V0aGVyIGhhcyB0aGUgcG93ZXIgdG8gY3JlYXRlIG5ldyBhZmZvcmRhYmxlXHJcbiAgICAgICAgICAgICAgc29sdXRpb25zIGluIGNoaWxkY2FyZSB0aGF0IHdvcmsgZm9yIHlvdSBhbmQgeW91ciBjb21tdW5pdHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+UmVhZHkgdG8gZ2V0IHN0YXJ0ZWQ/PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMz5BcmUgeW91IGEgcGFyZW50IHdpdGhvdXQgYSBuYW5ueSBhbmQgbG9va2luZyB0byBzaGFyZT88L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExlYXZlIHVzIHlvdXIgbmFtZSBhbmQgZW1haWwgYW5kIHdl4oCZbGwgdXBkYXRlIHlvdSBhcyBzb29uIGFzIGEgc2hhcmVcclxuICAgICAgICAgICAgYmVjb21lcyBhdmFpbGFibGUgaW4geW91ciBhcmVhIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3N1YnNjcmliZU5ld3NsZXR0ZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQzg4Q1wiLCBjb2xvcjogXCIjRkZGRkZGXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlZCBwYXltZW50cyBtYWRlIHNpbXBsZTwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFNvbWV0aW1lcyBpdOKAmXMgaGFyZCBlbm91Z2gganVzdCBzaGFyaW5nIGEgcmVzdGF1cmFudCBiaWxsLiBUcnlcclxuICAgICAgICAgICAgICBzaGFyaW5nIHRoYXQgYmlsbCB3ZWVrIGluLCB3ZWVrIG91dCBhbmQgeW91IG1pZ2h0IGVuY291bnRlciBtb3JlXHJcbiAgICAgICAgICAgICAgdGhhbiBhIGZldyBzbmFyZXMuIEJ1dCBub3Qgd2l0aCBIYXB1LiBTaW1wbHkgc2V0IHlvdXIgcmF0ZXMgYW5kXHJcbiAgICAgICAgICAgICAgb3VyIGF1dG9tYXRlZCBwYXltZW50IHN5c3RlbSB0YWtlcyBjYXJlIG9mIHRoZSByZXN0LiBZb3UgbmVlZFxyXG4gICAgICAgICAgICAgIG5ldmVyIHRhbGsgbW9uZXkgb3Igd2hvIG93ZXMgd2hhdC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F3ZGFzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgUmVhZCBob3cgQnJpZGdldOKAmXMgc2hhcmUgKHdpdGhvdXQgSGFwdSkgZW5kZWQgb3ZlciAkMTVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb24zfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlRhYmxlIHdpdGggc2ltdWxhdGlvbiBzaGFyZSBpbiBhIGxhcHRvcFwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDI+QSBmcmFtZXdvcmsgYnVpbHQgZm9yIHRoZSBsb25nIHRlcm08L2gyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICBDaGlsZGNhcmUgaXMgZm9yIHRoZSBsb25nIHRlcm0uIEFuZCB5b3UgbmVlZCBhIGZyYW1ld29yayB5b3UgY2FuXHJcbiAgICAgICAgICAgIGNvdW50IG9uIHRoYXQgZ2l2ZXMgeW91ciBzaGFyZSBsb25nIHRlcm0gdmlhYmlsaXR5IGFuZCBzdWNjZXNzLlxyXG4gICAgICAgICAgICBUaGF04oCZcyB3aHkgd2XigJl2ZSBkZWZpbmVkIEhhcHUgYXJvdW5kIG91ciB0aHJlZSB0cmliYWwgcHJpbmNpcGxlcztcclxuICAgICAgICAgICAgY2xlYXJseSBkZWZpbmVkIHByb2Nlc3MsIHRyYW5zcGFyZW5jeSBvdmVyIG1vbmV5IGFuZCBlcXVhbGl0eSBvZlxyXG4gICAgICAgICAgICBwYXJ0aWNpcGF0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgIFJlYWQgaG93IEhhcHXigJlzIHRyaWJhbCBiYWNrZ3JvdW5kIGRlZmluZXMgb3VyIGFwcFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZGlzcGxheU5vbmVcIiBzdHlsZT17eyBtYXJnaW46IFwiNDhweCAwXCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNH1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPGZvb3RlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNDhweFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjV9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRGVtb25zdHJhdGlvbiBsaXN0IG9mIHBhaWQgYmlsbGluZ3MgZnJvbSBhIG5hbm55IHNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxoMj5Db21pbmcgc29vbjogTmFubnkgU2hhcmUgRGFpbHkgRGlhcnkhPC9oMj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6IFwiMTJweFwiIH19PlxyXG4gICAgICAgICAgICBXaXRoIHRoZSBIYXB1IGRhaWx5IGRpYXJ5IHlvdXIgbmFubnkgd2lsbCBiZSBhYmxlIHRvIHVwZGF0ZSB5b3UgYW5kXHJcbiAgICAgICAgICAgIHlvdXIgc2hhcmVycyB3aXRoIHBob3RvcyBhbmQgY29tbWVudGFyeSBvZiB0aGUgZGF5LiBZb3UgYW5kIHNoYXJlcnNcclxuICAgICAgICAgICAgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYW5kIHlvdeKAmWxsIGJlIGFibGUgdG8gbG9naW4gdG8gdmlldyB0aGVcclxuICAgICAgICAgICAgZGFpbHkgYWR2ZW50dXJlcyBmbyB5b3VyIGxpdHRsZSBvbmVzLiBXZSBjYW7igJl0IHdhaXQhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsImltYWdlU2VjdGlvbiIsImltYWdlU2VjdGlvbjMiLCJpbWFnZVNlY3Rpb240IiwiaW1hZ2VTZWN0aW9uNSIsInN0eWxlcyIsIk1haW5Db21wb25lbnQiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=