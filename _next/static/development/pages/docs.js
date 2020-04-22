(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/docs.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdocs&absolutePagePath=%2Fhome%2Fbunlong%2Fworkspace%2Fos%2Freact-papaparse%2Fdocs%2Fpages%2Fdocs.js!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdocs&absolutePagePath=%2Fhome%2Fbunlong%2Fworkspace%2Fos%2Freact-papaparse%2Fdocs%2Fpages%2Fdocs.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/docs", function() {
      var mod = __webpack_require__(/*! ./pages/docs.js */ "./pages/docs.js")
      if(true) {
        module.hot.accept(/*! ./pages/docs.js */ "./pages/docs.js", function() {
          if(!next.router.components["/docs"]) return
          var updatedPage = __webpack_require__(/*! ./pages/docs.js */ "./pages/docs.js")
          next.router.update("/docs", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/docs.js":
/*!***********************!*\
  !*** ./pages/docs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_screens_docs_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/screens/docs/Navbar */ "./src/components/screens/docs/Navbar.js");
/* harmony import */ var _src_components_screens_docs_Documentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/screens/docs/Documentation */ "./src/components/screens/docs/Documentation.js");
/* harmony import */ var _src_components_screens_docs_CSVToJSON__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/screens/docs/CSVToJSON */ "./src/components/screens/docs/CSVToJSON.js");
/* harmony import */ var _src_components_screens_docs_JSONToCSV__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/screens/docs/JSONToCSV */ "./src/components/screens/docs/JSONToCSV.js");
/* harmony import */ var _src_components_screens_docs_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/screens/docs/Config */ "./src/components/screens/docs/Config.js");
/* harmony import */ var _src_components_screens_docs_Result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/screens/docs/Result */ "./src/components/screens/docs/Result.js");
/* harmony import */ var _src_components_screens_docs_Extra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/screens/docs/Extra */ "./src/components/screens/docs/Extra.js");
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/pages/docs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Docs = function Docs() {
  return __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_src_components_screens_docs_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_src_components_screens_docs_Documentation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_src_components_screens_docs_CSVToJSON__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_src_components_screens_docs_JSONToCSV__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(_src_components_screens_docs_Config__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx(_src_components_screens_docs_Result__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_src_components_screens_docs_Extra__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Docs);

/***/ }),

/***/ "./src/components/screens/docs/CSVToJSON.js":
/*!**************************************************!*\
  !*** ./src/components/screens/docs/CSVToJSON.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/CSVToJSON.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/jsx-no-target-blank */


