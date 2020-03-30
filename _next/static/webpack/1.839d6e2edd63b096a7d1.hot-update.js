webpackHotUpdate(1,{

/***/ "./src/components/screens/Demo.js":
/*!****************************************!*\
  !*** ./src/components/screens/Demo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-papaparse */ "./node_modules/react-papaparse/dist/index.es.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");







var _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/Demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var buttonRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();

var Demo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Demo, _Component);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleImportOffer", function () {
      var index = _this.state.tabIndex;

      if (index === 0) {
        var results = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["readString"])(_this.state.str);
        console.log('---------------------------');
        console.log('Parse complete!');
        console.log('Row count: ', results.data.length);
        console.log('Errors: ', results.errors.length);
        console.log('Results: ', results);
        console.log('---------------------------');
      } else if (index === 1) {
        var _results = _this.state.csvData;

        if (_results) {
          console.log('---------------------------');
          console.log('Parse complete!');
          console.log('Row count: ', _results.length);
          console.log('Results: ', _results);
          console.log('---------------------------');
        } else {
          // eslint-disable-next-line no-undef
          alert('Please choose at least one file to parse.');
        }
      } else if (index === 2) {
        if (_this.state.url === '') {
          // eslint-disable-next-line no-undef
          alert('Please enter the URL of a file to download and parse.');
          return;
        }

        console.log('Running!');
        Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["readRemoteFile"])(_this.state.url, {
          complete: function complete(results) {
            console.log('---------------------------');
            console.log('Parse complete!');
            console.log('Row count: ', results.data.length);
            console.log('Errors: ', results.errors.length);
            console.log('Results: ', results);
            console.log('---------------------------');
          }
        });
      } else {
        try {
          var _results2 = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["jsonToCSV"])(_this.state.jsonData);

          console.log('---------------------------');
          console.log(_results2);
          console.log('---------------------------');
        } catch (e) {
          // eslint-disable-next-line no-undef
          alert('Please enter valid JSON.');
        }
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setTabIndex", function (index) {
      _this.setState({
        tabIndex: index
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleStrChange", function (event) {
      _this.setState({
        str: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleJsonDataChange", function (event) {
      _this.setState({
        jsonData: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleURLChange", function (event) {
      _this.setState({
        url: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setURL", function (url) {
      _this.setState({
        url: url
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleOnDrop", function (data) {
      _this.setState({
        csvData: data
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleOnError", function (err, file, inputElem, reason) {
      console.log(err);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleOpenDialog", function (e) {
      // Note that the ref is set async, so it might be null at some point
      if (buttonRef.current) {
        buttonRef.current.open(e);
      }
    });

    _this.state = {
      tabIndex: 0,
      str: "Column 1,Column 2,Column 3,Column 4\n1-1,1-2,1-3,1-4\n2-1,2-2,2-3,2-4\n3-1,3-2,3-3,3-4\n4,5,6,7",
      csvData: null,
      url: '',
      jsonData: "[\n  {\n      \"Column 1\": \"1-1\",\n      \"Column 2\": \"1-2\",\n      \"Column 3\": \"1-3\",\n      \"Column 4\": \"1-4\"\n  },\n  {\n      \"Column 1\": \"2-1\",\n      \"Column 2\": \"2-2\",\n      \"Column 3\": \"2-3\",\n      \"Column 4\": \"2-4\"\n  },\n  {\n      \"Column 1\": \"3-1\",\n      \"Column 2\": \"3-2\",\n      \"Column 3\": \"3-3\",\n      \"Column 4\": \"3-4\"\n  },\n  {\n      \"Column 1\": 4,\n      \"Column 2\": 5,\n      \"Column 3\": 6,\n      \"Column 4\": 7\n  }\n]"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, "Hello", __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 9
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "grid-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "grid-40 mobile-grid-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "links",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fa fa-home fa-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }
      }), " Home"), __jsx("a", {
        href: "/demo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fa fa-magic fa-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }
      }), " Demo"), __jsx("a", {
        href: "/docs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fa fa-book fa-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }), " Docs"))), __jsx("div", {
        className: "grid-20 hide-on-mobile text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "/",
        className: "text-logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }
      }, "react-papaparse 3")), __jsx("div", {
        className: "grid-40 mobile-grid-50 text-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "links",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fa fa-github fa-lg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }
      }), " GitHub"))))), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }
      }, "Choose a Demo"), __jsx("div", {
        className: "grid-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "grid-66",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
        onSelect: function onSelect(index) {
          return _this2.setTabIndex(index);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 15
        }
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabList"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 19
        }
      }, "String"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 19
        }
      }, "Local File(s)"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 19
        }
      }, "Remote File"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 19
        }
      }, "JSON to CSV")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 19
        }
      }, __jsx("div", {
        style: {
          "float": 'right',
          marginBottom: 14
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/ReadString.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 23
        }
      }, "Source code")), __jsx("textarea", {
        id: "input",
        placeholder: "String input",
        onChange: this.handleStrChange,
        value: this.state.str,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }
      }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 19
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 23
        }
      }, "Choose one or more delimited text files for react-papaparse to parse."), __jsx("div", {
        style: {
          marginTop: 60,
          marginBottom: 46
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 23
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 25
        }
      }, "Basic Upload"), __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader1.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 27
        }
      }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        ref: buttonRef,
        onFileLoad: this.handleOnDrop,
        onError: this.handleOnError,
        noClick: true,
        noDrag: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 25
        }
      }, function (_ref) {
        var file = _ref.file;
        return __jsx("aside", {
          style: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 29
          }
        }, __jsx("button", {
          type: "button",
          onClick: _this2.handleOpenDialog,
          style: {
            width: '40%',
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 31
          }
        }, "Browe file"), __jsx("div", {
          style: {
            width: '60%',
            height: 45,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#ccc',
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 13,
            paddingTop: 3,
            lineHeight: 2.2
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 31
          }
        }, file.name));
      })), __jsx("div", {
        style: {
          marginTop: 50,
          marginBottom: 46
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 23
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 25
        }
      }, "Click and Drag Upload"), __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader2.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 27
        }
      }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.handleOnDrop,
        onError: this.handleOnError,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 25
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 27
        }
      }, "Drop CSV file here or click to upload."))), __jsx("div", {
        style: {
          marginTop: 50,
          marginBottom: 46
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 23
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 25
        }
      }, "Drag ( No Click ) Upload"), __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader3.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 27
        }
      }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.handleOnDrop,
        onError: this.handleOnError,
        noClick: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 25
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 27
        }
      }, "Drop CSV file here to upload."))), __jsx("div", {
        style: {
          marginTop: 50,
          marginBottom: 46
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 23
        }
      }, __jsx("h5", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 25
        }
      }, "Click ( No Drag ) Upload"), __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader4.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 27
        }
      }, "Source code")), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.handleOnDrop,
        onError: this.handleOnError,
        noDrag: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 27
        }
      }, "Click to upload."))), "Sample files:", __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "/static/csv/normal.csv",
        id: "local-normal-file",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 27
        }
      }, "Normal file")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "/static/csv/big.csv",
        id: "local-large-file",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 27
        }
      }, "Large file")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "/static/csv/malformed.csv",
        id: "local-malformed-file",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 27
        }
      }, "Malformed file")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 19
        }
      }, __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/ReadRemoteFile.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 23
        }
      }, "Source code")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 23
        }
      }, "Type the URL of the file to be downloaded and parsed.", __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 25
        }
      }), __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }
      }, "(cross-origin requests require Access-Control-Allow-Origin header)")), __jsx("input", {
        type: "text",
        id: "url",
        placeholder: "URL",
        value: this.state.url,
        onChange: this.handleURLChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 23
        }
      }), "Sample remote files:", __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 23
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 25
        }
      }, __jsx("a", {
        id: "local-normal-file",
        onClick: function onClick() {
          return _this2.setURL('/static/csv/normal.csv');
        },
        style: {
          cursor: 'pointer'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 27
        }
      }, "Normal file")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 25
        }
      }, __jsx("a", {
        id: "local-large-file",
        onClick: function onClick() {
          return _this2.setURL('/static/csv/big.csv');
        },
        style: {
          cursor: 'pointer'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 27
        }
      }, "Large file")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 25
        }
      }, __jsx("a", {
        id: "local-malformed-file",
        onClick: function onClick() {
          return _this2.setURL('/static/csv/malformed.csv');
        },
        style: {
          cursor: 'pointer'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 27
        }
      }, "Malformed file")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 19
        }
      }, __jsx("div", {
        style: {
          "float": 'right',
          marginBottom: 14
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/JsonToCSV.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 23
        }
      }, "Source code")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 21
        }
      }, __jsx("textarea", {
        id: "json",
        placeholder: "JSON string",
        value: this.state.jsonData,
        onChange: this.handleJsonDataChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 23
        }
      }))))), __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "see-results",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }
      }, "Results will appear in the console of your browser's inspector tools"), __jsx("button", {
        id: "submit",
        className: "green",
        onClick: this.handleImportOffer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 17
        }
      }, "Parse"))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=1.839d6e2edd63b096a7d1.hot-update.js.map