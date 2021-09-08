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
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            children: "a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
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
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            children: "n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this));

      case 200:
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          style: {
            backgroundColor: "green",
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            children: "ok"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
            lineNumber: 98,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Share your home,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "nanny and costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Ready to get started?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
            lineNumber: 134,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            id: "email",
            type: "email",
            placeholder: "Your email",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
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
            lineNumber: 146,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this), hasNewResponse ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ResponseSnackbar, {
          response: responseDetail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }, this) : false]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
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
          lineNumber: 194,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
            lineNumber: 208,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
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
            lineNumber: 223,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzFlZjNiZDBmODdmMThmOTFjNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCOztBQUM1RCxrQkFBb0NSLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQixZQUFRSixRQUFRLENBQUNLLE1BQWpCO0FBQ0UsV0FBSyxHQUFMO0FBQ0VGLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNMRyxZQUFBQSxlQUFlLEVBQUUsUUFEWjtBQUVMQyxZQUFBQSxZQUFZLEVBQUUsS0FGVDtBQUdMQyxZQUFBQSxLQUFLLEVBQUU7QUFIRixXQURUO0FBQUEsaUNBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURXLENBQWI7O0FBV0YsV0FBSyxLQUFMO0FBQ0VMLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNMRyxZQUFBQSxlQUFlLEVBQUUsS0FEWjtBQUVMQyxZQUFBQSxZQUFZLEVBQUUsS0FGVDtBQUdMQyxZQUFBQSxLQUFLLEVBQUU7QUFIRixXQURUO0FBQUEsaUNBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURXLENBQWI7O0FBWUYsV0FBSyxHQUFMO0FBQ0VMLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNM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QUFFMkMsWUFBQUEsU0FBUyxFQUFFO0FBQWIsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUpEOztJQWxMdUIvQjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb24xLnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uMyBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjMucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb240IGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uNC5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb241LnBuZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWFpbkNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBSZXNwb25zZVNuYWNrYmFyID0gKHsgcmVzcG9uc2UsIHNldEhhc05ld1Jlc3BvbnNlIH0pID0+IHtcclxuICBjb25zdCBbZGl2Q29udGVudCwgc2V0RGl2Q29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN3aXRjaERpdigpIHtcclxuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMz5hPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCI0MDBcIjpcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+bjwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDM+b2s8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2l0Y2hEaXYoKTtcclxuICB9LCByZXNwb25zZSk7XHJcblxyXG4gIHJldHVybiBkaXZDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudCgpIHtcclxuICBjb25zdCBbaGFzTmV3UmVzcG9uc2UsIHNldEhhc05ld1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzcG9uc2VEZXRhaWwsIHNldFJlc3BvbnNlRGV0YWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBzdWJzY3JpYmVOZXdzbGV0dGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcclxuICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS5qdW5nbGVkZXZzLmNvbS9hcGkvdjEvY2hhbGxlbmdlLW5ld3NsZXR0ZXIvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmaXJzdDogXCIsIHJlc3VsdCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlIGZpcnN0OiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgc2V0SGFzTmV3UmVzcG9uc2UodHJ1ZSk7XHJcbiAgICBzZXRSZXNwb25zZURldGFpbChyZXNwb25zZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uUmlnaHR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbn1cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlIHlvdXIgaG9tZSw8L2gyPlxyXG4gICAgICAgICAgICA8aDI+bmFubnkgYW5kIGNvc3RzPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgWW91IGhhdmUgYSBmYW50YXN0aWMgaG9tZSwgYSBmYW50YXN0aWMgbmFubnkgYW5kIHdvdWxkbuKAmXQgY3V0dGluZ1xyXG4gICAgICAgICAgICAgIHlvdXIgY29zdHMgaW4gaGFsZiBiZSwgd2VsbCwgZmFudGFzdGljPyEgSWYgb25seSBpdCB3YXMgZWFzeSB0b1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBvdGhlciBwYXJlbnRzIHRvIHNoYXJlIHlvdXIgY29zdHM/IFdlbGwgbm93IGl0IGlzLFxyXG4gICAgICAgICAgICAgIHdpdGggSGFwdS4gSGFwdSBtZWFucyB0cmliZSBhbmQgaXTigJlzIG91ciBmb3VuZGF0aW9uYWwgMyB0cmliYWxcclxuICAgICAgICAgICAgICBwcmluY2lwbGVzIHRoYXQgZW1wb3dlcnMgeW91IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHlvdXIgb3duIHRyaWJlLlxyXG4gICAgICAgICAgICAgIEEgdHJpYmUgdGhhdCB0b2dldGhlciBoYXMgdGhlIHBvd2VyIHRvIGNyZWF0ZSBuZXcgYWZmb3JkYWJsZVxyXG4gICAgICAgICAgICAgIHNvbHV0aW9ucyBpbiBjaGlsZGNhcmUgdGhhdCB3b3JrIGZvciB5b3UgYW5kIHlvdXIgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlJlYWR5IHRvIGdldCBzdGFydGVkPzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDM+QXJlIHlvdSBhIHBhcmVudCB3aXRob3V0IGEgbmFubnkgYW5kIGxvb2tpbmcgdG8gc2hhcmU/PC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMZWF2ZSB1cyB5b3VyIG5hbWUgYW5kIGVtYWlsIGFuZCB3ZeKAmWxsIHVwZGF0ZSB5b3UgYXMgc29vbiBhcyBhIHNoYXJlXHJcbiAgICAgICAgICAgIGJlY29tZXMgYXZhaWxhYmxlIGluIHlvdXIgYXJlYSFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtzdWJzY3JpYmVOZXdzbGV0dGVyfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwMEM4OENcIiwgY29sb3I6IFwiI0ZGRkZGRlwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAge2hhc05ld1Jlc3BvbnNlID8gKFxyXG4gICAgICAgICAgICA8UmVzcG9uc2VTbmFja2JhciByZXNwb25zZT17cmVzcG9uc2VEZXRhaWx9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmVkIHBheW1lbnRzIG1hZGUgc2ltcGxlPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU29tZXRpbWVzIGl04oCZcyBoYXJkIGVub3VnaCBqdXN0IHNoYXJpbmcgYSByZXN0YXVyYW50IGJpbGwuIFRyeVxyXG4gICAgICAgICAgICAgIHNoYXJpbmcgdGhhdCBiaWxsIHdlZWsgaW4sIHdlZWsgb3V0IGFuZCB5b3UgbWlnaHQgZW5jb3VudGVyIG1vcmVcclxuICAgICAgICAgICAgICB0aGFuIGEgZmV3IHNuYXJlcy4gQnV0IG5vdCB3aXRoIEhhcHUuIFNpbXBseSBzZXQgeW91ciByYXRlcyBhbmRcclxuICAgICAgICAgICAgICBvdXIgYXV0b21hdGVkIHBheW1lbnQgc3lzdGVtIHRha2VzIGNhcmUgb2YgdGhlIHJlc3QuIFlvdSBuZWVkXHJcbiAgICAgICAgICAgICAgbmV2ZXIgdGFsayBtb25leSBvciB3aG8gb3dlcyB3aGF0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXdkYXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICBSZWFkIGhvdyBCcmlkZ2V04oCZcyBzaGFyZSAod2l0aG91dCBIYXB1KSBlbmRlZCBvdmVyICQxNVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjN9XHJcbiAgICAgICAgICAgICAgYWx0PVwiVGFibGUgd2l0aCBzaW11bGF0aW9uIHNoYXJlIGluIGEgbGFwdG9wXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5BIGZyYW1ld29yayBidWlsdCBmb3IgdGhlIGxvbmcgdGVybTwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIENoaWxkY2FyZSBpcyBmb3IgdGhlIGxvbmcgdGVybS4gQW5kIHlvdSBuZWVkIGEgZnJhbWV3b3JrIHlvdSBjYW5cclxuICAgICAgICAgICAgY291bnQgb24gdGhhdCBnaXZlcyB5b3VyIHNoYXJlIGxvbmcgdGVybSB2aWFiaWxpdHkgYW5kIHN1Y2Nlc3MuXHJcbiAgICAgICAgICAgIFRoYXTigJlzIHdoeSB3ZeKAmXZlIGRlZmluZWQgSGFwdSBhcm91bmQgb3VyIHRocmVlIHRyaWJhbCBwcmluY2lwbGVzO1xyXG4gICAgICAgICAgICBjbGVhcmx5IGRlZmluZWQgcHJvY2VzcywgdHJhbnNwYXJlbmN5IG92ZXIgbW9uZXkgYW5kIGVxdWFsaXR5IG9mXHJcbiAgICAgICAgICAgIHBhcnRpY2lwYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgUmVhZCBob3cgSGFwdeKAmXMgdHJpYmFsIGJhY2tncm91bmQgZGVmaW5lcyBvdXIgYXBwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJkaXNwbGF5Tm9uZVwiIHN0eWxlPXt7IG1hcmdpbjogXCI0OHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb240fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8Zm9vdGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI0OHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNX1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPGgyPkNvbWluZyBzb29uOiBOYW5ueSBTaGFyZSBEYWlseSBEaWFyeSE8L2gyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICBXaXRoIHRoZSBIYXB1IGRhaWx5IGRpYXJ5IHlvdXIgbmFubnkgd2lsbCBiZSBhYmxlIHRvIHVwZGF0ZSB5b3UgYW5kXHJcbiAgICAgICAgICAgIHlvdXIgc2hhcmVycyB3aXRoIHBob3RvcyBhbmQgY29tbWVudGFyeSBvZiB0aGUgZGF5LiBZb3UgYW5kIHNoYXJlcnNcclxuICAgICAgICAgICAgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYW5kIHlvdeKAmWxsIGJlIGFibGUgdG8gbG9naW4gdG8gdmlldyB0aGVcclxuICAgICAgICAgICAgZGFpbHkgYWR2ZW50dXJlcyBmbyB5b3VyIGxpdHRsZSBvbmVzLiBXZSBjYW7igJl0IHdhaXQhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW1hZ2VTZWN0aW9uIiwiaW1hZ2VTZWN0aW9uMyIsImltYWdlU2VjdGlvbjQiLCJpbWFnZVNlY3Rpb241Iiwic3R5bGVzIiwiUmVzcG9uc2VTbmFja2JhciIsInJlc3BvbnNlIiwic2V0SGFzTmV3UmVzcG9uc2UiLCJkaXZDb250ZW50Iiwic2V0RGl2Q29udGVudCIsInN3aXRjaERpdiIsInN0YXR1cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiTWFpbkNvbXBvbmVudCIsImhhc05ld1Jlc3BvbnNlIiwicmVzcG9uc2VEZXRhaWwiLCJzZXRSZXNwb25zZURldGFpbCIsInN1YnNjcmliZU5ld3NsZXR0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlckRhdGEiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJlbWFpbCIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibWV0aG9kIiwianNvbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==