var CSVToJSON = function CSVToJSON() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h4", {
    id: "csv-to-json",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "Convert CSV to JSON"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "Delimited data can be parsed out of strings or files. Files that are parsed can be local. Local files are used with CSVReader component.")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "strings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Parse string")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 16
    }
  }, "readString(csvString", __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 74
    }
  }, "[, ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 80
    }
  }, "config"), "]"), ")"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "csvString"), " is a string of delimited text to be parsed."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "config"), " is an optional ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 52
    }
  }, "config object"), "."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Returns a ", __jsx("a", {
    href: "#results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 27
    }
  }, "parse results"), " object (if not streaming or using worker)."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "local-files",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Parse local files")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "basic-upload",
    style: {
      fontSize: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Basic Upload")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "<CSVReader\n  ref={buttonRef}\n  onFileLoad={this.handleOnDrop}\n  onError={this.handleOnError}\n  noClick\n  noDrag\n  config={{}}\n  style={{}}\n  onRemoveFile={this.handleOnRemoveFile}\n  >\n  {({ file }) => (\n    <aside>\n      <button\n        type='button'\n        onClick={this.handleOpenDialog}\n      >\n          Browe file\n      </button>\n      <div>\n        {file && file.name}\n      </div>\n      <button onClick={this.handleRemoveFile}>Remove</button>\n    </aside>\n  )}\n</CSVReader>\n")), __jsx("span", {
    style: {
      "float": 'right',
      marginBottom: 14,
      textAlignLast: 'end'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader1.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 84
    }
  }, "Source code"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://reactjs.org/docs/refs-and-the-dom.html",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }
  }, "ref")), " is a way to access/get files from ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 145
    }
  }, '<input type="file">'), " element."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "onFileLoad"), " is the function to be called passing loaded results."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "onError"), " is error handling function."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "noClick"), " If true, disables click to open the native file selection dialog."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "noDrag"), " If true, disables drag 'n' drop."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "config"), " is a ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 42
    }
  }, "config object"), " which contains a callback."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "progressBarColor"), " is a property to be used to set the color of progress bar (for example, ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 119
    }
  }, "progressBarColor='#659cef'"), ")."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "style"), " is some styles to be applied to the ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 72
    }
  }, '<input>'), " element."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Doesn't return anything. Results are provided asynchronously to a callback function."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "click-and-drag-upload",
    style: {
      fontSize: 20,
      marginTop: 50
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, "Click and Drag Upload")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "<CSVReader\n  onDrop={this.handleOnDrop}\n  onError={this.handleOnError}\n  style={{}}\n  config={{}}\n  addRemoveButton\n  onRemoveFile={this.handleOnRemoveFile}\n>\n  <span>Drop CSV file here or click to upload.</span>\n</CSVReader>\n")), __jsx("span", {
    style: {
      "float": 'right',
      marginBottom: 14,
      textAlignLast: 'end'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader2.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 84
    }
  }, "Source code"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "onDrop"), " is the function to be called passing loaded results."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "onError"), " is error handling function."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "config"), " is a ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 42
    }
  }, "config object"), " which contains a callback."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "progressBarColor"), " is a property to be used to set the color of progress bar (for example, ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 119
    }
  }, "progressBarColor='#659cef'"), ")."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "style"), " is some styles to be applied to the ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 72
    }
  }, '<input>'), " element."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, "addRemoveButton"), " If true, this will add a button to remove or cancel (if already uploading) the file."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Doesn't return anything. Results are provided asynchronously to a callback function."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "drag-no-click-upload",
    style: {
      fontSize: 20,
      marginTop: 50
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "Drag ( No Click ) Upload")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "<CSVReader\n  onDrop={this.handleOnDrop}\n  onError={this.handleOnError}\n  noClick\n  style={{}}\n  config={{}}\n  addRemoveButton\n  onRemoveFile={this.handleOnRemoveFile}\n>\n  <span>Drop CSV file here to upload.</span>\n</CSVReader>\n")), __jsx("span", {
    style: {
      "float": 'right',
      marginBottom: 14,
      textAlignLast: 'end'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader3.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 84
    }
  }, "Source code"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "onDrop"), " is the function to be called passing loaded results."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "onError"), " is error handling function."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, "noClick"), " If true, disables click to open the native file selection dialog."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "config"), " is a ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 42
    }
  }, "config object"), " which contains a callback."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "progressBarColor"), " is a property to be used to set the color of progress bar (for example, ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 119
    }
  }, "progressBarColor='#659cef'"), ")."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "style"), " is some styles to be applied to the ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 72
    }
  }, '<input>'), " element."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "addRemoveButton"), " If true, this will add a button to remove or cancel (if already uploading) the file."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Doesn't return anything. Results are provided asynchronously to a callback function."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: "click-no-drag-upload",
    style: {
      fontSize: 20,
      marginTop: 50
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, "Click ( No Drag ) Upload")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, "<CSVReader \n  onDrop={this.handleOnDrop}\n  onError={this.handleOnError}\n  noDrag\n  style={{}}\n  config={{}}\n  addRemoveButton\n  onRemoveFile={this.handleOnRemoveFile}\n>\n  <span>Click to upload.</span>\n</CSVReader>\n")), __jsx("span", {
    style: {
      "float": 'right',
      marginBottom: 14,
      textAlignLast: 'end'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader4.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 84
    }
  }, "Source code"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "onDrop"), " is the function to be called passing loaded results."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, "onError"), " is error handling function."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "noDrag"), " If true, disables drag 'n' drop."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, "config"), " is a ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 42
    }
  }, "config object"), " which contains a callback."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, "progressBarColor"), " is a property to be used to set the color of progress bar (for example, ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 119
    }
  }, "progressBarColor='#659cef'"), ")."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, "style"), " is some styles to be applied to the ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 72
    }
  }, '<input>'), " element."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, "addRemoveButton"), " If true, this will add a button to remove or cancel (if already uploading) the file."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, "Doesn't return anything. Results are provided asynchronously to a callback function."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "remote-files",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, "Parse remote file")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, "readRemoteFile(url, {\n  // rest of config ...\n})"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, "url"), " is the path or URL to the file to download."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, "The second argument is a ", __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 42
    }
  }, "config object"), "."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, "Doesn't return anything. Results are provided asynchronously to a callback function.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (CSVToJSON);

/***/ }),

