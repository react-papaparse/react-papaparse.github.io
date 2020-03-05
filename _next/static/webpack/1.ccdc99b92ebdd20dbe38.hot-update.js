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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_papaparse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-papaparse */ "../dist/index.es.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");







var _jsxFileName = "/home/bunlong/workspace/react-papaparse/docs/src/components/screens/Demo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var buttonRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();

var Demo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Demo, _Component);

  function Demo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Demo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Demo).call(this, props));

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

        if (_results) {
          console.log('--------------------------------------------------');
          console.log('Parse complete!');
          console.log('Row count: ', _results.length);
          console.log('Results: ', _results);
          console.log('Synchronous results: ', _results);
          console.log('--------------------------------------------------');
        } else {
          alert('Please choose at least one file to parse.');
          return;
        }
      } else if (index === 2) {
        if (_this.state.url === '') {
          alert('Please enter the URL of a file to download and parse.');
          return;
        }

        console.log('Running!');
        Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["readRemoteFile"])(_this.state.url, {
          complete: function complete(results) {
            console.log('--------------------------------------------------');
            console.log('Parse complete!');
            console.log('Row count: ', results.data.length);
            console.log('Errors: ', results.errors.length);
            console.log('Results: ', results);
            console.log('Synchronous results: ', results);
            console.log('--------------------------------------------------');
          }
        });
      } else {
        try {
          var _results2 = Object(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["jsonToCSV"])(_this.state.jsonData);

          console.log('--------------------------------------------------');
          console.log(_results2);
          console.log('--------------------------------------------------');
        } catch (e) {
          alert('Please enter valid JSON.');
          return;
        }
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleURLChange", function (event) {
      _this.setState({
        url: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setURL", function (url) {
      _this.setState({
        url: url
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDrop", function (data) {
      _this.setState({
        csvData: data
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onError", function (err, file, inputElem, reason) {
      console.log(err);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openDialog", function (e) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("div", {
        className: "grid-40 mobile-grid-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-home fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), " Home"), __jsx("a", {
        href: "/demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-magic fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), " Demo"), __jsx("a", {
        href: "/docs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-book fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), " Docs"))), __jsx("div", {
        className: "grid-20 hide-on-mobile text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        className: "text-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "react-papaparse 2")), __jsx("div", {
        className: "grid-40 mobile-grid-50 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-github fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }), " GitHub"))))), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Choose a Demo"), __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("div", {
        className: "grid-66",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
        onSelect: function onSelect(index) {
          return _this2.setTabIndex(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabList"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "String"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Local File(s)"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Remote File"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "JSON to CSV")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, __jsx("textarea", {
        id: "input",
        placeholder: "String input",
        onChange: this.handleStrChange,
        value: this.state.str,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), __jsx("div", {
        style: {
          marginBottom: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/ReadString.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "Source code")), __jsx("div", {
        id: "title-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "import React, { Component } from 'react'\n\nimport { readString } from 'react-papaparse'\n\nexport default class ReadString extends Component {\n  handleClick = () => {\n    var str = `Column 1,Column 2,Column 3,Column 4\n1-1,1-2,1-3,1-4\n2-1,2-2,2-3,2-4\n3-1,3-2,3-3,3-4\n4,5,6,7`\n\n    var results = readString(str)\n    \n    console.log('--------------------------------------------------')\n    console.log(results)\n    console.log('--------------------------------------------------')\n  }\n\n  render() {\n    return (\n      <>\n        <button onClick={this.handleClick}>readString</button>\n      </>\n    )\n  }\n}"))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Source code")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Choose one or more delimited text files for react-papaparse to parse."), __jsx("div", {
        style: {
          marginTop: 60,
          marginBottom: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Basic Upload"), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.onDrop,
        ref: buttonRef,
        noClick: true,
        noDrag: true,
        config: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, function (_ref) {
        var file = _ref.file;
        return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("aside", {
          style: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }, __jsx("button", {
          type: "button",
          onClick: _this2.openDialog,
          style: {
            width: '40%',
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 0,
            paddingRight: 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
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
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, file.name)));
      })), __jsx("div", {
        style: {
          marginTop: 50,
          marginBottom: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "Click and Drag Upload"), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.onDrop,
        onError: this.onError,
        style: {},
        config: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "Drop CSV file here or click to upload."))), __jsx("div", {
        style: {
          marginTop: 50,
          marginBottom: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Drag ( No Click ) Upload"), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.onDrop,
        onError: this.onError,
        noClick: true,
        style: {},
        config: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Drop CSV file here to upload."))), __jsx("div", {
        style: {
          marginTop: 50,
          marginBottom: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "Click ( No Drag ) Upload"), __jsx(react_papaparse__WEBPACK_IMPORTED_MODULE_8__["CSVReader"], {
        onDrop: this.onDrop,
        onError: this.onError,
        noDrag: true,
        style: {},
        config: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Click to upload."))), "Sample files:", __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, __jsx("a", {
        href: "/static/csv/normal.csv",
        id: "local-normal-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Normal file")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, __jsx("a", {
        href: "/static/csv/malformed.csv",
        id: "local-large-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "Large file")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, __jsx("a", {
        href: "/static/csv/big.csv",
        id: "local-malformed-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, "Malformed file")))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, __jsx("div", {
        style: {
          marginBottom: 14,
          textAlignLast: 'end'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/ReadRemoteFile.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "Source code")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Type the URL of the file to be downloaded and parsed.", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }), __jsx("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "(cross-origin requests require Access-Control-Allow-Origin header)")), __jsx("input", {
        type: "text",
        id: "url",
        placeholder: "URL",
        value: this.state.url,
        onChange: this.handleURLChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }), "Sample remote files:", __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx("a", {
        id: "local-normal-file",
        onClick: function onClick() {
          return _this2.setURL('/static/csv/normal.csv');
        },
        style: {
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Normal file")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("a", {
        id: "local-large-file",
        onClick: function onClick() {
          return _this2.setURL('/static/csv/big.csv');
        },
        style: {
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Large file")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, __jsx("a", {
        id: "local-malformed-file",
        onClick: function onClick() {
          return _this2.setURL('/static/csv/malformed.csv');
        },
        style: {
          cursor: 'pointer'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }, "Malformed file")))), __jsx("div", {
        id: "title-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, "import React, { Component } from 'react'\n\nimport { readString } from 'react-papaparse'\n\nexport default class ReadString extends Component {\n  handleClick = () => {\n    var str = `Column 1,Column 2,Column 3,Column 4\n1-1,1-2,1-3,1-4\n2-1,2-2,2-3,2-4\n3-1,3-2,3-3,3-4\n4,5,6,7`\n\n    var results = readString(str)\n    \n    console.log('--------------------------------------------------')\n    console.log(results)\n    console.log('--------------------------------------------------')\n  }\n\n  render() {\n    return (\n      <>\n        <button onClick={this.handleClick}>readString</button>\n      </>\n    )\n  }\n}"))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, __jsx("div", {
        className: "input-area",
        id: "input-string",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, __jsx("div", {
        style: {
          "float": 'right',
          marginBottom: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/JsonToCSV.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Source code")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, __jsx("textarea", {
        id: "json",
        placeholder: "JSON string",
        value: this.state.jsonData,
        onChange: this.handleJsonDataChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }))))), __jsx("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, __jsx("div", {
        className: "see-results",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, "Results will appear in the console of your browser's inspector tools"), __jsx("button", {
        id: "submit",
        className: "green",
        onClick: this.handleImportOffer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Parse"))))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=1.ccdc99b92ebdd20dbe38.hot-update.js.map