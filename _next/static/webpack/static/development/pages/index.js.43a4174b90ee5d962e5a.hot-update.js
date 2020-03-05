webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/home/bunlong/workspace/react-papaparse/docs/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        id: "skrollr-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx("div", {
        id: "top",
        "data-top": "bottom: 0px; opacity: 1;",
        "data-top-bottom": "bottom: -350px; opacity: .3;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        id: "title-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "react-papaparse"), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "The powerful, in-browser React CSV parser for big boys and girls"), __jsx("a", {
        href: "#download",
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), "\xA0 Install"), __jsx("a", {
        href: "/demo",
        className: "button red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-magic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), "\xA0 Demo"), __jsx("a", {
        href: "/docs",
        className: "button gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), "\xA0 Documentation")), __jsx("div", {
        id: "title-code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "// Parse CSV string\nvar data = readString(csvString)\n\n// Convert back to CSV\nvar csv = jsonToCSV(jsonData)\n\n// Parse local CSV file\n<CSVReader \n  onDrop={this.onDrop}\n  onError={this.onError}\n  noDrag\n  style={{}}\n  config={{}}\n>\n  <span>Click to upload.</span>\n</CSVReader>\n\n// Stream big file in worker thread\nreadRemoteFile(bigFileURL, {\n  worker: true,\n  step: function(results) {\n    console.log('Row:', results.data)\n  }\n})"))))))), __jsx("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "grid-40 mobile-grid-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("a", {
        href: "/demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-magic fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), " Demo"), __jsx("a", {
        href: "/docs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-book fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), " Docs"))), __jsx("div", {
        className: "grid-20 hide-on-mobile text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("a", {
        href: "/",
        className: "text-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "react-papaparse 2")), __jsx("div", {
        className: "grid-40 mobile-grid-50 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("div", {
        className: "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-github fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), " GitHub"))))), __jsx("div", {
        className: "insignia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx("div", {
        className: "firefox-hack",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("div", {
        id: "version-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Version"), __jsx("div", {
        id: "version",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "2.0"))), __jsx("section", {
        style: {
          paddingTop: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Features"))), __jsx("div", {
        id: "ticker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("div", {
        className: "ticker-item current",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Now the fastest React CSV parser for the browser")), __jsx("div", {
        className: "ticker-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "The world's first multi-threaded CSV parser for the browser")), __jsx("div", {
        className: "ticker-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "react-papaparse can handle files gigabytes in size without crashing")), __jsx("div", {
        className: "ticker-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Use react-papaparse when performance, privacy, and correctness matter to you")), __jsx("div", {
        className: "ticker-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "react-papaparse alleviates privacy concerns related to uploading files")), __jsx("div", {
        className: "ticker-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Malformed CSV is handled gracefully with a detailed error report"))), __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("div", {
        className: "grid-33",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "CSV\u2192JSON and ", __jsx("a", {
        href: "#unparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "JSON\u2192CSV")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Auto-detect ", __jsx("a", {
        href: "#delimiter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "delimiter")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("a", {
        href: "#local-files",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Open local files")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("a", {
        href: "#remote-files",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Download remote files"))), __jsx("div", {
        className: "grid-33",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("a", {
        href: "#stream",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Stream"), " local and remote files"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("a", {
        href: "#worker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Multi-threaded")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("a", {
        href: "#header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Header row"), " support"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("a", {
        href: "#type-conversion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Type conversion"))), __jsx("div", {
        className: "grid-33",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Skip ", __jsx("a", {
        href: "#comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "commented lines")), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Fast mode"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "Graceful ", __jsx("a", {
        href: "#errors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "error"), " handling"), __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Easy to use")), __jsx("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx("div", {
        className: "grid-100 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse",
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), "\xA0 GitHub"), __jsx("a", {
        href: "/docs",
        className: "button gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), "\xA0 Documentation")))), __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Frameworks"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "react-papaparse strongly support ", __jsx("a", {
        href: "https://nextjs.org",
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Next"), ", ", __jsx("a", {
        href: "https://create-react-app.dev",
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Create React App"), " and other React frameworks. react-papaparse is the fastest React CSV parser for the browser (only works in the browser), so you need to set the component with no SSR (server-side render) ", __jsx("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "in case you use ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "readRemoteFile"), " function"), "."), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("a", {
        href: "https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr",
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Next \u2014 component with no SSR"))))))), __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "People ", __jsx("i", {
        className: "fa fa-heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), " react-papaparse"), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.npmjs.com/package/react-papaparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx("img", {
        src: "https://img.shields.io/npm/dm/react-papaparse.svg",
        alt: "react-papaparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      })))))), __jsx("section", {
        id: "parse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "CSV Parsing"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "\"Isn't parsing CSV just ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "String.split(',')"), "?\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "react-papaparse does it right. Just pass in the CSV string with an optional ", __jsx("a", {
        href: "/docs#config",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "configuration"), "."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "\nimport { readString } from 'react-papaparse'\n\nvar results = readString(csvString, config)\n\n/*\n  results = {\n    data: [ ... ],    // parsed data\n    errors: [ ... ],  // errors encountered\n    meta: { ... }     // extra parse info\n  }\n*/"))))), __jsx("section", {
        id: "delimiter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Delimiter Detection"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "\"But I don't know the delimiter...\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "That's okay. react-papaparse will scan the first few rows to find the right delimiter."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "\nimport { readString } from 'react-papaparse'\n\nvar results = readString(csvString)\n\nconsole.log(results.meta.delimiter)\n\n", "// ", __jsx("span", {
        dangerouslySetInnerHTML: {
          __html: '&bsol;t'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })))))), __jsx("section", {
        id: "local-files",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Local Files"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "\"Great, but I have a ", __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "file"), " to parse.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Then use CSVReader component instead of readString method. Since file parsing is asynchronous, don't forget callback methods."), __jsx("div", {
        id: "drag-no-click-upload",
        style: {
          fontSize: 20,
          marginTop: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Basic Upload"), __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: 14
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, __jsx("a", {
        href: "/docs#basic-upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Document"), "\xA0\xA0", __jsx("a", {
        href: "/demo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Demo")), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "import React, { Component } from 'react'\n\nimport { CSVReader } from 'react-papaparse'\n\nconst buttonRef = React.createRef()\n\nexport default class CSVReader1 extends Component {\n\n  onFileLoad = (data) => {\n    console.log('--------------------------------------------------')\n    console.log(data)\n    console.log('--------------------------------------------------')\n  }\n\n  onError = (err, file, inputElem, reason) => {\n    console.log(err)\n  }\n\n  openDialog = (e) => {\n    // Note that the ref is set async, so it might be null at some point \n    if (buttonRef.current) {\n      buttonRef.current.open(e)\n    }\n  }\n\n  render() {\n    return (\n      <div style={{marginTop: 60, marginBottom: 60}}>\n        <h5>Basic Upload</h5>\n        <CSVReader\n          ref={buttonRef}\n          onFileLoad={this.onFileLoad}\n          onError={this.onError}\n          noClick\n          noDrag\n          config={{}}\n        >\n          {({file}) => (\n            <>\n              <aside style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>\n                <button\n                  type=\"button\"\n                  onClick={this.openDialog}\n                  style={{\n                    width: '40%',\n                    borderRadius: 0,\n                    marginLeft: 0,\n                    marginRight: 0,\n                    paddingLeft: 0,\n                    paddingRight: 0,\n                  }}\n                >\n                  Browe file\n                </button>\n                <div\n                  style={{\n                    width: '60%',\n                    height: 45,\n                    borderWidth: 1,\n                    borderStyle: 'solid',\n                    borderColor: '#ccc',\n                    marginTop: 5,\n                    marginBottom: 5,\n                    paddingLeft: 13,\n                    paddingTop: 3,\n                    lineHeight: 2.2,\n                  }}\n                >\n                  {file.name}\n                </div>\n              </aside>\n            </>\n          )}\n        </CSVReader>\n      </div>\n    )\n  }\n}\n"))))), __jsx("section", {
        id: "remote-files",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "Remote Files"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, "\"No \u2014 I mean, the file isn't on my computer.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, "Oh, well then just pass in the URL and \u2014 of course \u2014 a callback."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, "readRemoteFile('http://example.com/file.csv', {\n  download: true,\n  complete: function(results) {\n    console.log(results)\n  }\n})"))))), __jsx("section", {
        id: "stream",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "Streaming"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "\"Did I mention the file is huge?\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "That's what streaming is for. Specify a step callback to receive the results row-by-row. This way, you won't load the whole file into memory and crash the browser."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "readRemoteFile('http://example.com/big.csv', {\n  step: function(row) {\n    console.log('Row:', row.data)\n  },\n  complete: function() {\n    console.log('All done!')\n  }\n})"))))), __jsx("section", {
        id: "worker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "Multi-Threading"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "\"Lovely. Now my web page locked up.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "That happens when a long-running script is executing in the same thread as the page. Use a ", __jsx("a", {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/Worker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "Worker"), " thread by specifying ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "worker: true"), ". It may take slightly longer, but your page will stay reactive."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "readRemoteFile(bigFileURL, {\n  worker: true,\n  step: function(row) {\n    console.log('Row:', row.data)\n  },\n  complete: function() {\n    console.log('All done!')\n  }\n})"))))), __jsx("section", {
        id: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "Header Row"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "\"Great! Now I want data keyed by field name.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "If you tell react-papaparse there is a header row, each row will be organized by field name instead of index."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, "// Key data by field name instead of index/position\nvar results = readString(csvString {\n  header: true\n})"))))), __jsx("section", {
        id: "type-conversion",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, "Type Conversion"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, "\"Hey, these numbers are parsed as strings.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, __jsx("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, "Everything"), " is parsed as strings. If you want numbers and booleans, you can enable dynamic typing to do the conversion for you."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, "// Converts numeric/boolean data\nvar results = readString(csvString {\n  header: true\n})"))))), __jsx("section", {
        id: "comments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, "Comments"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "\"I forgot to mention: my CSV files have comments in them.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, "Okay, first off: that's really weird. But fortunately, you can skip those lines... just specify the comment string."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, "// Mostly found in academia, some CSV files\n// may have commented lines in them\nvar results = readString(csvString {\n  comments: \"#\"\n})"))))), __jsx("section", {
        id: "errors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, "Error Handling"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        },
        __self: this
      }, "\"Aw, shoot. Errors.\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "react-papaparse handles errors pretty well. The ", __jsx("a", {
        href: "http://tools.ietf.org/html/rfc4180",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "CSV standard"), " is somewhat ", __jsx("strike", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, "loose"), " ambiguous, so react-papaparse is designed for edge cases. For example, mismatched fields won't break parsing."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, "// Example error:\n{\n  type: \"FieldMismatch\",\n  code: \"TooManyFields\",\n  message: \"Expected 3 fields, but parsed 4\",\n  row: 1\n}"))))), __jsx("section", {
        id: "unparse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container narrow-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, "JSON to CSV"), __jsx("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }, "\"Last thing: what about converting JSON to CSV?\""), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, "Use ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, "jsonToCSV()"), " function, passing in your array of arrays or array of objects. react-papaparse will figure it out."), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, __jsx("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458
        },
        __self: this
      }, "// Output is a properly-formatted CSV string.\nvar csv = jsonToCSV(jsonData)\n"))))), __jsx("section", {
        id: "download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, __jsx("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }, __jsx("div", {
        className: "grid-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, "Install")), __jsx("div", {
        className: "prefix-30 grid-40 suffix-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, __jsx("b", {
        style: {
          display: 'block',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, "npm"), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, __jsx("code", {
        className: "language-bash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, "$ npm install --save react-papaparse")), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }), __jsx("b", {
        style: {
          display: 'block',
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }, "yarn"), __jsx("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, __jsx("code", {
        className: "language-bash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475
        },
        __self: this
      }, "$ yarn add react-papaparse"))), __jsx("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }), __jsx("div", {
        className: "grid-100 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }), __jsx("a", {
        href: "https://github.com/Bunlong/react-papaparse",
        className: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      }), "\xA0 GitHub"), __jsx("a", {
        href: "/demo",
        className: "button red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-magic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }), "\xA0 Demo"), __jsx("a", {
        href: "/docs",
        className: "button gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }, __jsx("i", {
        className: "fa fa-book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }), "\xA0 Documentation"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.43a4174b90ee5d962e5a.hot-update.js.map