/***/ "./src/components/screens/docs/Config.js":
/*!***********************************************!*\
  !*** ./src/components/screens/docs/Config.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/Config.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Config = function Config() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h4", {
    id: "config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "The Parse Config Object"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "The ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }
  }, "readString"), " function ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 51
    }
  }, "CSVReader"), " component may be passed a configuration object. It defines settings, behavior, and callbacks used during parsing. Any properties left unspecified will resort to their default values.")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "config-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Default Config With All Options")), __jsx("div", {
    className: "prefix-25 grid-50 suffix-25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "{\n  delimiter: \"\",  // auto-detect\n  newline: \"\",  // auto-detect\n  quoteChar: '\"',\n  escapeChar: '\"',\n  header: false,\n  transformHeader: undefined,\n  dynamicTyping: false,\n  preview: 0,\n  encoding: \"\",\n  worker: false,\n  comments: false,\n  step: undefined,\n  complete: undefined,\n  error: undefined,\n  download: false,\n  downloadRequestHeaders: undefined,\n  skipEmptyLines: false,\n  chunk: undefined,\n  fastMode: undefined,\n  beforeFirstChunk: undefined,\n  withCredentials: undefined,\n  transform: undefined,\n  delimitersToGuess: [',', '\t', '|', ';',", " ", __jsx("a", {
    href: "#readonly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 46
    }
  }, "RECORD_SEP"), ", ", __jsx("a", {
    href: "#readonly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 82
    }
  }, "UNIT_SEP"), "]\n}"))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "config-details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Config")), __jsx("div", {
    className: "grid-100",
    style: {
      overflowX: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("th", {
    style: {
      width: '20%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Option"), __jsx("th", {
    style: {
      width: '80%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Explanation"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, "delimiter")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "The delimiting character. Leave blank to auto-detect from a list of most common delimiters, or any values passed in through ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 143
    }
  }, "delimitersToGuess"), ". It can be a string or a function. If string, it must be one of length 1. If a function, it must accept the input as first parameter and it must return a string which will be used as delimiter. In both cases it cannot be found in ", __jsx("a", {
    href: "#readonly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 404
    }
  }, "BAD_DELIMITERS"), ".")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "newline")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "The newline sequence. Leave blank to auto-detect. Must be one of \\r, \\n, or \\r\\n.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, "quoteChar")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, "The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "escapeChar")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "The character used to escape the quote character within a field. If not set, this option will default to the value of ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 137
    }
  }, "quoteChar"), ", meaning that the default escaping of quote character within a quoted field is using the quote character two times. (e.g. ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 282
    }
  }, "\"column with \"\"quotes\"\" in text\""), ")")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "header")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, "If true, the first row of parsed data will be interpreted as field names. An array of field names will be returned in ", __jsx("a", {
    href: "#meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 137
    }
  }, "meta"), ", and each row of data will be an object of values keyed by field name instead of a simple array. Rows with a different number of fields from the header row will produce an error. Warning: Duplicate field names will overwrite values in previous fields having the same name.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "transformHeader")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, "A function to apply on each header. Requires ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 64
    }
  }, "header"), " to be ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 90
    }
  }, "true"), ". The function receives the header as its first argument.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, "dynamicTyping")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, "If true, numeric and boolean data will be converted to their type instead of remaining strings. Numeric data must conform to the definition of a decimal literal. Numerical values greater than ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 211
    }
  }, "2^53"), " or less than ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 242
    }
  }, "-2^53"), " will not be converted to numbers to preserve precision. European-formatted numbers must have commas and dots swapped. If also accepts an object or a function. If object it's values should be a boolean to indicate if dynamic typing should be applied for each column number (or header name if using headers). If it's a function, it should return a boolean value for each field number (or name if using headers) which will be passed as first argument.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 19
    }
  }, "preview")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, "If > 0, only that many rows will be parsed.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "encoding")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "The encoding to use when opening local files. If specified, it must be a value supported by the FileReader API.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  }, "worker")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, "Whether or not to use a worker thread. Using a worker will keep your page reactive, but may be slightly slower.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, "comments")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "A string that indicates a comment (for example, \"#\" or \"//\"). When react-papaparse encounters a line starting with this string, it will skip the line.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, "step")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "To ", __jsx("a", {
    href: "/faq#streaming",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 22
    }
  }, "stream"), " the input, define a callback function:", __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "step: (", __jsx("a", {
    href: "#results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 30
    }
  }, "results"), ", parser) => {\n  console.log(\"Row data:\", results.data)\n  console.log(\"Row errors:\", results.errors)\n}")), "Streaming is necessary for large files which would otherwise crash the browser. You can call ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 112
    }
  }, "parser.abort()"), " to abort parsing. And, except when using a ", __jsx("a", {
    href: "/faq#worker",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 183
    }
  }, "Web Worker"), ", you can call ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 234
    }
  }, "parser.pause()"), " to pause it, and ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 279
    }
  }, "parser.resume()"), " to resume.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }, "complete")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  }, "The callback to execute when parsing is complete. It receives the parse ", __jsx("a", {
    href: "#results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 91
    }
  }, "results"), ". If parsing a local file, the ", __jsx("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/API/File",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 152
    }
  }, "File"), " is passed in, too:", __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, "complete: (results, file) => {\n  console.log(\"Parsing complete:\", results, file)\n}")), "When streaming, parse results are ", __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 53
    }
  }, "not"), " available in this callback.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 19
    }
  }, "error")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, "A callback to execute if FileReader encounters an error. The function is passed two arguments: the error and the File.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, "downloadRequestHeaders")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 17
    }
  }, "If defined, should be an object that describes the headers, example:", __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 19
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  }, "downloadRequestHeaders: {\n  'Authorization': 'token 123345678901234567890',\n}")))), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, "skipEmptyLines")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, "If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 129
    }
  }, "'greedy'"), ", lines that don't have any content (those which have only whitespace after parsing) will also be skipped.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }, "chunk")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 17
    }
  }, "A callback function, identical to step, which activates streaming. However, this function is executed after every ", __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 133
    }
  }, "chunk"), " of the file is loaded and parsed rather than every row. Works only with local and remote files. Do not use both chunk and step callbacks together. For the function signature, see the documentation for the step function.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 19
    }
  }, "fastMode")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 17
    }
  }, "Fast mode speeds up parsing significantly for large inputs. However, it only works when the input has no quoted fields. Fast mode will automatically be enabled if no ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 185
    }
  }, "\""), " characters appear in the input. You can force fast mode either way by setting it to ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 284
    }
  }, "true"), " or ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 305
    }
  }, "false"), ".")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, "beforeFirstChunk")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, "A function to execute before parsing the first chunk. Can be used with chunk or step streaming modes. The function receives as an argument the chunk about to be parsed, and it may return a modified chunk to parse. This is useful for stripping header lines (as long as the header fits in a single chunk).")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, "withCredentials")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 17
    }
  }, "A boolean value passed directly into XMLHttpRequest's \"withCredentials\" property.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }, "transform")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 17
    }
  }, "A function to apply on each value. The function receives the value as its first argument and the column number or header name when enabled as its second argument. The return value of the function will replace the value it received. The transform function is applied before dynamicTyping.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 19
    }
  }, "delimitersToGuess")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, "An array of delimiters to guess from if the ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 63
    }
  }, "delimiter"), " option is not set.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./src/components/screens/docs/Documentation.js":
/*!******************************************************!*\
  !*** ./src/components/screens/docs/Documentation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/Documentation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Documentation = function Documentation() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Documentation"), __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "prefix-33 grid-33 suffix-33",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("ol", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#csv-to-json",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 15
    }
  }, "Convert CSV to JSON"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#strings",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "readString")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#local-files",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Parse local file")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#remote-files",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "readRemoteFile")))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#json-to-csv",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Convert JSON to CSV")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#config",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Config")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Results"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Data")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#errors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Errors")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Meta")))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#extras",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Extras"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Documentation);

/***/ }),

