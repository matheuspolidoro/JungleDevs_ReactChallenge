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
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_ImageSection1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/ImageSection1.png */ "./assets/ImageSection1.png");
/* harmony import */ var _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/ImageSection3.png */ "./assets/ImageSection3.png");
/* harmony import */ var _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/ImageSection4.png */ "./assets/ImageSection4.png");
/* harmony import */ var _assets_ImageSection5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/ImageSection5.png */ "./assets/ImageSection5.png");
/* harmony import */ var _styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/MainComponent.module.css */ "./src/styles/MainComponent.module.css");
/* harmony import */ var _styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\mathe\\Desktop\\JungleDevs_ReactChallenge\\src\\components\\MainComponent.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ResponseSnackbar = function ResponseSnackbar(_ref) {
  _s();

  var response = _ref.response,
      result = _ref.result,
      setHasNewResponse = _ref.setHasNewResponse;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      divContent = _useState[0],
      setDivContent = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),
      warning = _useState2[0],
      setWarning = _useState2[1];

  console.log("result  : ", result);

  function switchDiv(res, bodyRes) {
    if (res.status === 200) {
      setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        style: {
          backgroundColor: "green",
          padding: "8px",
          borderRadius: "4px",
          color: "#FFFFFF"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Ok"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this));
    } else if (res.status === 400) {
      if (bodyRes.name) {
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          style: {
            backgroundColor: "red",
            padding: "8px",
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            children: warning
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this));
        setWarning("Please fill the name field");
      }

      if (bodyRes.email) {
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          style: {
            backgroundColor: "red",
            padding: "8px",
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            children: warning
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this));
        setWarning("Please fill the email field with a valid address");
      }

      if (bodyRes.name && bodyRes.email) {
        setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          style: {
            backgroundColor: "red",
            padding: "8px",
            borderRadius: "4px",
            color: "#FFFFFF"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            children: warning
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this));
        setWarning("Plase fill the fields");
      }
    } else if (res.status === 500) {
      setDivContent( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        style: {
          backgroundColor: "orange",
          padding: "8px",
          borderRadius: "4px",
          color: "#FFFFFF"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Try again later."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this));
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (response) {
      console.log("IF response.status", response.status);
      switchDiv(response, result);
    }
  }, [response]);
  return divContent;
};

_s(ResponseSnackbar, "0Tv8otItS2UDno4f4stzFLdQRDg=");

