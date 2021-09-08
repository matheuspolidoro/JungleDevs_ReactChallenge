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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();












var ResponseSnackbar = function ResponseSnackbar(_ref) {
  _s();

  var response = _ref.response,
      setHasNewResponse = _ref.setHasNewResponse;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      divContent = _useState[0],
      setDivContent = _useState[1];

  function switchDiv() {
    switch (response.status) {
      case 500:
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          style: {
            backgroundColor: "orange",
            padding: "8px",
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this));

      case "400":
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          style: {
            backgroundColor: "red",
            padding: "8px",
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this));

      case 200:
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          style: {
            backgroundColor: "green",
            borderRadius: "4px",
            padding: "8px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "ok"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this));
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    switchDiv();
  }, response);
  return divContent;
};

_s(ResponseSnackbar, "9XciAVYvygNzIZZVV+5FOJJNWQk=");

_c = ResponseSnackbar;
function MainComponent() {
  _s2();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      hasNewResponse = _useState2[0],
      setHasNewResponse = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      responseDetail = _useState3[0],
      setResponseDetail = _useState3[1];

  var subscribeNewsletter = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
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
              console.log("result first: ", result);
              console.log("response first: ", response);
              setHasNewResponse(true);
              setResponseDetail(response);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function subscribeNewsletter(_x) {
      return _ref2.apply(this, arguments);
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
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Share your home,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "nanny and costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Ready to get started?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
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
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
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
            lineNumber: 137,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            id: "email",
            type: "email",
            placeholder: "Your email",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
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
            lineNumber: 149,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), hasNewResponse ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ResponseSnackbar, {
          response: responseDetail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, this) : false]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
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
          lineNumber: 197,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
            lineNumber: 211,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
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
            lineNumber: 226,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