/***/ "./src/components/screens/docs/Extra.js":
/*!**********************************************!*\
  !*** ./src/components/screens/docs/Extra.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/Extra.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Extra = function Extra() {
  return __jsx("section", {
    style: {
      borderBottom: 0,
      paddingBottom: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h4", {
    id: "extras",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Extras"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "There's a few other things that react-papaparse exposes to you that weren't explained above.")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "readonly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Read-Only")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Read-Only Property"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Explanation"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "BAD_DELIMITERS")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "An array of characters that are not allowed as delimiters.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "RECORD_SEP")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "The true delimiter. Invisible. ASCII code 30. Should be doing the job we strangely rely upon commas and tabs for.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "UNIT_SEP")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Also sometimes used as a delimiting character. ASCII code 31.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "WORKERS_SUPPORTED")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Whether or not the browser supports HTML5 Web Workers. If false, ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 84
    }
  }, "worker: true"), " will have no effect."))))), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "configurable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Configurable")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Configurable Property"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "Explanation"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "LocalChunkSize")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "The size in bytes of each file chunk. Used when streaming files obtained from the DOM that exist on the local computer. Default 10 MB.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "DefaultDelimiter")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "The delimiter used when it is left unspecified and cannot be detected automatically. Default is comma."))))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Extra);

/***/ }),