_c = ResponseSnackbar;
function MainComponent() {
  _s2();

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      hasNewResponse = _useState3[0],
      setHasNewResponse = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      responseState = _useState4[0],
      setResponseState = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  var initialResponseBody = {
    error: [],
    name: [],
    email: [],
    detail: []
  };

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialResponseBody),
      responseBody = _useState6[0],
      setResponseBody = _useState6[1];

  var subscribeNewsletter = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var userData, response, result;
      return C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setLoading(false);
              userData = {
                name: event.target.name.value,
                email: event.target.email.value
              };
              _context.next = 5;
              return fetch("https://api.jungledevs.com/api/v1/challenge-newsletter/", {
                body: JSON.stringify(userData),
                headers: {
                  "Content-Type": "application/json"
                },
                method: "POST"
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              result = _context.sent;
              setHasNewResponse(true);
              setResponseBody(function (prevState) {
                return _objectSpread(_objectSpread({}, prevState), {}, {
                  name: result.name ? result.name : [],
                  email: result.email ? result.email : [],
                  error: result.error ? result.error : [],
                  detail: result.detail ? result.detail : []
                });
              });
              setResponseState(response);

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

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    console.log("responseBody", responseBody);
  }, [responseBody]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("main", {
      className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("article", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionRight),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: _assets_ImageSection1_png__WEBPACK_IMPORTED_MODULE_6__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
            children: "Share your home,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
            children: "nanny and costs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            children: "You have a fantastic home, a fantastic nanny and wouldn\u2019t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it\u2019s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              className: "a",
              children: "Ready to get started?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h3", {
          children: "Are you a parent without a nanny and looking to share?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          children: "Leave us your name and email and we\u2019ll update you as soon as a share becomes available in your area!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("form", {
          className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().form),
          onSubmit: subscribeNewsletter,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
            id: "name",
            type: "text",
            placeholder: "Your name",
            className: "simpleInput",
            style: responseBody.name.length > 0 ? {
              borderColor: "red"
            } : {
              borderColor: "lightgray"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), responseBody.name.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
            htmlFor: "name",
            className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
            children: responseBody.name[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
            id: "email",
            type: "email",
            placeholder: "Your email",
            className: "simpleInput",
            style: responseBody.email.length > 0 ? {
              borderColor: "red"
            } : {
              borderColor: "lightgray"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this), responseBody.email.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
            htmlFor: "email",
            className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
            children: responseBody.email[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 15
          }, this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
            type: "submit",
            className: "button",
            style: {
              backgroundColor: "#00C88C",
              color: "#FFFFFF"
            },
            children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().loader)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 26
            }, this) : "Send"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, this), responseBody.error.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
            className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
            children: responseBody.error[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 15
          }, this) : null, responseBody.detail.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("label", {
            className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
            children: "Great. You're now subscribed!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 15
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_7__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          children: "A framework built for the long term"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("aside", {
          className: "displayNone",
          style: {
            margin: "48px 0"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: _assets_ImageSection4_png__WEBPACK_IMPORTED_MODULE_8__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("footer", {
        className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
        style: {
          alignItems: "center",
          justifyContent: "center"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          style: {
            marginBottom: "48px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: _assets_ImageSection5_png__WEBPACK_IMPORTED_MODULE_9__.default,
            alt: "Demonstration list of paid billings from a nanny service",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 5
  }, this);
}

_s2(MainComponent, "2FOnyOJRPOG4WS4PAhQ/syeIRyI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmYxZmJjNjU4M2EzYTkyMTMwODQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsaUJBQXdCLFFBQXhCQSxpQkFBd0I7O0FBQ3BFLGtCQUFvQ1QsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT1UsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBOEJYLCtDQUFRLEVBQXRDO0FBQUEsTUFBT1ksT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlAsTUFBMUI7O0FBRUEsV0FBU1EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLFFBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCUixNQUFBQSxhQUFhLGVBQ1g7QUFDRSxhQUFLLEVBQUU7QUFDTFMsVUFBQUEsZUFBZSxFQUFFLE9BRFo7QUFFTEMsVUFBQUEsT0FBTyxFQUFFLEtBRko7QUFHTEMsVUFBQUEsWUFBWSxFQUFFLEtBSFQ7QUFJTEMsVUFBQUEsS0FBSyxFQUFFO0FBSkYsU0FEVDtBQUFBLCtCQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLENBQWI7QUFZRCxLQWJELE1BYU8sSUFBSU4sR0FBRyxDQUFDRSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDN0IsVUFBSUQsT0FB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QUMsMERBRk47QUFHRSxtQkFBTyxFQUFFO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQVlFO0FBQUcsZUFBSyxFQUFFO0FBQUU0RCxZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxTEQ7O0lBek91QnRDOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjEucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24zIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMy5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb240LnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNSBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjUucG5nXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NYWluQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlU25hY2tiYXIgPSAoeyByZXNwb25zZSwgcmVzdWx0LCBzZXRIYXNOZXdSZXNwb25zZSB9KSA9PiB7XHJcbiAgY29uc3QgW2RpdkNvbnRlbnQsIHNldERpdkNvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVzdWx0ICA6IFwiLCByZXN1bHQpO1xyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hEaXYocmVzLCBib2R5UmVzKSB7XHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD5PazwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgIGlmIChib2R5UmVzLm5hbWUpIHtcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPnt3YXJuaW5nfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0V2FybmluZyhcIlBsZWFzZSBmaWxsIHRoZSBuYW1lIGZpZWxkXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYm9keVJlcy5lbWFpbCkge1xyXG4gICAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e3dhcm5pbmd9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRXYXJuaW5nKFwiUGxlYXNlIGZpbGwgdGhlIGVtYWlsIGZpZWxkIHdpdGggYSB2YWxpZCBhZGRyZXNzXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYm9keVJlcy5uYW1lICYmIGJvZHlSZXMuZW1haWwpIHtcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPnt3YXJuaW5nfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0V2FybmluZyhcIlBsYXNlIGZpbGwgdGhlIGZpZWxkc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD5UcnkgYWdhaW4gbGF0ZXIuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklGIHJlc3BvbnNlLnN0YXR1c1wiLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICBzd2l0Y2hEaXYocmVzcG9uc2UsIHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIHJldHVybiBkaXZDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudCgpIHtcclxuICBjb25zdCBbaGFzTmV3UmVzcG9uc2UsIHNldEhhc05ld1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzcG9uc2VTdGF0ZSwgc2V0UmVzcG9uc2VTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxSZXNwb25zZUJvZHkgPSB7XHJcbiAgICBlcnJvcjogW10sXHJcbiAgICBuYW1lOiBbXSxcclxuICAgIGVtYWlsOiBbXSxcclxuICAgIGRldGFpbDogW10sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlQm9keSwgc2V0UmVzcG9uc2VCb2R5XSA9IHVzZVN0YXRlKGluaXRpYWxSZXNwb25zZUJvZHkpO1xyXG5cclxuICBjb25zdCBzdWJzY3JpYmVOZXdzbGV0dGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuanVuZ2xlZGV2cy5jb20vYXBpL3YxL2NoYWxsZW5nZS1uZXdzbGV0dGVyL1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgc2V0SGFzTmV3UmVzcG9uc2UodHJ1ZSk7XHJcbiAgICBzZXRSZXNwb25zZUJvZHkoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBuYW1lOiByZXN1bHQubmFtZSA/IHJlc3VsdC5uYW1lIDogW10sXHJcbiAgICAgICAgZW1haWw6IHJlc3VsdC5lbWFpbCA/IHJlc3VsdC5lbWFpbCA6IFtdLFxyXG4gICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IgPyByZXN1bHQuZXJyb3IgOiBbXSxcclxuICAgICAgICBkZXRhaWw6IHJlc3VsdC5kZXRhaWwgPyByZXN1bHQuZGV0YWlsIDogW10sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHNldFJlc3BvbnNlU3RhdGUocmVzcG9uc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlQm9keVwiLCByZXNwb25zZUJvZHkpO1xyXG4gIH0sIFtyZXNwb25zZUJvZHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uUmlnaHR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbn1cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlIHlvdXIgaG9tZSw8L2gyPlxyXG4gICAgICAgICAgICA8aDI+bmFubnkgYW5kIGNvc3RzPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgWW91IGhhdmUgYSBmYW50YXN0aWMgaG9tZSwgYSBmYW50YXN0aWMgbmFubnkgYW5kIHdvdWxkbuKAmXQgY3V0dGluZ1xyXG4gICAgICAgICAgICAgIHlvdXIgY29zdHMgaW4gaGFsZiBiZSwgd2VsbCwgZmFudGFzdGljPyEgSWYgb25seSBpdCB3YXMgZWFzeSB0b1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBvdGhlciBwYXJlbnRzIHRvIHNoYXJlIHlvdXIgY29zdHM/IFdlbGwgbm93IGl0IGlzLFxyXG4gICAgICAgICAgICAgIHdpdGggSGFwdS4gSGFwdSBtZWFucyB0cmliZSBhbmQgaXTigJlzIG91ciBmb3VuZGF0aW9uYWwgMyB0cmliYWxcclxuICAgICAgICAgICAgICBwcmluY2lwbGVzIHRoYXQgZW1wb3dlcnMgeW91IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHlvdXIgb3duIHRyaWJlLlxyXG4gICAgICAgICAgICAgIEEgdHJpYmUgdGhhdCB0b2dldGhlciBoYXMgdGhlIHBvd2VyIHRvIGNyZWF0ZSBuZXcgYWZmb3JkYWJsZVxyXG4gICAgICAgICAgICAgIHNvbHV0aW9ucyBpbiBjaGlsZGNhcmUgdGhhdCB3b3JrIGZvciB5b3UgYW5kIHlvdXIgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlJlYWR5IHRvIGdldCBzdGFydGVkPzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDM+QXJlIHlvdSBhIHBhcmVudCB3aXRob3V0IGEgbmFubnkgYW5kIGxvb2tpbmcgdG8gc2hhcmU/PC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMZWF2ZSB1cyB5b3VyIG5hbWUgYW5kIGVtYWlsIGFuZCB3ZeKAmWxsIHVwZGF0ZSB5b3UgYXMgc29vbiBhcyBhIHNoYXJlXHJcbiAgICAgICAgICAgIGJlY29tZXMgYXZhaWxhYmxlIGluIHlvdXIgYXJlYSFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtzdWJzY3JpYmVOZXdzbGV0dGVyfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUJvZHkubmFtZS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgID8geyBib3JkZXJDb2xvcjogXCJyZWRcIiB9XHJcbiAgICAgICAgICAgICAgICAgIDogeyBib3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIiB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cmVzcG9uc2VCb2R5Lm5hbWUubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICB7cmVzcG9uc2VCb2R5Lm5hbWVbMF19XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keS5lbWFpbC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgID8geyBib3JkZXJDb2xvcjogXCJyZWRcIiB9XHJcbiAgICAgICAgICAgICAgICAgIDogeyBib3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIiB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cmVzcG9uc2VCb2R5LmVtYWlsLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgIHtyZXNwb25zZUJvZHkuZW1haWxbMF19XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQzg4Q1wiLCBjb2xvcjogXCIjRkZGRkZGXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PjwvZGl2PiA6IFwiU2VuZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Jlc3BvbnNlQm9keS5lcnJvci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e3Jlc3BvbnNlQm9keS5lcnJvclswXX08L2xhYmVsPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAge3Jlc3BvbnNlQm9keS5kZXRhaWwubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgR3JlYXQuIFlvdSdyZSBub3cgc3Vic2NyaWJlZCFcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHsvKiB7aGFzTmV3UmVzcG9uc2UgPyAoXHJcbiAgICAgICAgICAgIDxSZXNwb25zZVNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgcmVzcG9uc2U9e3Jlc3BvbnNlU3RhdGV9XHJcbiAgICAgICAgICAgICAgcmVzdWx0PXtkZXRhaWx9XHJcbiAgICAgICAgICAgICAgc2V0SGFzTmV3UmVzcG9uc2U9e3NldEhhc05ld1Jlc3BvbnNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICl9ICovfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxoMj5TaGFyZWQgcGF5bWVudHMgbWFkZSBzaW1wbGU8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTb21ldGltZXMgaXTigJlzIGhhcmQgZW5vdWdoIGp1c3Qgc2hhcmluZyBhIHJlc3RhdXJhbnQgYmlsbC4gVHJ5XHJcbiAgICAgICAgICAgICAgc2hhcmluZyB0aGF0IGJpbGwgd2VlayBpbiwgd2VlayBvdXQgYW5kIHlvdSBtaWdodCBlbmNvdW50ZXIgbW9yZVxyXG4gICAgICAgICAgICAgIHRoYW4gYSBmZXcgc25hcmVzLiBCdXQgbm90IHdpdGggSGFwdS4gU2ltcGx5IHNldCB5b3VyIHJhdGVzIGFuZFxyXG4gICAgICAgICAgICAgIG91ciBhdXRvbWF0ZWQgcGF5bWVudCBzeXN0ZW0gdGFrZXMgY2FyZSBvZiB0aGUgcmVzdC4gWW91IG5lZWRcclxuICAgICAgICAgICAgICBuZXZlciB0YWxrIG1vbmV5IG9yIHdobyBvd2VzIHdoYXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hd2Rhc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIFJlYWQgaG93IEJyaWRnZXTigJlzIHNoYXJlICh3aXRob3V0IEhhcHUpIGVuZGVkIG92ZXIgJDE1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uM31cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyPkEgZnJhbWV3b3JrIGJ1aWx0IGZvciB0aGUgbG9uZyB0ZXJtPC9oMj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgQ2hpbGRjYXJlIGlzIGZvciB0aGUgbG9uZyB0ZXJtLiBBbmQgeW91IG5lZWQgYSBmcmFtZXdvcmsgeW91IGNhblxyXG4gICAgICAgICAgICBjb3VudCBvbiB0aGF0IGdpdmVzIHlvdXIgc2hhcmUgbG9uZyB0ZXJtIHZpYWJpbGl0eSBhbmQgc3VjY2Vzcy5cclxuICAgICAgICAgICAgVGhhdOKAmXMgd2h5IHdl4oCZdmUgZGVmaW5lZCBIYXB1IGFyb3VuZCBvdXIgdGhyZWUgdHJpYmFsIHByaW5jaXBsZXM7XHJcbiAgICAgICAgICAgIGNsZWFybHkgZGVmaW5lZCBwcm9jZXNzLCB0cmFuc3BhcmVuY3kgb3ZlciBtb25leSBhbmQgZXF1YWxpdHkgb2ZcclxuICAgICAgICAgICAgcGFydGljaXBhdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICBSZWFkIGhvdyBIYXB14oCZcyB0cmliYWwgYmFja2dyb3VuZCBkZWZpbmVzIG91ciBhcHBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImRpc3BsYXlOb25lXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjQ4cHggMFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjR9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRGVtb25zdHJhdGlvbiBsaXN0IG9mIHBhaWQgYmlsbGluZ3MgZnJvbSBhIG5hbm55IHNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxmb290ZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjQ4cHhcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb241fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8aDI+Q29taW5nIHNvb246IE5hbm55IFNoYXJlIERhaWx5IERpYXJ5ITwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIFdpdGggdGhlIEhhcHUgZGFpbHkgZGlhcnkgeW91ciBuYW5ueSB3aWxsIGJlIGFibGUgdG8gdXBkYXRlIHlvdSBhbmRcclxuICAgICAgICAgICAgeW91ciBzaGFyZXJzIHdpdGggcGhvdG9zIGFuZCBjb21tZW50YXJ5IG9mIHRoZSBkYXkuIFlvdSBhbmQgc2hhcmVyc1xyXG4gICAgICAgICAgICB3aWxsIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBhbmQgeW914oCZbGwgYmUgYWJsZSB0byBsb2dpbiB0byB2aWV3IHRoZVxyXG4gICAgICAgICAgICBkYWlseSBhZHZlbnR1cmVzIGZvIHlvdXIgbGl0dGxlIG9uZXMuIFdlIGNhbuKAmXQgd2FpdCFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWFnZVNlY3Rpb24iLCJpbWFnZVNlY3Rpb24zIiwiaW1hZ2VTZWN0aW9uNCIsImltYWdlU2VjdGlvbjUiLCJzdHlsZXMiLCJSZXNwb25zZVNuYWNrYmFyIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJzZXRIYXNOZXdSZXNwb25zZSIsImRpdkNvbnRlbnQiLCJzZXREaXZDb250ZW50Iiwid2FybmluZyIsInNldFdhcm5pbmciLCJjb25zb2xlIiwibG9nIiwic3dpdGNoRGl2IiwicmVzIiwiYm9keVJlcyIsInN0YXR1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm5hbWUiLCJlbWFpbCIsIk1haW5Db21wb25lbnQiLCJoYXNOZXdSZXNwb25zZSIsInJlc3BvbnNlU3RhdGUiLCJzZXRSZXNwb25zZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbml0aWFsUmVzcG9uc2VCb2R5IiwiZXJyb3IiLCJkZXRhaWwiLCJyZXNwb25zZUJvZHkiLCJzZXRSZXNwb25zZUJvZHkiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJEYXRhIiwidGFyZ2V0IiwidmFsdWUiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIm1ldGhvZCIsImpzb24iLCJwcmV2U3RhdGUiLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwibGVuZ3RoIiwiYm9yZGVyQ29sb3IiLCJsYWJlbCIsImxvYWRlciIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=