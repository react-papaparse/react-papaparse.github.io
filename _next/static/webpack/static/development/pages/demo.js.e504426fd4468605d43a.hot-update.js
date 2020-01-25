webpackHotUpdate("static/development/pages/demo.js",{

/***/ "./pages/demo.js":
/*!***********************!*\
  !*** ./pages/demo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-papaparse */ "./node_modules/react-papaparse/dist/index.es.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");







var _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/pages/demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Demo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleReadCSV", function (data) {
      _this.setState({
        csvData: data
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOnError", function (err, file, inputElem, reason) {
      console.log(err);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleImportOffer", function () {
      var index = _this.state.tabIndex;

      if (index === 0) {
        var results = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["readString"])(_this.state.str);
        console.log('--------------------------------------------------');
        console.log('Parse complete!');
        console.log('Row count: ', results.data.length);
        console.log('Errors: ', results.errors.length);
        console.log('Results: ', results);
        console.log('Synchronous results: ', results);
        console.log('--------------------------------------------------');
      } else if (index === 1) {
        var _results = _this.state.csvData;
        console.log('--------------------------------------------------');
        console.log('Parse complete!');
        console.log('Row count: ', _results.data.length);
        console.log('Errors: ', _results.errors.length);
        console.log('Results: ', _results);
        console.log('Synchronous results: ', _results);
        console.log('--------------------------------------------------');
      } else {
        var _results2 = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["jsonToCSV"])(_this.state.jsonData);

        console.log('--------------------------------------------------');
        console.log(_results2);
        console.log('--------------------------------------------------');
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setTabIndex", function (index) {
      _this.setState({
        tabIndex: index
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleStrChange", function (event) {
      _this.setState({
        str: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleJsonDataChange", function (event) {
      _this.setState({
        jsonData: event.target.value
      });
    });

    _this.fileInput = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      tabIndex: 0,
      str: "Column 1,Column 2,Column 3,Column 4\n1-1,1-2,1-3,1-4\n2-1,2-2,2-3,2-4\n3-1,3-2,3-3,3-4\n4,5,6,7",
      csvData: null,
      jsonData: "[\n  {\n      \"Column 1\": \"1-1\",\n      \"Column 2\": \"1-2\",\n      \"Column 3\": \"1-3\",\n      \"Column 4\": \"1-4\"\n  },\n  {\n      \"Column 1\": \"2-1\",\n      \"Column 2\": \"2-2\",\n      \"Column 3\": \"2-3\",\n      \"Column 4\": \"2-4\"\n  },\n  {\n      \"Column 1\": \"3-1\",\n      \"Column 2\": \"3-2\",\n      \"Column 3\": \"3-3\",\n      \"Column 4\": \"3-4\"\n  },\n  {\n      \"Column 1\": 4,\n      \"Column 2\": 5,\n      \"Column 3\": 6,\n      \"Column 4\": 7\n  }\n]"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("div", {
        className: "grid-40 mobile-grid-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-home fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), " Home"), __jsx("a", {
        href: "/demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-magic fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), " Demo"), __jsx("a", {
        href: "/docs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-book fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), " Docs"))), __jsx("div", {
        className: "grid-20 hide-on-mobile text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        className: "text-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "react-papaparse 2")), __jsx("div", {
        className: "grid-40 mobile-grid-50 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/themodernjavascript/react-papaparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-github fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), " GitHub"))))), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Choose a Demo"), __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("div", {
        className: "grid-66",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
        onSelect: function onSelect(index) {
          return _this2.setTabIndex(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabList"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "String"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Local File(s)"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "JSON to CSV")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("textarea", {
        id: "input",
        placeholder: "String input",
        onChange: this.handleStrChange,
        value: this.state.str,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Choose one or more delimited text files for react-papaparse to parse."), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onFileLoaded: this.handleReadCSV,
        inputRef: this.fileInput,
        onError: this.handleOnError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), "Sample files:", __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx("a", {
        href: "/static/csv/normal.csv",
        id: "local-normal-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Normal file")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("a", {
        href: "/static/csv/malformed.csv",
        id: "local-large-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Large file")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("a", {
        href: "/static/csv/big.csv",
        id: "local-malformed-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, "Malformed file")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx("textarea", {
        id: "json",
        placeholder: "JSON string",
        value: this.state.jsonData,
        onChange: this.handleJsonDataChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }))))), __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("div", {
        className: "see-results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Results will appear in the console of your browser's inspector tools"), __jsx("button", {
        id: "submit",
        className: "green",
        onClick: this.handleImportOffer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Parse"))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=demo.js.e504426fd4468605d43a.hot-update.js.map