/***/ "./src/components/screens/docs/JSONToCSV.js":
/*!**************************************************!*\
  !*** ./src/components/screens/docs/JSONToCSV.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/JSONToCSV.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var JSONToCSV = function JSONToCSV() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h4", {
    id: "json-to-csv",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Convert JSON to CSV"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "react-papaparse ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 30
    }
  }, "unparse"), " utility writes out correct delimited text strings given an array of arrays or an array of objects using ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 155
    }
  }, "jsonToCSV()"), " function.")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 16
    }
  }, "jsonToCSV(jsonData", __jsx("i", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 72
    }
  }, "[, ", __jsx("a", {
    href: "#unparse-config-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 78
    }
  }, "config"), "]"), ")"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Returns the resulting delimited text as a string."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "data"), " can be one of:", __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "An array of arrays"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "An array of objects"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "An object explicitly defining ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 51
    }
  }, "fields"), " and ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 75
    }
  }, "data")))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "config"), " is an optional ", __jsx("a", {
    href: "#unparse-config-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 50
    }
  }, "config object")))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "unparse-config-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Default Unparse Config with all options")), __jsx("div", {
    className: "prefix-25 grid-50 suffix-25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "\n{\n  quotes: false, //or array of booleans\n  quoteChar: '\"',\n  escapeChar: '\"',\n  delimiter: \",\",\n  header: true,\n  newline: \"", __jsx("span", {
    dangerouslySetInnerHTML: {
      __html: '&bsol;r&bsol;n'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), "\",\n  skipEmptyLines: false, //or 'greedy',\n  columns: null //or array of strings\n}"))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Unparse Config")), __jsx("div", {
    className: "grid-100",
    style: {
      overflowX: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("th", {
    style: {
      width: '20%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Option"), __jsx("th", {
    style: {
      width: '80% '
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Explanation"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "quotes")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 22
    }
  }, "true"), ", forces all fields to be enclosed in quotes. If an array of ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 100
    }
  }, "true/false"), " values, specifies which fields should be force-quoted (first boolean is for the first column, second boolean for the second column, ...). A function that returns a boolean values can be used to determine the quotes value of a cell. This function accepts the cell value and column index as parameters.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "quoteChar")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "The character used to quote fields.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "escapeChar")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "The character used to escape ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 48
    }
  }, "quoteChar"), " inside field values.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, "delimiter")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, "The delimiting character. It must not be found in ", __jsx("a", {
    href: "#readonly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 69
    }
  }, "BAD_DELIMITERS"), ".")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, "header")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 22
    }
  }, "false"), ", will omit the header row. If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 71
    }
  }, "data"), " is an array of arrays this option is ignored. If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 138
    }
  }, "data"), " is an array of objects the keys of the first object are the header row. If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 231
    }
  }, "data"), " is an object with the keys ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 276
    }
  }, "fields"), " and ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 300
    }
  }, "data"), " the ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 322
    }
  }, "fields"), " are the header row.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, "newline")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "The character used to determine newline sequence. It defaults to ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 84
    }
  }, "\"\\r\\n\""), ".")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }, "skipEmptyLines")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 22
    }
  }, "true"), ", lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 142
    }
  }, "'greedy'"), ", lines that don't have any content (those which have only whitespace after parsing) will also be skipped.")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, "columns")), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "If ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 22
    }
  }, "data"), " is an array of objects this option can be used to manually specify the keys (columns) you expect in the objects. If not set the keys of the first objects are used as column."))))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "unparse-examples",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "Examples")), __jsx("div", {
    className: "grid-33",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "// Two-line, comma-delimited file\nconst csv = jsonToCSV([\n  [\"1-1\", \"1-2\", \"1-3\"],\n  [\"2-1\", \"2-2\", \"2-3\"]\n])"))), __jsx("div", {
    className: "grid-33",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "// With implicit header row\n// (keys of first object populate header row)\nconst csv = jsonToCSV([\n  {\n    \"Column 1\": \"foo\",\n    \"Column 2\": \"bar\"\n  },\n  {\n    \"Column 1\": \"abc\",\n    \"Column 2\": \"def\"\n  }\n])"))), __jsx("div", {
    className: "grid-33",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "// Specifying fields and data explicitly\nconst csv = jsonToCSV({\n  \"fields\": [\"Column 1\", \"Column 2\"],\n  \"data\": [\n    [\"foo\", \"bar\"],\n    [\"abc\", \"def\"]\n  ]\n})"))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (JSONToCSV);

/***/ }),

