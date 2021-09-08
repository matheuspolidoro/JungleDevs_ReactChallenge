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
    switch (response.ok) {
      case false:
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

      case true:
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
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Share your home,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "nanny and costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Ready to get started?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          children: "Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
            lineNumber: 123,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("input", {
            id: "email",
            type: "email",
            placeholder: "Your email",
            className: "simpleInput"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
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
            lineNumber: 135,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this), hasNewResponse ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(ResponseSnackbar, {
          response: responseDetail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this) : false]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
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
          lineNumber: 183,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
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
            lineNumber: 197,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
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
            lineNumber: 212,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTk5NTc4YWY2YjQ0MDE5YjQ4YmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCOztBQUM1RCxrQkFBb0NSLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9TLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQixZQUFRSixRQUFRLENBQUNLLEVBQWpCO0FBQ0UsV0FBSyxLQUFMO0FBQ0VGLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNMRyxZQUFBQSxlQUFlLEVBQUUsUUFEWjtBQUVMQyxZQUFBQSxPQUFPLEVBQUUsS0FGSjtBQUdMQyxZQUFBQSxZQUFZLEVBQUUsS0FIVDtBQUlMQyxZQUFBQSxLQUFLLEVBQUU7QUFKRixXQURUO0FBQUEsaUNBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURXLENBQWI7O0FBWUYsV0FBSyxJQUFMO0FBQ0VOLFFBQUFBLGFBQWEsZUFDWDtBQUNFLGVBQUssRUFBRTtBQUNMRyxZQUFBQSxlQUFlLEVBQUUsS0FEWjtBQUVMQyxZQUFBQSxPQUFPLEVBQUUsS0FGSjtBQUdMQyxZQUFBQSxZQUFZLEVBQUUsS0FIVDtBQUlMQyxZQUFBQSxLQUFLLEVBQUU7QUFKRixXQURUO0FBQUEsaUNBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURXLENBQWI7QUFm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SUFsTHVCL0I7O01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5Db21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMS5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb24zLnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNCBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjQucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb241IGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uNS5wbmdcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01haW5Db21wb25lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUmVzcG9uc2VTbmFja2JhciA9ICh7IHJlc3BvbnNlLCBzZXRIYXNOZXdSZXNwb25zZSB9KSA9PiB7XHJcbiAgY29uc3QgW2RpdkNvbnRlbnQsIHNldERpdkNvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hEaXYoKSB7XHJcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5hPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+bjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoRGl2KCk7XHJcbiAgfSwgcmVzcG9uc2UpO1xyXG5cclxuICByZXR1cm4gZGl2Q29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Db21wb25lbnQoKSB7XHJcbiAgY29uc3QgW2hhc05ld1Jlc3BvbnNlLCBzZXRIYXNOZXdSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3BvbnNlRGV0YWlsLCBzZXRSZXNwb25zZURldGFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlTmV3c2xldHRlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuanVuZ2xlZGV2cy5jb20vYXBpL3YxL2NoYWxsZW5nZS1uZXdzbGV0dGVyL1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXN1bHQgZmlyc3Q6IFwiLCByZXN1bHQpO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZSBmaXJzdDogXCIsIHJlc3BvbnNlKTtcclxuICAgIHNldEhhc05ld1Jlc3BvbnNlKHRydWUpO1xyXG4gICAgc2V0UmVzcG9uc2VEZXRhaWwocmVzcG9uc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvblJpZ2h0fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb259XHJcbiAgICAgICAgICAgICAgYWx0PVwiVGFibGUgd2l0aCBzaW11bGF0aW9uIHNoYXJlIGluIGEgbGFwdG9wXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxoMj5TaGFyZSB5b3VyIGhvbWUsPC9oMj5cclxuICAgICAgICAgICAgPGgyPm5hbm55IGFuZCBjb3N0czwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFlvdSBoYXZlIGEgZmFudGFzdGljIGhvbWUsIGEgZmFudGFzdGljIG5hbm55IGFuZCB3b3VsZG7igJl0IGN1dHRpbmdcclxuICAgICAgICAgICAgICB5b3VyIGNvc3RzIGluIGhhbGYgYmUsIHdlbGwsIGZhbnRhc3RpYz8hIElmIG9ubHkgaXQgd2FzIGVhc3kgdG9cclxuICAgICAgICAgICAgICBjb25uZWN0IHdpdGggb3RoZXIgcGFyZW50cyB0byBzaGFyZSB5b3VyIGNvc3RzPyBXZWxsIG5vdyBpdCBpcyxcclxuICAgICAgICAgICAgICB3aXRoIEhhcHUuIEhhcHUgbWVhbnMgdHJpYmUgYW5kIGl04oCZcyBvdXIgZm91bmRhdGlvbmFsIDMgdHJpYmFsXHJcbiAgICAgICAgICAgICAgcHJpbmNpcGxlcyB0aGF0IGVtcG93ZXJzIHlvdSB0byBjcmVhdGUgYW5kIG1hbmFnZSB5b3VyIG93biB0cmliZS5cclxuICAgICAgICAgICAgICBBIHRyaWJlIHRoYXQgdG9nZXRoZXIgaGFzIHRoZSBwb3dlciB0byBjcmVhdGUgbmV3IGFmZm9yZGFibGVcclxuICAgICAgICAgICAgICBzb2x1dGlvbnMgaW4gY2hpbGRjYXJlIHRoYXQgd29yayBmb3IgeW91IGFuZCB5b3VyIGNvbW11bml0eS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5SZWFkeSB0byBnZXQgc3RhcnRlZD88L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgzPkFyZSB5b3UgYSBwYXJlbnQgd2l0aG91dCBhIG5hbm55IGFuZCBsb29raW5nIHRvIHNoYXJlPzwvaDM+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgTGVhdmUgdXMgeW91ciBuYW1lIGFuZCBlbWFpbCBhbmQgd2XigJlsbCB1cGRhdGUgeW91IGFzIHNvb24gYXMgYSBzaGFyZVxyXG4gICAgICAgICAgICBiZWNvbWVzIGF2YWlsYWJsZSBpbiB5b3VyIGFyZWEhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17c3Vic2NyaWJlTmV3c2xldHRlcn0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGVJbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGVJbnB1dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDBDODhDXCIsIGNvbG9yOiBcIiNGRkZGRkZcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHtoYXNOZXdSZXNwb25zZSA/IChcclxuICAgICAgICAgICAgPFJlc3BvbnNlU25hY2tiYXIgcmVzcG9uc2U9e3Jlc3BvbnNlRGV0YWlsfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlZCBwYXltZW50cyBtYWRlIHNpbXBsZTwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFNvbWV0aW1lcyBpdOKAmXMgaGFyZCBlbm91Z2gganVzdCBzaGFyaW5nIGEgcmVzdGF1cmFudCBiaWxsLiBUcnlcclxuICAgICAgICAgICAgICBzaGFyaW5nIHRoYXQgYmlsbCB3ZWVrIGluLCB3ZWVrIG91dCBhbmQgeW91IG1pZ2h0IGVuY291bnRlciBtb3JlXHJcbiAgICAgICAgICAgICAgdGhhbiBhIGZldyBzbmFyZXMuIEJ1dCBub3Qgd2l0aCBIYXB1LiBTaW1wbHkgc2V0IHlvdXIgcmF0ZXMgYW5kXHJcbiAgICAgICAgICAgICAgb3VyIGF1dG9tYXRlZCBwYXltZW50IHN5c3RlbSB0YWtlcyBjYXJlIG9mIHRoZSByZXN0LiBZb3UgbmVlZFxyXG4gICAgICAgICAgICAgIG5ldmVyIHRhbGsgbW9uZXkgb3Igd2hvIG93ZXMgd2hhdC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2F3ZGFzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgUmVhZCBob3cgQnJpZGdldOKAmXMgc2hhcmUgKHdpdGhvdXQgSGFwdSkgZW5kZWQgb3ZlciAkMTVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb24zfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlRhYmxlIHdpdGggc2ltdWxhdGlvbiBzaGFyZSBpbiBhIGxhcHRvcFwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDI+QSBmcmFtZXdvcmsgYnVpbHQgZm9yIHRoZSBsb25nIHRlcm08L2gyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICBDaGlsZGNhcmUgaXMgZm9yIHRoZSBsb25nIHRlcm0uIEFuZCB5b3UgbmVlZCBhIGZyYW1ld29yayB5b3UgY2FuXHJcbiAgICAgICAgICAgIGNvdW50IG9uIHRoYXQgZ2l2ZXMgeW91ciBzaGFyZSBsb25nIHRlcm0gdmlhYmlsaXR5IGFuZCBzdWNjZXNzLlxyXG4gICAgICAgICAgICBUaGF04oCZcyB3aHkgd2XigJl2ZSBkZWZpbmVkIEhhcHUgYXJvdW5kIG91ciB0aHJlZSB0cmliYWwgcHJpbmNpcGxlcztcclxuICAgICAgICAgICAgY2xlYXJseSBkZWZpbmVkIHByb2Nlc3MsIHRyYW5zcGFyZW5jeSBvdmVyIG1vbmV5IGFuZCBlcXVhbGl0eSBvZlxyXG4gICAgICAgICAgICBwYXJ0aWNpcGF0aW9uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlxyXG4gICAgICAgICAgICAgIFJlYWQgaG93IEhhcHXigJlzIHRyaWJhbCBiYWNrZ3JvdW5kIGRlZmluZXMgb3VyIGFwcFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZGlzcGxheU5vbmVcIiBzdHlsZT17eyBtYXJnaW46IFwiNDhweCAwXCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNH1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPGZvb3RlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNDhweFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjV9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRGVtb25zdHJhdGlvbiBsaXN0IG9mIHBhaWQgYmlsbGluZ3MgZnJvbSBhIG5hbm55IHNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxoMj5Db21pbmcgc29vbjogTmFubnkgU2hhcmUgRGFpbHkgRGlhcnkhPC9oMj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgV2l0aCB0aGUgSGFwdSBkYWlseSBkaWFyeSB5b3VyIG5hbm55IHdpbGwgYmUgYWJsZSB0byB1cGRhdGUgeW91IGFuZFxyXG4gICAgICAgICAgICB5b3VyIHNoYXJlcnMgd2l0aCBwaG90b3MgYW5kIGNvbW1lbnRhcnkgb2YgdGhlIGRheS4gWW91IGFuZCBzaGFyZXJzXHJcbiAgICAgICAgICAgIHdpbGwgcmVjZWl2ZSBub3RpZmljYXRpb25zIGFuZCB5b3XigJlsbCBiZSBhYmxlIHRvIGxvZ2luIHRvIHZpZXcgdGhlXHJcbiAgICAgICAgICAgIGRhaWx5IGFkdmVudHVyZXMgZm8geW91ciBsaXR0bGUgb25lcy4gV2UgY2Fu4oCZdCB3YWl0IVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImltYWdlU2VjdGlvbiIsImltYWdlU2VjdGlvbjMiLCJpbWFnZVNlY3Rpb240IiwiaW1hZ2VTZWN0aW9uNSIsInN0eWxlcyIsIlJlc3BvbnNlU25hY2tiYXIiLCJyZXNwb25zZSIsInNldEhhc05ld1Jlc3BvbnNlIiwiZGl2Q29udGVudCIsInNldERpdkNvbnRlbnQiLCJzd2l0Y2hEaXYiLCJvayIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIk1haW5Db21wb25lbnQiLCJoYXNOZXdSZXNwb25zZSIsInJlc3BvbnNlRGV0YWlsIiwic2V0UmVzcG9uc2VEZXRhaWwiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWwiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwibWFpbiIsImFydGljbGUiLCJzZWN0aW9uUmlnaHQiLCJzZWN0aW9uVGV4dCIsInNlY3Rpb25MZWZ0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9ybSIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=