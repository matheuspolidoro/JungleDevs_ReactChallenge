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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var initialResponseBody = {
    error: [],
    name: [],
    email: [],
    detail: []
  };

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(initialResponseBody),
      responseBody = _useState5[0],
      setResponseBody = _useState5[1];

  var subscribeNewsletter = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var userData, response, result;
      return C_Users_mathe_Desktop_JungleDevs_ReactChallenge_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              setLoading(true);
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
              setTimeout(function () {
                setHasNewResponse(true);
                setResponseBody(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    name: result.name ? result.name : [],
                    email: result.email ? result.email : [],
                    error: result.error ? result.error : [],
                    detail: result.detail ? result.detail : []
                  });
                  setLoading(false);
                });
              }, 3000);

            case 10:
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
        lineNumber: 249,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
        className: (_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().article),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), "  ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
            children: "Shared payments made simple"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            children: "Sometimes it\u2019s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
            href: "/awdas",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              className: "a",
              children: "Read how Bridget\u2019s share (without Hapu) ended over $15"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
          className: "".concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), " ").concat((_styles_MainComponent_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionLeft)),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: _assets_ImageSection3_png__WEBPACK_IMPORTED_MODULE_7__.default,
            alt: "Table with simulation share in a laptop",
            quality: 100
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 276,
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
          lineNumber: 282,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That\u2019s why we\u2019ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
            className: "a",
            children: "Read how Hapu\u2019s tribal background defines our app"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
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
            lineNumber: 296,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("hr", {
        className: "divider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
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
            lineNumber: 311,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h2", {
          children: "Coming soon: Nanny Share Daily Diary!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
          style: {
            textAlign: "center"
          },
          children: "With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you\u2019ll be able to login to view the daily adventures fo your little ones. We can\u2019t wait!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 306,
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

_s2(MainComponent, "Np9GCLBsEf5STYKAmgyEvIB3eyY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzY3NTUyZWE5YmZkZTQ1YWNkZjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsaUJBQXdCLFFBQXhCQSxpQkFBd0I7O0FBQ3BFLGtCQUFvQ1QsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT1UsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBOEJYLCtDQUFRLEVBQXRDO0FBQUEsTUFBT1ksT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlAsTUFBMUI7O0FBRUEsV0FBU1EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLFFBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCUixNQUFBQSxhQUFhLGVBQ1g7QUFDRSxhQUFLLEVBQUU7QUFDTFMsVUFBQUEsZUFBZSxFQUFFLE9BRFo7QUFFTEMsVUFBQUEsT0FBTyxFQUFFLEtBRko7QUFHTEMsVUFBQUEsWUFBWSxFQUFFLEtBSFQ7QUFJTEMsVUFBQUEsS0FBSyxFQUFFO0FBSkYsU0FEVDtBQUFBLCtCQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLENBQWI7QUFZRCxLQWJELE1BYU8sSUFBSU4sR0FBRyxDQUFDRSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDN0IsVUFBSUQsT0FB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QUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEYsZUFZRTtBQUFHLGVBQUssRUFBRTtBQUFFMkQsWUFBQUEsU0FBUyxFQUFFO0FBQWIsV0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEtEOztJQWhPdUJyQzs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24gZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb24xLnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uMyBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjMucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb240IGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uNC5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb241LnBuZ1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTWFpbkNvbXBvbmVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBSZXNwb25zZVNuYWNrYmFyID0gKHsgcmVzcG9uc2UsIHJlc3VsdCwgc2V0SGFzTmV3UmVzcG9uc2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtkaXZDb250ZW50LCBzZXREaXZDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInJlc3VsdCAgOiBcIiwgcmVzdWx0KTtcclxuXHJcbiAgZnVuY3Rpb24gc3dpdGNoRGl2KHJlcywgYm9keVJlcykge1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+T2s8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHJlcy5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICBpZiAoYm9keVJlcy5uYW1lKSB7XHJcbiAgICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD57d2FybmluZ308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFdhcm5pbmcoXCJQbGVhc2UgZmlsbCB0aGUgbmFtZSBmaWVsZFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGJvZHlSZXMuZW1haWwpIHtcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPnt3YXJuaW5nfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0V2FybmluZyhcIlBsZWFzZSBmaWxsIHRoZSBlbWFpbCBmaWVsZCB3aXRoIGEgdmFsaWQgYWRkcmVzc1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGJvZHlSZXMubmFtZSAmJiBib2R5UmVzLmVtYWlsKSB7XHJcbiAgICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD57d2FybmluZ308L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFdhcm5pbmcoXCJQbGFzZSBmaWxsIHRoZSBmaWVsZHNcIik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNTAwKSB7XHJcbiAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+VHJ5IGFnYWluIGxhdGVyLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJRiByZXNwb25zZS5zdGF0dXNcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgc3dpdGNoRGl2KHJlc3BvbnNlLCByZXN1bHQpO1xyXG4gICAgfVxyXG4gIH0sIFtyZXNwb25zZV0pO1xyXG5cclxuICByZXR1cm4gZGl2Q29udGVudDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5Db21wb25lbnQoKSB7XHJcbiAgY29uc3QgW2hhc05ld1Jlc3BvbnNlLCBzZXRIYXNOZXdSZXNwb25zZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBpbml0aWFsUmVzcG9uc2VCb2R5ID0ge1xyXG4gICAgZXJyb3I6IFtdLFxyXG4gICAgbmFtZTogW10sXHJcbiAgICBlbWFpbDogW10sXHJcbiAgICBkZXRhaWw6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZUJvZHksIHNldFJlc3BvbnNlQm9keV0gPSB1c2VTdGF0ZShpbml0aWFsUmVzcG9uc2VCb2R5KTtcclxuXHJcbiAgY29uc3Qgc3Vic2NyaWJlTmV3c2xldHRlciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUudmFsdWUsXHJcbiAgICAgIGVtYWlsOiBldmVudC50YXJnZXQuZW1haWwudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuanVuZ2xlZGV2cy5jb20vYXBpL3YxL2NoYWxsZW5nZS1uZXdzbGV0dGVyL1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0SGFzTmV3UmVzcG9uc2UodHJ1ZSk7XHJcbiAgICAgIHNldFJlc3BvbnNlQm9keSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICAgIG5hbWU6IHJlc3VsdC5uYW1lID8gcmVzdWx0Lm5hbWUgOiBbXSxcclxuICAgICAgICAgIGVtYWlsOiByZXN1bHQuZW1haWwgPyByZXN1bHQuZW1haWwgOiBbXSxcclxuICAgICAgICAgIGVycm9yOiByZXN1bHQuZXJyb3IgPyByZXN1bHQuZXJyb3IgOiBbXSxcclxuICAgICAgICAgIGRldGFpbDogcmVzdWx0LmRldGFpbCA/IHJlc3VsdC5kZXRhaWwgOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlQm9keVwiLCByZXNwb25zZUJvZHkpO1xyXG4gIH0sIFtyZXNwb25zZUJvZHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uUmlnaHR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbn1cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfT5cclxuICAgICAgICAgICAgPGgyPlNoYXJlIHlvdXIgaG9tZSw8L2gyPlxyXG4gICAgICAgICAgICA8aDI+bmFubnkgYW5kIGNvc3RzPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgWW91IGhhdmUgYSBmYW50YXN0aWMgaG9tZSwgYSBmYW50YXN0aWMgbmFubnkgYW5kIHdvdWxkbuKAmXQgY3V0dGluZ1xyXG4gICAgICAgICAgICAgIHlvdXIgY29zdHMgaW4gaGFsZiBiZSwgd2VsbCwgZmFudGFzdGljPyEgSWYgb25seSBpdCB3YXMgZWFzeSB0b1xyXG4gICAgICAgICAgICAgIGNvbm5lY3Qgd2l0aCBvdGhlciBwYXJlbnRzIHRvIHNoYXJlIHlvdXIgY29zdHM/IFdlbGwgbm93IGl0IGlzLFxyXG4gICAgICAgICAgICAgIHdpdGggSGFwdS4gSGFwdSBtZWFucyB0cmliZSBhbmQgaXTigJlzIG91ciBmb3VuZGF0aW9uYWwgMyB0cmliYWxcclxuICAgICAgICAgICAgICBwcmluY2lwbGVzIHRoYXQgZW1wb3dlcnMgeW91IHRvIGNyZWF0ZSBhbmQgbWFuYWdlIHlvdXIgb3duIHRyaWJlLlxyXG4gICAgICAgICAgICAgIEEgdHJpYmUgdGhhdCB0b2dldGhlciBoYXMgdGhlIHBvd2VyIHRvIGNyZWF0ZSBuZXcgYWZmb3JkYWJsZVxyXG4gICAgICAgICAgICAgIHNvbHV0aW9ucyBpbiBjaGlsZGNhcmUgdGhhdCB3b3JrIGZvciB5b3UgYW5kIHlvdXIgY29tbXVuaXR5LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYVwiPlJlYWR5IHRvIGdldCBzdGFydGVkPzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICAke3N0eWxlcy5zZWN0aW9uTGVmdH1gfVxyXG4gICAgICAgICAgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDM+QXJlIHlvdSBhIHBhcmVudCB3aXRob3V0IGEgbmFubnkgYW5kIGxvb2tpbmcgdG8gc2hhcmU/PC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMZWF2ZSB1cyB5b3VyIG5hbWUgYW5kIGVtYWlsIGFuZCB3ZeKAmWxsIHVwZGF0ZSB5b3UgYXMgc29vbiBhcyBhIHNoYXJlXHJcbiAgICAgICAgICAgIGJlY29tZXMgYXZhaWxhYmxlIGluIHlvdXIgYXJlYSFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtzdWJzY3JpYmVOZXdzbGV0dGVyfT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbXBsZUlucHV0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUJvZHkubmFtZS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgID8geyBib3JkZXJDb2xvcjogXCJyZWRcIiB9XHJcbiAgICAgICAgICAgICAgICAgIDogeyBib3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIiB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cmVzcG9uc2VCb2R5Lm5hbWUubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICB7cmVzcG9uc2VCb2R5Lm5hbWVbMF19XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keS5lbWFpbC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgID8geyBib3JkZXJDb2xvcjogXCJyZWRcIiB9XHJcbiAgICAgICAgICAgICAgICAgIDogeyBib3JkZXJDb2xvcjogXCJsaWdodGdyYXlcIiB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7cmVzcG9uc2VCb2R5LmVtYWlsLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgIHtyZXNwb25zZUJvZHkuZW1haWxbMF19XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwQzg4Q1wiLCBjb2xvcjogXCIjRkZGRkZGXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJ9PjwvZGl2PiA6IFwiU2VuZFwifVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3Jlc3BvbnNlQm9keS5lcnJvci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e3Jlc3BvbnNlQm9keS5lcnJvclswXX08L2xhYmVsPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAge3Jlc3BvbnNlQm9keS5kZXRhaWwubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgR3JlYXQuIFlvdSdyZSBub3cgc3Vic2NyaWJlZCFcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmVkIHBheW1lbnRzIG1hZGUgc2ltcGxlPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU29tZXRpbWVzIGl04oCZcyBoYXJkIGVub3VnaCBqdXN0IHNoYXJpbmcgYSByZXN0YXVyYW50IGJpbGwuIFRyeVxyXG4gICAgICAgICAgICAgIHNoYXJpbmcgdGhhdCBiaWxsIHdlZWsgaW4sIHdlZWsgb3V0IGFuZCB5b3UgbWlnaHQgZW5jb3VudGVyIG1vcmVcclxuICAgICAgICAgICAgICB0aGFuIGEgZmV3IHNuYXJlcy4gQnV0IG5vdCB3aXRoIEhhcHUuIFNpbXBseSBzZXQgeW91ciByYXRlcyBhbmRcclxuICAgICAgICAgICAgICBvdXIgYXV0b21hdGVkIHBheW1lbnQgc3lzdGVtIHRha2VzIGNhcmUgb2YgdGhlIHJlc3QuIFlvdSBuZWVkXHJcbiAgICAgICAgICAgICAgbmV2ZXIgdGFsayBtb25leSBvciB3aG8gb3dlcyB3aGF0LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXdkYXNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICBSZWFkIGhvdyBCcmlkZ2V04oCZcyBzaGFyZSAod2l0aG91dCBIYXB1KSBlbmRlZCBvdmVyICQxNVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjN9XHJcbiAgICAgICAgICAgICAgYWx0PVwiVGFibGUgd2l0aCBzaW11bGF0aW9uIHNoYXJlIGluIGEgbGFwdG9wXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMj5BIGZyYW1ld29yayBidWlsdCBmb3IgdGhlIGxvbmcgdGVybTwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIENoaWxkY2FyZSBpcyBmb3IgdGhlIGxvbmcgdGVybS4gQW5kIHlvdSBuZWVkIGEgZnJhbWV3b3JrIHlvdSBjYW5cclxuICAgICAgICAgICAgY291bnQgb24gdGhhdCBnaXZlcyB5b3VyIHNoYXJlIGxvbmcgdGVybSB2aWFiaWxpdHkgYW5kIHN1Y2Nlc3MuXHJcbiAgICAgICAgICAgIFRoYXTigJlzIHdoeSB3ZeKAmXZlIGRlZmluZWQgSGFwdSBhcm91bmQgb3VyIHRocmVlIHRyaWJhbCBwcmluY2lwbGVzO1xyXG4gICAgICAgICAgICBjbGVhcmx5IGRlZmluZWQgcHJvY2VzcywgdHJhbnNwYXJlbmN5IG92ZXIgbW9uZXkgYW5kIGVxdWFsaXR5IG9mXHJcbiAgICAgICAgICAgIHBhcnRpY2lwYXRpb24uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+XHJcbiAgICAgICAgICAgICAgUmVhZCBob3cgSGFwdeKAmXMgdHJpYmFsIGJhY2tncm91bmQgZGVmaW5lcyBvdXIgYXBwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJkaXNwbGF5Tm9uZVwiIHN0eWxlPXt7IG1hcmdpbjogXCI0OHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb240fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8Zm9vdGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI0OHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uNX1cclxuICAgICAgICAgICAgICBhbHQ9XCJEZW1vbnN0cmF0aW9uIGxpc3Qgb2YgcGFpZCBiaWxsaW5ncyBmcm9tIGEgbmFubnkgc2VydmljZVwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPGgyPkNvbWluZyBzb29uOiBOYW5ueSBTaGFyZSBEYWlseSBEaWFyeSE8L2gyPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICBXaXRoIHRoZSBIYXB1IGRhaWx5IGRpYXJ5IHlvdXIgbmFubnkgd2lsbCBiZSBhYmxlIHRvIHVwZGF0ZSB5b3UgYW5kXHJcbiAgICAgICAgICAgIHlvdXIgc2hhcmVycyB3aXRoIHBob3RvcyBhbmQgY29tbWVudGFyeSBvZiB0aGUgZGF5LiBZb3UgYW5kIHNoYXJlcnNcclxuICAgICAgICAgICAgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbnMgYW5kIHlvdeKAmWxsIGJlIGFibGUgdG8gbG9naW4gdG8gdmlldyB0aGVcclxuICAgICAgICAgICAgZGFpbHkgYWR2ZW50dXJlcyBmbyB5b3VyIGxpdHRsZSBvbmVzLiBXZSBjYW7igJl0IHdhaXQhXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW1hZ2VTZWN0aW9uIiwiaW1hZ2VTZWN0aW9uMyIsImltYWdlU2VjdGlvbjQiLCJpbWFnZVNlY3Rpb241Iiwic3R5bGVzIiwiUmVzcG9uc2VTbmFja2JhciIsInJlc3BvbnNlIiwicmVzdWx0Iiwic2V0SGFzTmV3UmVzcG9uc2UiLCJkaXZDb250ZW50Iiwic2V0RGl2Q29udGVudCIsIndhcm5pbmciLCJzZXRXYXJuaW5nIiwiY29uc29sZSIsImxvZyIsInN3aXRjaERpdiIsInJlcyIsImJvZHlSZXMiLCJzdGF0dXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJuYW1lIiwiZW1haWwiLCJNYWluQ29tcG9uZW50IiwiaGFzTmV3UmVzcG9uc2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImluaXRpYWxSZXNwb25zZUJvZHkiLCJlcnJvciIsImRldGFpbCIsInJlc3BvbnNlQm9keSIsInNldFJlc3BvbnNlQm9keSIsInN1YnNjcmliZU5ld3NsZXR0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlckRhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwibWV0aG9kIiwianNvbiIsInNldFRpbWVvdXQiLCJwcmV2U3RhdGUiLCJjb250YWluZXIiLCJtYWluIiwiYXJ0aWNsZSIsInNlY3Rpb25SaWdodCIsInNlY3Rpb25UZXh0Iiwic2VjdGlvbkxlZnQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmb3JtIiwibGVuZ3RoIiwiYm9yZGVyQ29sb3IiLCJsYWJlbCIsImxvYWRlciIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=