/***/ "./src/components/screens/docs/Navbar.js":
/*!***********************************************!*\
  !*** ./src/components/screens/docs/Navbar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Navbar = function Navbar() {
  return __jsx("header", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "grid-40 mobile-grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-home fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }), " Home"), __jsx("a", {
    href: "/demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-magic fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }), " Demo"), __jsx("a", {
    href: "/docs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-book fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }), " Docs"))), __jsx("div", {
    className: "grid-20 hide-on-mobile text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "/",
    className: "text-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "react-papaparse 3")), __jsx("div", {
    className: "grid-40 mobile-grid-50 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://github.com/Bunlong/react-papaparse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fa fa-github fa-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), " GitHub")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/screens/docs/Result.js":
/*!***********************************************!*\
  !*** ./src/components/screens/docs/Result.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/bunlong/workspace/os/react-papaparse/docs/src/components/screens/docs/Result.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Result = function Result() {
  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "grid-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("h4", {
    id: "results",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "The Parse Result Object"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "A parse result always contains three objects: data, errors, and meta. Data and errors are arrays, and meta is an object. In the step callback, the data array will only contain one element.")), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "results-structure",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "Result Structure")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "{\n  data:   // array of parsed data\n  errors: // array of errors\n  meta:   // object with extra info\n}"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "data"), " is an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "errors"), " is an array of ", __jsx("a", {
    href: "#errors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 52
    }
  }, "errors"), "."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "meta"), " contains extra information about the parse, such as delimiter used, the newline sequence, whether the process was aborted, etc. Properties in this object are not guaranteed to exist in all situations."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Data")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "// Example (header: false)\n[\n  [\"Column 1\", \"Column 2\"],\n  [\"foo\", \"bar\"],\n  [\"abc\", \"def\"]\n]\n\n// Example (header: true)\n[\n  {\n    \"Column 1\": \"foo\",\n    \"Column 2\": \"bar\"\n  },\n  {\n    \"Column 1\": \"abc\",\n    \"Column 2\": \"def\"\n  }\n]"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "If header row is enabled and more fields are found on a row of data than in the header row, an extra field will appear in that row called ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 155
    }
  }, "__parsed_extra"), ". It contains an array of all data parsed from that row that extended beyond the header row."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "errors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Errors")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "// Error structure\n{\n  type: \"\",     // A generalization of the error\n  code: \"\",     // Standardized error code\n  message: \"\",  // Human-readable details\n  row: 0,       // Row index of parsed data where error is\n}"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "The error ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 27
    }
  }, "type"), " will be one of \"Quotes\", \"Delimiter\", or \"FieldMismatch\"."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "The ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "code"), " may be \"MissingQuotes\", \"UndetectableDelimiter\", \"TooFewFields\", or \"TooManyFields\" (depending on the error type)."), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Just because errors are generated does not necessarily mean that parsing failed. The worst error you can get is probably MissingQuotes."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "grid-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("h5", {
    id: "meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "Meta")), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("code", {
    className: "language-javascript",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "{\n  delimiter: // Delimiter used\n  linebreak: // Line break sequence used\n  aborted:   // Whether process was aborted\n  fields:    // Array of field names\n  truncated: // Whether preview consumed all input\n}"))), __jsx("div", {
    className: "grid-50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, "Not all meta properties will always be available. For instance, ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 81
    }
  }, "fields"), " is only given when header row is enabled."))), __jsx("div", {
    className: "clear",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ 4:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fdocs&absolutePagePath=%2Fhome%2Fbunlong%2Fworkspace%2Fos%2Freact-papaparse%2Fdocs%2Fpages%2Fdocs.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fdocs&absolutePagePath=%2Fhome%2Fbunlong%2Fworkspace%2Fos%2Freact-papaparse%2Fdocs%2Fpages%2Fdocs.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fdocs&absolutePagePath=%2Fhome%2Fbunlong%2Fworkspace%2Fos%2Freact-papaparse%2Fdocs%2Fpages%2Fdocs.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=docs.js.map