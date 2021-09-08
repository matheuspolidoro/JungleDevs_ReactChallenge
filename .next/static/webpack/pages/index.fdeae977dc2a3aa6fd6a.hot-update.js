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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_ImageSection1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/ImageSection1.png */ "./assets/ImageSection1.png");
/* harmony import */ var _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/ImageSection3.png */ "./assets/ImageSection3.png");
/* harmony import */ var _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/ImageSection4.png */ "./assets/ImageSection4.png");
/* harmony import */ var _assets_ImageSection5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/ImageSection5.png */ "./assets/ImageSection5.png");
/* harmony import */ var _styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/MainComponent.module.css */ "./src/styles/MainComponent.module.css");
/* harmony import */ var _styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mathe\\Desktop\\JungleDevs_ReactChallenge\\src\\components\\MainComponent.js",
    _this = undefined,
    _s = $RefreshSig$();












var ResponseSnackbar = function ResponseSnackbar(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
    children: " aaa"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, _this);
};

_c = ResponseSnackbar;
function MainComponent() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      hasNewResponse = _useState[0],
      setHasNewResponse = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      responseDetail = _useState2[0],
      setResponseDetail = _useState2[1];

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
              console.log("response ", response);
              console.log("result ", result); // result.user => 'Ada Lovelace'

            case 10:
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("main", {
      className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("article", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionRight),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection1_png__WEBPACK_IMPORTED_MODULE_5__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Share your home,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "nanny and costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Ready to get started?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
          children: "Are you a parent without a nanny and looking to share?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("form", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().form),
          onSubmit: subscribeNewsletter,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            id: "name",
            type: "text",
            placeholder: "Your name",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            id: "email",
            type: "email",
            placeholder: "Your email",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            type: "submit",
            className: "button",
            style: {
              backgroundColor: "#00C88C",
              color: "#FFFFFF"
            },
            children: "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "A framework built for the long term"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("aside", {
          className: "displayNone",
          style: {
            margin: "48px 0"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_7__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("footer", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          style: {
            marginBottom: "48px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection5_png__WEBPACK_IMPORTED_MODULE_8__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

_s(MainComponent, "XG31vFdjf8oURAbLkNvbNpgQkuc=");

_c2 = MainComponent;

var _c, _c2;

$RefreshReg$(_c, "ResponseSnackbar");
$RefreshReg$(_c2, "MainComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmRlYWU5NzdkYzJhM2FhNmZkNmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1RLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUZEOztLQUFNRDtBQUlTLFNBQVNFLGFBQVQsR0FBeUI7QUFBQTs7QUFDdEMsa0JBQTRDUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQSxNQUFPUyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBNENWLCtDQUFRLENBQUMsRUFBRCxDQUFwRDtBQUFBLE1BQU9XLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLE1BQU1DLG1CQUFtQjtBQUFBLGlUQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkEsY0FBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRU1DLGNBQUFBLFFBSG9CLEdBR1Q7QUFDZkMsZ0JBQUFBLElBQUksRUFBRUgsS0FBSyxDQUFDSSxNQUFOLENBQWFELElBQWIsQ0FBa0JFLEtBRFQ7QUFFZkMsZ0JBQUFBLEtBQUssRUFBRU4sS0FBSyxDQUFDSSxNQUFOLENBQWFFLEtBQWIsQ0FBbUJEO0FBRlgsZUFIUztBQUFBO0FBQUEscUJBUUhFLEtBQUssQ0FDMUIseURBRDBCLEVBRTFCO0FBQ0VDLGdCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixRQUFmLENBRFI7QUFFRVMsZ0JBQUFBLE9BQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZYO0FBS0VDLGdCQUFBQSxNQUFNLEVBQUU7QUFMVixlQUYwQixDQVJGOztBQUFB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QUEsVUFERjtBQThJRDs7R0EzS3VCbkM7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjEucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24zIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMy5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb240LnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNSBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjUucG5nXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NYWluQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlU25hY2tiYXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gPGgyPiBhYWE8L2gyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Db21wb25lbnQoKSB7XHJcbiAgY29uc3QgW2hhc05ld1Jlc3BvbnNlLCBzZXRIYXNOZXdSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlRGV0YWlsLCBzZXRSZXNwb25zZURldGFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlTmV3c2xldHRlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuanVuZ2xlZGV2cy5jb20vYXBpL3YxL2NoYWxsZW5nZS1uZXdzbGV0dGVyL1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIFwiLCByZXNwb25zZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBcIiwgcmVzdWx0KTtcclxuICAgIC8vIHJlc3VsdC51c2VyID0+ICdBZGEgTG92ZWxhY2UnXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uUmlnaHR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbn1cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlIHlvdXIgaG9tZSw8L2gyPlxyXG4gICAgICAgICAgICA8aDI+bmFubnkgYW5kIGNvc3RzPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgWW91IGhhdmUgYSBmYW50YXN0aWMgaG9tZSwgYSBmYW50YXN0aWMgbmFubnkgYW5kIHdvdWxkbuKAmXQgY3V0dGluZ1xyXG4gICAgICAgICAgICAgIHlvdXIgY29zdHMgaW4gaGFsZiBiZSwgd2VsbCwgZmFudGFzdGljPyEgSWYgb25seSBpdCB3YXMgZWFzeSB0b1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBvdGhlciBwYXJlbnRzIHRvIHNoYXJlIHlvdXIgY29zdHM/IFdlbGwgbm93IGl0IGlzLFxyXG4gICAgICAgICAgICAgIHdpdGggSGFwdS4gSGFwdSBtZWFucyB0cmliZSBhbmQgaXTigJlzIG91ciBmb3VuZGF0aW9uYWwgMyB0cmliYWxcclxuICAgICAgICAgICAgICBwcmluY2lwbGVzIHRoYXQgZW1wb3dlcnMgeW91IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHlvdXIgb3duIHRyaWJlLlxyXG4gICAgICAgICAgICAgIEEgdHJpYmUgdGhhdCB0b2dldGhlciBoYXMgdGhlIHBvd2VyIHRvIGNyZWF0ZSBuZXcgYWZmb3JkYWJsZVxyXG4gICAgICAgICAgICAgIHNvbHV0aW9ucyBpbiBjaGlsZGNhcmUgdGhhdCB3b3JrIGZvciB5b3UgYW5kIHlvdXIgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlJlYWR5IHRvIGdldCBzdGFydGVkPzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDM+QXJlIHlvdSBhIHBhcmVudCB3aXRob3V0IGEgbmFubnkgYW5kIGxvb2tpbmcgdG8gc2hhcmU/PC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMZWF2ZSB1cyB5b3VyIG5hbWUgYW5kIGVtYWlsIGFuZCB3ZeKAmWxsIHVwZGF0ZSB5b3UgYXMgc29vbiBhcyBhIHNoYXJlXHJcbiAgICAgICAgICAgIGJlY29tZXMgYXZhaWxhYmxlIGluIHlvdXIgYXJlYSFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtzdWJzY3JpYmVOZXdzbGV0dGVyfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMEM4OENcIiwgY29sb3I6IFwiI0ZGRkZGRlwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxoMj5TaGFyZWQgcGF5bWVudHMgbWFkZSBzaW1wbGU8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTb21ldGltZXMgaXTigJlzIGhhcmQgZW5vdWdoIGp1c3Qgc2hhcmluZyBhIHJlc3RhdXJhbnQgYmlsbC4gVHJ5XHJcbiAgICAgICAgICAgICAgc2hhcmluZyB0aGF0IGJpbGwgd2VlayBpbiwgd2VlayBvdXQgYW5kIHlvdSBtaWdodCBlbmNvdW50ZXIgbW9yZVxyXG4gICAgICAgICAgICAgIHRoYW4gYSBmZXcgc25hcmVzLiBCdXQgbm90IHdpdGggSGFwdS4gU2ltcGx5IHNldCB5b3VyIHJhdGVzIGFuZFxyXG4gICAgICAgICAgICAgIG91ciBhdXRvbWF0ZWQgcGF5bWVudCBzeXN0ZW0gdGFrZXMgY2FyZSBvZiB0aGUgcmVzdC4gWW91IG5lZWRcclxuICAgICAgICAgICAgICBuZXZlciB0YWxrIG1vbmV5IG9yIHdobyBvd2VzIHdoYXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hd2Rhc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIFJlYWQgaG93IEJyaWRnZXTigJlzIHNoYXJlICh3aXRob3V0IEhhcHUpIGVuZGVkIG92ZXIgJDE1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uM31cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyPkEgZnJhbWV3b3JrIGJ1aWx0IGZvciB0aGUgbG9uZyB0ZXJtPC9oMj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgQ2hpbGRjYXJlIGlzIGZvciB0aGUgbG9uZyB0ZXJtLiBBbmQgeW91IG5lZWQgYSBmcmFtZXdvcmsgeW91IGNhblxyXG4gICAgICAgICAgICBjb3VudCBvbiB0aGF0IGdpdmVzIHlvdXIgc2hhcmUgbG9uZyB0ZXJtIHZpYWJpbGl0eSBhbmQgc3VjY2Vzcy5cclxuICAgICAgICAgICAgVGhhdOKAmXMgd2h5IHdl4oCZdmUgZGVmaW5lZCBIYXB1IGFyb3VuZCBvdXIgdGhyZWUgdHJpYmFsIHByaW5jaXBsZXM7XHJcbiAgICAgICAgICAgIGNsZWFybHkgZGVmaW5lZCBwcm9jZXNzLCB0cmFuc3BhcmVuY3kgb3ZlciBtb25leSBhbmQgZXF1YWxpdHkgb2ZcclxuICAgICAgICAgICAgcGFydGljaXBhdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICBSZWFkIGhvdyBIYXB14oCZcyB0cmliYWwgYmFja2dyb3VuZCBkZWZpbmVzIG91ciBhcHBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImRpc3BsYXlOb25lXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjQ4cHggMFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjR9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRGVtb25zdHJhdGlvbiBsaXN0IG9mIHBhaWQgYmlsbGluZ3MgZnJvbSBhIG5hbm55IHNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxmb290ZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjQ4cHhcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb241fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8aDI+Q29taW5nIHNvb246IE5hbm55IFNoYXJlIERhaWx5IERpYXJ5ITwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIFdpdGggdGhlIEhhcHUgZGFpbHkgZGlhcnkgeW91ciBuYW5ueSB3aWxsIGJlIGFibGUgdG8gdXBkYXRlIHlvdSBhbmRcclxuICAgICAgICAgICAgeW91ciBzaGFyZXJzIHdpdGggcGhvdG9zIGFuZCBjb21tZW50YXJ5IG9mIHRoZSBkYXkuIFlvdSBhbmQgc2hhcmVyc1xyXG4gICAgICAgICAgICB3aWxsIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBhbmQgeW914oCZbGwgYmUgYWJsZSB0byBsb2dpbiB0byB2aWV3IHRoZVxyXG4gICAgICAgICAgICBkYWlseSBhZHZlbnR1cmVzIGZvIHlvdXIgbGl0dGxlIG9uZXMuIFdlIGNhbuKAmXQgd2FpdCFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlU3RhdGUiLCJpbWFnZVNlY3Rpb24iLCJpbWFnZVNlY3Rpb24zIiwiaW1hZ2VTZWN0aW9uNCIsImltYWdlU2VjdGlvbjUiLCJzdHlsZXMiLCJSZXNwb25zZVNuYWNrYmFyIiwicHJvcHMiLCJNYWluQ29tcG9uZW50IiwiaGFzTmV3UmVzcG9uc2UiLCJzZXRIYXNOZXdSZXNwb25zZSIsInJlc3BvbnNlRGV0YWlsIiwic2V0UmVzcG9uc2VEZXRhaWwiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iXSwic291cmNlUm9vdCI6IiJ9