_s2(MainComponent, "XG31vFdjf8oURAbLkNvbNpgQkuc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmZlMDU1N2MyMDhmOWViYzYzYTMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCOztBQUM1RCxrQkFBb0NSLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQixZQUFRSixRQUFRLENBQUNLLE1BQWpCO0FBQ0UsV0FBSyxHQUFMO0FBQ0VGLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNMRyxZQUFBQSxlQUFlLEVBQUUsUUFEWjtBQUVMQyxZQUFBQSxPQUFPLEVBQUUsS0FGSjtBQUdMQyxZQUFBQSxZQUFZLEVBQUUsS0FIVDtBQUlMQyxZQUFBQSxLQUFLLEVBQUU7QUFKRixXQURUO0FBQUEsaUNBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURXLENBQWI7O0FBWUYsV0FBSyxLQUFMO0FBQ0VOLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNMRyxZQUFBQSxlQUFlLEVBQUUsS0FEWjtBQUVMQyxZQUFBQSxPQUFPLEVBQUUsS0FGSjtBQUdMQyxZQUFBQSxZQUFZLEVBQUUsS0FIVDtBQUlMQyxZQUFBQSxLQUFLLEVBQUU7QUFKRixXQURUO0FBQUEsaUNBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURXLENBQWI7O0FB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QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQVlFO0FBQUcsZUFBSyxFQUFFO0FBQUU0QyxZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtSkQ7O0lBbEx1Qi9COztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjEucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24zIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMy5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb240LnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNSBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjUucG5nXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NYWluQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlU25hY2tiYXIgPSAoeyByZXNwb25zZSwgc2V0SGFzTmV3UmVzcG9uc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtkaXZDb250ZW50LCBzZXREaXZDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoRGl2KCkge1xyXG4gICAgc3dpdGNoIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgY2FzZSA1MDA6XHJcbiAgICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5hPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSBcIjQwMFwiOlxyXG4gICAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+bjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICBjYXNlIDIwMDpcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+b2s8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHN3aXRjaERpdigpO1xyXG4gIH0sIHJlc3BvbnNlKTtcclxuXHJcbiAgcmV0dXJuIGRpdkNvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IFtoYXNOZXdSZXNwb25zZSwgc2V0SGFzTmV3UmVzcG9uc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXNwb25zZURldGFpbCwgc2V0UmVzcG9uc2VEZXRhaWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHN1YnNjcmliZU5ld3NsZXR0ZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLnZhbHVlLFxyXG4gICAgICBlbWFpbDogZXZlbnQudGFyZ2V0LmVtYWlsLnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vYXBpLmp1bmdsZWRldnMuY29tL2FwaS92MS9jaGFsbGVuZ2UtbmV3c2xldHRlci9cIixcclxuICAgICAge1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZpcnN0OiBcIiwgcmVzdWx0KTtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgZmlyc3Q6IFwiLCByZXNwb25zZSk7XHJcbiAgICBzZXRIYXNOZXdSZXNwb25zZSh0cnVlKTtcclxuICAgIHNldFJlc3BvbnNlRGV0YWlsKHJlc3BvbnNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25SaWdodH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9ufVxyXG4gICAgICAgICAgICAgIGFsdD1cIlRhYmxlIHdpdGggc2ltdWxhdGlvbiBzaGFyZSBpbiBhIGxhcHRvcFwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmUgeW91ciBob21lLDwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5uYW5ueSBhbmQgY29zdHM8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBZb3UgaGF2ZSBhIGZhbnRhc3RpYyBob21lLCBhIGZhbnRhc3RpYyBuYW5ueSBhbmQgd291bGRu4oCZdCBjdXR0aW5nXHJcbiAgICAgICAgICAgICAgeW91ciBjb3N0cyBpbiBoYWxmIGJlLCB3ZWxsLCBmYW50YXN0aWM/ISBJZiBvbmx5IGl0IHdhcyBlYXN5IHRvXHJcbiAgICAgICAgICAgICAgY29ubmVjdCB3aXRoIG90aGVyIHBhcmVudHMgdG8gc2hhcmUgeW91ciBjb3N0cz8gV2VsbCBub3cgaXQgaXMsXHJcbiAgICAgICAgICAgICAgd2l0aCBIYXB1LiBIYXB1IG1lYW5zIHRyaWJlIGFuZCBpdOKAmXMgb3VyIGZvdW5kYXRpb25hbCAzIHRyaWJhbFxyXG4gICAgICAgICAgICAgIHByaW5jaXBsZXMgdGhhdCBlbXBvd2VycyB5b3UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgeW91ciBvd24gdHJpYmUuXHJcbiAgICAgICAgICAgICAgQSB0cmliZSB0aGF0IHRvZ2V0aGVyIGhhcyB0aGUgcG93ZXIgdG8gY3JlYXRlIG5ldyBhZmZvcmRhYmxlXHJcbiAgICAgICAgICAgICAgc29sdXRpb25zIGluIGNoaWxkY2FyZSB0aGF0IHdvcmsgZm9yIHlvdSBhbmQgeW91ciBjb21tdW5pdHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+UmVhZHkgdG8gZ2V0IHN0YXJ0ZWQ/PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMz5BcmUgeW91IGEgcGFyZW50IHdpdGhvdXQgYSBuYW5ueSBhbmQgbG9va2luZyB0byBzaGFyZT88L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExlYXZlIHVzIHlvdXIgbmFtZSBhbmQgZW1haWwgYW5kIHdl4oCZbGwgdXBkYXRlIHlvdSBhcyBzb29uIGFzIGEgc2hhcmVcclxuICAgICAgICAgICAgYmVjb21lcyBhdmFpbGFibGUgaW4geW91ciBhcmVhIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3N1YnNjcmliZU5ld3NsZXR0ZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQzg4Q1wiLCBjb2xvcjogXCIjRkZGRkZGXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7aGFzTmV3UmVzcG9uc2UgPyAoXHJcbiAgICAgICAgICAgIDxSZXNwb25zZVNuYWNrYmFyIHJlc3BvbnNlPXtyZXNwb25zZURldGFpbH0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxoMj5TaGFyZWQgcGF5bWVudHMgbWFkZSBzaW1wbGU8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTb21ldGltZXMgaXTigJlzIGhhcmQgZW5vdWdoIGp1c3Qgc2hhcmluZyBhIHJlc3RhdXJhbnQgYmlsbC4gVHJ5XHJcbiAgICAgICAgICAgICAgc2hhcmluZyB0aGF0IGJpbGwgd2VlayBpbiwgd2VlayBvdXQgYW5kIHlvdSBtaWdodCBlbmNvdW50ZXIgbW9yZVxyXG4gICAgICAgICAgICAgIHRoYW4gYSBmZXcgc25hcmVzLiBCdXQgbm90IHdpdGggSGFwdS4gU2ltcGx5IHNldCB5b3VyIHJhdGVzIGFuZFxyXG4gICAgICAgICAgICAgIG91ciBhdXRvbWF0ZWQgcGF5bWVudCBzeXN0ZW0gdGFrZXMgY2FyZSBvZiB0aGUgcmVzdC4gWW91IG5lZWRcclxuICAgICAgICAgICAgICBuZXZlciB0YWxrIG1vbmV5IG9yIHdobyBvd2VzIHdoYXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hd2Rhc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIFJlYWQgaG93IEJyaWRnZXTigJlzIHNoYXJlICh3aXRob3V0IEhhcHUpIGVuZGVkIG92ZXIgJDE1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uM31cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyPkEgZnJhbWV3b3JrIGJ1aWx0IGZvciB0aGUgbG9uZyB0ZXJtPC9oMj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgQ2hpbGRjYXJlIGlzIGZvciB0aGUgbG9uZyB0ZXJtLiBBbmQgeW91IG5lZWQgYSBmcmFtZXdvcmsgeW91IGNhblxyXG4gICAgICAgICAgICBjb3VudCBvbiB0aGF0IGdpdmVzIHlvdXIgc2hhcmUgbG9uZyB0ZXJtIHZpYWJpbGl0eSBhbmQgc3VjY2Vzcy5cclxuICAgICAgICAgICAgVGhhdOKAmXMgd2h5IHdl4oCZdmUgZGVmaW5lZCBIYXB1IGFyb3VuZCBvdXIgdGhyZWUgdHJpYmFsIHByaW5jaXBsZXM7XHJcbiAgICAgICAgICAgIGNsZWFybHkgZGVmaW5lZCBwcm9jZXNzLCB0cmFuc3BhcmVuY3kgb3ZlciBtb25leSBhbmQgZXF1YWxpdHkgb2ZcclxuICAgICAgICAgICAgcGFydGljaXBhdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICBSZWFkIGhvdyBIYXB14oCZcyB0cmliYWwgYmFja2dyb3VuZCBkZWZpbmVzIG91ciBhcHBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImRpc3BsYXlOb25lXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjQ4cHggMFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjR9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRGVtb25zdHJhdGlvbiBsaXN0IG9mIHBhaWQgYmlsbGluZ3MgZnJvbSBhIG5hbm55IHNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxmb290ZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjQ4cHhcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb241fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8aDI+Q29taW5nIHNvb246IE5hbm55IFNoYXJlIERhaWx5IERpYXJ5ITwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIFdpdGggdGhlIEhhcHUgZGFpbHkgZGlhcnkgeW91ciBuYW5ueSB3aWxsIGJlIGFibGUgdG8gdXBkYXRlIHlvdSBhbmRcclxuICAgICAgICAgICAgeW91ciBzaGFyZXJzIHdpdGggcGhvdG9zIGFuZCBjb21tZW50YXJ5IG9mIHRoZSBkYXkuIFlvdSBhbmQgc2hhcmVyc1xyXG4gICAgICAgICAgICB3aWxsIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBhbmQgeW914oCZbGwgYmUgYWJsZSB0byBsb2dpbiB0byB2aWV3IHRoZVxyXG4gICAgICAgICAgICBkYWlseSBhZHZlbnR1cmVzIGZvIHlvdXIgbGl0dGxlIG9uZXMuIFdlIGNhbuKAmXQgd2FpdCFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWFnZVNlY3Rpb24iLCJpbWFnZVNlY3Rpb24zIiwiaW1hZ2VTZWN0aW9uNCIsImltYWdlU2VjdGlvbjUiLCJzdHlsZXMiLCJSZXNwb25zZVNuYWNrYmFyIiwicmVzcG9uc2UiLCJzZXRIYXNOZXdSZXNwb25zZSIsImRpdkNvbnRlbnQiLCJzZXREaXZDb250ZW50Iiwic3dpdGNoRGl2Iiwic3RhdHVzIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiTWFpbkNvbXBvbmVudCIsImhhc05ld1Jlc3BvbnNlIiwicmVzcG9uc2VEZXRhaWwiLCJzZXRSZXNwb25zZURldGFpbCIsInN1YnNjcmliZU5ld3NsZXR0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlckRhdGEiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbCIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibWV0aG9kIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==