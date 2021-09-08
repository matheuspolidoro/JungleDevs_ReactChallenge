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
                });
                setLoading(false); //////        /;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzU0ZWIxNjE2ODI1NmEwOTdjOWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQTZDO0FBQUE7O0FBQUEsTUFBMUNDLFFBQTBDLFFBQTFDQSxRQUEwQztBQUFBLE1BQWhDQyxNQUFnQyxRQUFoQ0EsTUFBZ0M7QUFBQSxNQUF4QkMsaUJBQXdCLFFBQXhCQSxpQkFBd0I7O0FBQ3BFLGtCQUFvQ1QsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT1UsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBOEJYLCtDQUFRLEVBQXRDO0FBQUEsTUFBT1ksT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlAsTUFBMUI7O0FBRUEsV0FBU1EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLE9BQXhCLEVBQWlDO0FBQy9CLFFBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCUixNQUFBQSxhQUFhLGVBQ1g7QUFDRSxhQUFLLEVBQUU7QUFDTFMsVUFBQUEsZUFBZSxFQUFFLE9BRFo7QUFFTEMsVUFBQUEsT0FBTyxFQUFFLEtBRko7QUFHTEMsVUFBQUEsWUFBWSxFQUFFLEtBSFQ7QUFJTEMsVUFBQUEsS0FBSyxFQUFFO0FBSkYsU0FEVDtBQUFBLCtCQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLENBQWI7QUFZRCxLQWJELE1BYU8sSUFBSU4sR0FBRyxDQUFDRSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDN0IsVUFBSUQsT0FB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QkFBTyxFQUFFO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRixlQVlFO0FBQUcsZUFBSyxFQUFFO0FBQUUyRCxZQUFBQSxTQUFTLEVBQUU7QUFBYixXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0S0Q7O0lBaE91QnJDOztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjEucG5nXCI7XHJcbmltcG9ydCBpbWFnZVNlY3Rpb24zIGZyb20gXCIuLi8uLi9hc3NldHMvSW1hZ2VTZWN0aW9uMy5wbmdcIjtcclxuaW1wb3J0IGltYWdlU2VjdGlvbjQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JbWFnZVNlY3Rpb240LnBuZ1wiO1xyXG5pbXBvcnQgaW1hZ2VTZWN0aW9uNSBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlU2VjdGlvbjUucG5nXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NYWluQ29tcG9uZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFJlc3BvbnNlU25hY2tiYXIgPSAoeyByZXNwb25zZSwgcmVzdWx0LCBzZXRIYXNOZXdSZXNwb25zZSB9KSA9PiB7XHJcbiAgY29uc3QgW2RpdkNvbnRlbnQsIHNldERpdkNvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt3YXJuaW5nLCBzZXRXYXJuaW5nXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicmVzdWx0ICA6IFwiLCByZXN1bHQpO1xyXG5cclxuICBmdW5jdGlvbiBzd2l0Y2hEaXYocmVzLCBib2R5UmVzKSB7XHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD5PazwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgIGlmIChib2R5UmVzLm5hbWUpIHtcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPnt3YXJuaW5nfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0V2FybmluZyhcIlBsZWFzZSBmaWxsIHRoZSBuYW1lIGZpZWxkXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYm9keVJlcy5lbWFpbCkge1xyXG4gICAgICAgIHNldERpdkNvbnRlbnQoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e3dhcm5pbmd9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRXYXJuaW5nKFwiUGxlYXNlIGZpbGwgdGhlIGVtYWlsIGZpZWxkIHdpdGggYSB2YWxpZCBhZGRyZXNzXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYm9keVJlcy5uYW1lICYmIGJvZHlSZXMuZW1haWwpIHtcclxuICAgICAgICBzZXREaXZDb250ZW50KFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPnt3YXJuaW5nfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0V2FybmluZyhcIlBsYXNlIGZpbGwgdGhlIGZpZWxkc1wiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChyZXMuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgc2V0RGl2Q29udGVudChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cD5UcnkgYWdhaW4gbGF0ZXIuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklGIHJlc3BvbnNlLnN0YXR1c1wiLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICBzd2l0Y2hEaXYocmVzcG9uc2UsIHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfSwgW3Jlc3BvbnNlXSk7XHJcblxyXG4gIHJldHVybiBkaXZDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbkNvbXBvbmVudCgpIHtcclxuICBjb25zdCBbaGFzTmV3UmVzcG9uc2UsIHNldEhhc05ld1Jlc3BvbnNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxSZXNwb25zZUJvZHkgPSB7XHJcbiAgICBlcnJvcjogW10sXHJcbiAgICBuYW1lOiBbXSxcclxuICAgIGVtYWlsOiBbXSxcclxuICAgIGRldGFpbDogW10sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlQm9keSwgc2V0UmVzcG9uc2VCb2R5XSA9IHVzZVN0YXRlKGluaXRpYWxSZXNwb25zZUJvZHkpO1xyXG5cclxuICBjb25zdCBzdWJzY3JpYmVOZXdzbGV0dGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZS52YWx1ZSxcclxuICAgICAgZW1haWw6IGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS5qdW5nbGVkZXZzLmNvbS9hcGkvdjEvY2hhbGxlbmdlLW5ld3NsZXR0ZXIvXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRIYXNOZXdSZXNwb25zZSh0cnVlKTtcclxuICAgICAgc2V0UmVzcG9uc2VCb2R5KChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgICAgbmFtZTogcmVzdWx0Lm5hbWUgPyByZXN1bHQubmFtZSA6IFtdLFxyXG4gICAgICAgICAgZW1haWw6IHJlc3VsdC5lbWFpbCA/IHJlc3VsdC5lbWFpbCA6IFtdLFxyXG4gICAgICAgICAgZXJyb3I6IHJlc3VsdC5lcnJvciA/IHJlc3VsdC5lcnJvciA6IFtdLFxyXG4gICAgICAgICAgZGV0YWlsOiByZXN1bHQuZGV0YWlsID8gcmVzdWx0LmRldGFpbCA6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8vLy8vICAgICAgICAvO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VCb2R5XCIsIHJlc3BvbnNlQm9keSk7XHJcbiAgfSwgW3Jlc3BvbnNlQm9keV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25SaWdodH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9ufVxyXG4gICAgICAgICAgICAgIGFsdD1cIlRhYmxlIHdpdGggc2ltdWxhdGlvbiBzaGFyZSBpbiBhIGxhcHRvcFwiXHJcbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuc2VjdGlvblRleHR9ICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9PlxyXG4gICAgICAgICAgICA8aDI+U2hhcmUgeW91ciBob21lLDwvaDI+XHJcbiAgICAgICAgICAgIDxoMj5uYW5ueSBhbmQgY29zdHM8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBZb3UgaGF2ZSBhIGZhbnRhc3RpYyBob21lLCBhIGZhbnRhc3RpYyBuYW5ueSBhbmQgd291bGRu4oCZdCBjdXR0aW5nXHJcbiAgICAgICAgICAgICAgeW91ciBjb3N0cyBpbiBoYWxmIGJlLCB3ZWxsLCBmYW50YXN0aWM/ISBJZiBvbmx5IGl0IHdhcyBlYXN5IHRvXHJcbiAgICAgICAgICAgICAgY29ubmVjdCB3aXRoIG90aGVyIHBhcmVudHMgdG8gc2hhcmUgeW91ciBjb3N0cz8gV2VsbCBub3cgaXQgaXMsXHJcbiAgICAgICAgICAgICAgd2l0aCBIYXB1LiBIYXB1IG1lYW5zIHRyaWJlIGFuZCBpdOKAmXMgb3VyIGZvdW5kYXRpb25hbCAzIHRyaWJhbFxyXG4gICAgICAgICAgICAgIHByaW5jaXBsZXMgdGhhdCBlbXBvd2VycyB5b3UgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgeW91ciBvd24gdHJpYmUuXHJcbiAgICAgICAgICAgICAgQSB0cmliZSB0aGF0IHRvZ2V0aGVyIGhhcyB0aGUgcG93ZXIgdG8gY3JlYXRlIG5ldyBhZmZvcmRhYmxlXHJcbiAgICAgICAgICAgICAgc29sdXRpb25zIGluIGNoaWxkY2FyZSB0aGF0IHdvcmsgZm9yIHlvdSBhbmQgeW91ciBjb21tdW5pdHkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhXCI+UmVhZHkgdG8gZ2V0IHN0YXJ0ZWQ/PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gICR7c3R5bGVzLnNlY3Rpb25MZWZ0fWB9XHJcbiAgICAgICAgICBzdHlsZT17eyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMz5BcmUgeW91IGEgcGFyZW50IHdpdGhvdXQgYSBuYW5ueSBhbmQgbG9va2luZyB0byBzaGFyZT88L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIExlYXZlIHVzIHlvdXIgbmFtZSBhbmQgZW1haWwgYW5kIHdl4oCZbGwgdXBkYXRlIHlvdSBhcyBzb29uIGFzIGEgc2hhcmVcclxuICAgICAgICAgICAgYmVjb21lcyBhdmFpbGFibGUgaW4geW91ciBhcmVhIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3N1YnNjcmliZU5ld3NsZXR0ZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ltcGxlSW5wdXRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQm9keS5uYW1lLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgPyB7IGJvcmRlckNvbG9yOiBcInJlZFwiIH1cclxuICAgICAgICAgICAgICAgICAgOiB7IGJvcmRlckNvbG9yOiBcImxpZ2h0Z3JheVwiIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtyZXNwb25zZUJvZHkubmFtZS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgIHtyZXNwb25zZUJvZHkubmFtZVswXX1cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW1wbGVJbnB1dFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VCb2R5LmVtYWlsLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgPyB7IGJvcmRlckNvbG9yOiBcInJlZFwiIH1cclxuICAgICAgICAgICAgICAgICAgOiB7IGJvcmRlckNvbG9yOiBcImxpZ2h0Z3JheVwiIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtyZXNwb25zZUJvZHkuZW1haWwubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxyXG4gICAgICAgICAgICAgICAge3Jlc3BvbnNlQm9keS5lbWFpbFswXX1cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMDBDODhDXCIsIGNvbG9yOiBcIiNGRkZGRkZcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+PC9kaXY+IDogXCJTZW5kXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7cmVzcG9uc2VCb2R5LmVycm9yLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT57cmVzcG9uc2VCb2R5LmVycm9yWzBdfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICB7cmVzcG9uc2VCb2R5LmRldGFpbC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICBHcmVhdC4gWW91J3JlIG5vdyBzdWJzY3JpYmVkIVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIiAvPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxoMj5TaGFyZWQgcGF5bWVudHMgbWFkZSBzaW1wbGU8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTb21ldGltZXMgaXTigJlzIGhhcmQgZW5vdWdoIGp1c3Qgc2hhcmluZyBhIHJlc3RhdXJhbnQgYmlsbC4gVHJ5XHJcbiAgICAgICAgICAgICAgc2hhcmluZyB0aGF0IGJpbGwgd2VlayBpbiwgd2VlayBvdXQgYW5kIHlvdSBtaWdodCBlbmNvdW50ZXIgbW9yZVxyXG4gICAgICAgICAgICAgIHRoYW4gYSBmZXcgc25hcmVzLiBCdXQgbm90IHdpdGggSGFwdS4gU2ltcGx5IHNldCB5b3VyIHJhdGVzIGFuZFxyXG4gICAgICAgICAgICAgIG91ciBhdXRvbWF0ZWQgcGF5bWVudCBzeXN0ZW0gdGFrZXMgY2FyZSBvZiB0aGUgcmVzdC4gWW91IG5lZWRcclxuICAgICAgICAgICAgICBuZXZlciB0YWxrIG1vbmV5IG9yIHdobyBvd2VzIHdoYXQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hd2Rhc1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIFJlYWQgaG93IEJyaWRnZXTigJlzIHNoYXJlICh3aXRob3V0IEhhcHUpIGVuZGVkIG92ZXIgJDE1XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5zZWN0aW9uVGV4dH0gJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH0+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17aW1hZ2VTZWN0aW9uM31cclxuICAgICAgICAgICAgICBhbHQ9XCJUYWJsZSB3aXRoIHNpbXVsYXRpb24gc2hhcmUgaW4gYSBsYXB0b3BcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxociBjbGFzc05hbWU9XCJkaXZpZGVyXCIgLz5cclxuXHJcbiAgICAgICAgPHNlY3Rpb25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyPkEgZnJhbWV3b3JrIGJ1aWx0IGZvciB0aGUgbG9uZyB0ZXJtPC9oMj5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgQ2hpbGRjYXJlIGlzIGZvciB0aGUgbG9uZyB0ZXJtLiBBbmQgeW91IG5lZWQgYSBmcmFtZXdvcmsgeW91IGNhblxyXG4gICAgICAgICAgICBjb3VudCBvbiB0aGF0IGdpdmVzIHlvdXIgc2hhcmUgbG9uZyB0ZXJtIHZpYWJpbGl0eSBhbmQgc3VjY2Vzcy5cclxuICAgICAgICAgICAgVGhhdOKAmXMgd2h5IHdl4oCZdmUgZGVmaW5lZCBIYXB1IGFyb3VuZCBvdXIgdGhyZWUgdHJpYmFsIHByaW5jaXBsZXM7XHJcbiAgICAgICAgICAgIGNsZWFybHkgZGVmaW5lZCBwcm9jZXNzLCB0cmFuc3BhcmVuY3kgb3ZlciBtb25leSBhbmQgZXF1YWxpdHkgb2ZcclxuICAgICAgICAgICAgcGFydGljaXBhdGlvbi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFcIj5cclxuICAgICAgICAgICAgICBSZWFkIGhvdyBIYXB14oCZcyB0cmliYWwgYmFja2dyb3VuZCBkZWZpbmVzIG91ciBhcHBcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImRpc3BsYXlOb25lXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjQ4cHggMFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlU2VjdGlvbjR9XHJcbiAgICAgICAgICAgICAgYWx0PVwiRGVtb25zdHJhdGlvbiBsaXN0IG9mIHBhaWQgYmlsbGluZ3MgZnJvbSBhIG5hbm55IHNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgIHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+XHJcblxyXG4gICAgICAgIDxmb290ZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlY3Rpb25UZXh0fSAgJHtzdHlsZXMuc2VjdGlvbkxlZnR9YH1cclxuICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjQ4cHhcIiB9fT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNlY3Rpb241fVxyXG4gICAgICAgICAgICAgIGFsdD1cIkRlbW9uc3RyYXRpb24gbGlzdCBvZiBwYWlkIGJpbGxpbmdzIGZyb20gYSBuYW5ueSBzZXJ2aWNlXCJcclxuICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8aDI+Q29taW5nIHNvb246IE5hbm55IFNoYXJlIERhaWx5IERpYXJ5ITwvaDI+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgIFdpdGggdGhlIEhhcHUgZGFpbHkgZGlhcnkgeW91ciBuYW5ueSB3aWxsIGJlIGFibGUgdG8gdXBkYXRlIHlvdSBhbmRcclxuICAgICAgICAgICAgeW91ciBzaGFyZXJzIHdpdGggcGhvdG9zIGFuZCBjb21tZW50YXJ5IG9mIHRoZSBkYXkuIFlvdSBhbmQgc2hhcmVyc1xyXG4gICAgICAgICAgICB3aWxsIHJlY2VpdmUgbm90aWZpY2F0aW9ucyBhbmQgeW914oCZbGwgYmUgYWJsZSB0byBsb2dpbiB0byB2aWV3IHRoZVxyXG4gICAgICAgICAgICBkYWlseSBhZHZlbnR1cmVzIGZvIHlvdXIgbGl0dGxlIG9uZXMuIFdlIGNhbuKAmXQgd2FpdCFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbWFnZVNlY3Rpb24iLCJpbWFnZVNlY3Rpb24zIiwiaW1hZ2VTZWN0aW9uNCIsImltYWdlU2VjdGlvbjUiLCJzdHlsZXMiLCJSZXNwb25zZVNuYWNrYmFyIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJzZXRIYXNOZXdSZXNwb25zZSIsImRpdkNvbnRlbnQiLCJzZXREaXZDb250ZW50Iiwid2FybmluZyIsInNldFdhcm5pbmciLCJjb25zb2xlIiwibG9nIiwic3dpdGNoRGl2IiwicmVzIiwiYm9keVJlcyIsInN0YXR1cyIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIm5hbWUiLCJlbWFpbCIsIk1haW5Db21wb25lbnQiLCJoYXNOZXdSZXNwb25zZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW5pdGlhbFJlc3BvbnNlQm9keSIsImVycm9yIiwiZGV0YWlsIiwicmVzcG9uc2VCb2R5Iiwic2V0UmVzcG9uc2VCb2R5Iiwic3Vic2NyaWJlTmV3c2xldHRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyRGF0YSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJqc29uIiwic2V0VGltZW91dCIsInByZXZTdGF0ZSIsImNvbnRhaW5lciIsIm1haW4iLCJhcnRpY2xlIiwic2VjdGlvblJpZ2h0Iiwic2VjdGlvblRleHQiLCJzZWN0aW9uTGVmdCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvcm0iLCJsZW5ndGgiLCJib3JkZXJDb2xvciIsImxhYmVsIiwibG9hZGVyIiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFyZ2luQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==