(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0iUn":function(e,a,n){"use strict";function r(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}n.d(a,"a",(function(){return r}))},"AT/M":function(e,a,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(a,"a",(function(){return r}))},MI3g:function(e,a,n){"use strict";var r=n("XVgq"),t=n.n(r),i=n("Z7t5"),s=n.n(i);function o(e){return(o="function"===typeof s.a&&"symbol"===typeof t.a?function(e){return typeof e}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e})(e)}function l(e){return(l="function"===typeof s.a&&"symbol"===o(t.a)?function(e){return o(e)}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":o(e)})(e)}var c=n("AT/M");function d(e,a){return!a||"object"!==l(a)&&"function"!==typeof a?Object(c.a)(e):a}n.d(a,"a",(function(){return d}))},RNiq:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return u}));var r=n("0iUn"),t=n("sLSF"),i=n("MI3g"),s=n("a7VT"),o=n("Tit0"),l=n("q1tI"),c=n.n(l),d=c.a.createElement,u=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(t.a)(a,[{key:"render",value:function(){return d(c.a.Fragment,null,d("div",{id:"skrollr-body"},d("div",{id:"top","data-top":"bottom: 0px; opacity: 1;","data-top-bottom":"bottom: -350px; opacity: .3;"},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("div",{id:"title-main"},d("h1",null,"react-papaparse"),d("h2",null,"The powerful, in-browser React CSV parser for big boys and girls"),d("a",{href:"#download",className:"button"},d("i",{className:"fa fa-download"}),"\xa0 Install"),d("a",{href:"/demo",className:"button red"},d("i",{className:"fa fa-magic"}),"\xa0 Demo"),d("a",{href:"/docs",className:"button gray"},d("i",{className:"fa fa-book"}),"\xa0 Documentation")),d("div",{id:"title-code"},d("pre",null,d("code",{className:"language-javascript"},"// Parse CSV string\nvar data = readString(csvString)\n\n// Convert back to CSV\nvar csv = jsonToCSV(jsonData)\n\n// Parse local CSV file\n<CSVReader\n  onFileLoaded={this.handleReadCSV}\n  inputRef={this.fileInput}\n  style={{display: 'none'}}\n  onError={this.handleOnError}\n/>"))))))),d("main",null,d("header",null,d("div",{className:"grid-container"},d("div",{className:"grid-40 mobile-grid-50"},d("div",{className:"links"},d("a",{href:"/demo"},d("i",{className:"fa fa-magic fa-lg"})," Demo"),d("a",{href:"/docs"},d("i",{className:"fa fa-book fa-lg"})," Docs"))),d("div",{className:"grid-20 hide-on-mobile text-center"},d("a",{href:"/",className:"text-logo"},"react-papaparse 2")),d("div",{className:"grid-40 mobile-grid-50 text-right"},d("div",{className:"links"},d("a",{href:"https://github.com/themodernjavascript/react-papaparse"},d("i",{className:"fa fa-github fa-lg"})," GitHub"))))),d("div",{className:"insignia"},d("div",{className:"firefox-hack"},d("div",{id:"version-intro"},"Version"),d("div",{id:"version"},"2.0"))),d("section",{style:{paddingTop:0}},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h3",null,"Features"))),d("div",{id:"ticker"},d("div",{className:"ticker-item current"},d("p",null,"Now the fastest React CSV parser for the browser")),d("div",{className:"ticker-item"},d("p",null,"The world's first multi-threaded CSV parser for the browser")),d("div",{className:"ticker-item"},d("p",null,"react-papaparse can handle files gigabytes in size without crashing")),d("div",{className:"ticker-item"},d("p",null,"Use react-papaparse when performance, privacy, and correctness matter to you")),d("div",{className:"ticker-item"},d("p",null,"react-papaparse alleviates privacy concerns related to uploading files")),d("div",{className:"ticker-item"},d("p",null,"Malformed CSV is handled gracefully with a detailed error report"))),d("div",{className:"grid-container"},d("div",{className:"grid-33"},d("li",null,"CSV\u2192JSON and ",d("a",{href:"#unparse"},"JSON\u2192CSV")),d("li",null,"Auto-detect ",d("a",{href:"#delimiter"},"delimiter")),d("li",null,d("a",{href:"#local-files"},"Open local files"))),d("div",{className:"grid-33"},d("li",null,d("a",{href:"#stream"},"Stream")," local and remote files"),d("li",null,d("a",{href:"#worker"},"Multi-threaded")),d("li",null,d("a",{href:"#type-conversion"},"Type conversion"))),d("div",{className:"grid-33"},d("li",null,"Skip ",d("a",{href:"#comments"},"commented lines")),d("li",null,d("a",{href:"#header"},"Header row")," support"),d("li",null,"Graceful ",d("a",{href:"#errors"},"error")," handling")),d("div",{className:"clear"}),d("br",null),d("br",null),d("div",{className:"grid-100 text-center"},d("a",{href:"https://github.com/themodernjavascript/react-papaparse",className:"button"},d("i",{className:"fa fa-github"}),"\xa0 GitHub"),d("a",{href:"/docs",className:"button gray"},d("i",{className:"fa fa-book"}),"\xa0 Documentation")))),d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100 text-center"},d("h3",null,"People ",d("i",{className:"fa fa-heart"})," react-papaparse")))),d("section",{id:"parse"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"CSV Parsing"),d("h5",null,"\"Isn't parsing CSV just ",d("code",null,"String.split(',')"),'?"'),d("p",null,"react-papaparse does it right. Just pass in the CSV string with an optional ",d("a",{href:"/docs#config"},"configuration"),"."),d("pre",null,d("code",{className:"language-javascript"},"\nimport { readString } from 'react-papaparse'\n\nvar results = readString(csvString, config)\n\n/*\n  results = {\n    data: [ ... ],    // parsed data\n    errors: [ ... ],  // errors encountered\n    meta: { ... }     // extra parse info\n  }\n*/"))))),d("section",{id:"delimiter"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Delimiter Detection"),d("h5",null,'"But I don\'t know the delimiter..."'),d("p",null,"That's okay. react-papaparse will scan the first few rows to find the right delimiter."),d("pre",null,d("code",{className:"language-javascript"},"\nimport { readString } from 'react-papaparse'\n\nvar results = readString(csvString)\n\nconsole.log(results.meta.delimiter)\n\n","// ",d("span",{dangerouslySetInnerHTML:{__html:"&bsol;t"}})))))),d("section",{id:"local-files"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Local Files"),d("h5",null,'"Great, but I have a ',d("i",null,"file"),' to parse."'),d("p",null,"Then use CSVReader component instead of readString method. Since file parsing is asynchronous, don't forget callback methods."),d("pre",null,d("code",{className:"language-javascript"},"\nimport React, { Component } from 'react'\n\nimport { CSVReader } from 'react-papaparse'\n\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.fileInput = React.createRef()\n  }\n\n  handleReadCSV = (data) => {\n    console.log(data)\n  }\n\n  handleOnError = (err, file, inputElem, reason) => {\n    console.log(err)\n  }\n\n  handleImportOffer = () => {\n    this.fileInput.current.click()\n  }\n\n  render() {\n    return (\n      <div>\n        <CSVReader\n          onFileLoaded={this.handleReadCSV}\n          inputRef={this.fileInput}\n          style={{display: 'none'}}\n          onError={this.handleOnError}\n        />\n        <button onClick={this.handleImportOffer}>Import</button>\n      </div>\n    )\n  }\n}\n\nexport default App\n"))))),d("section",{id:"stream"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Streaming"),d("h5",null,'"Did I mention the file is huge?"'),d("p",null,"That's what streaming is for. Specify a step callback to receive the results row-by-row. This way, you won't load the whole file into memory and crash the browser."),d("pre",null,d("code",{className:"language-javascript"},"<CSVReader\n  inputRef={this.fileInput}\n  style={{display: 'none'}}\n  onError={this.handleOnError}\n  configOptions={\n    step: function(row) {\n      console.log(\"Row:\", row.data);\n    }\n  }\n/>"))))),d("section",{id:"worker"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Multi-Threading"),d("h5",null,'"Lovely. Now my web page locked up."'),d("p",null,"That happens when a long-running script is executing in the same thread as the page. Use a ",d("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Worker"},"Worker")," thread by specifying ",d("code",null,"worker: true"),". It may take slightly longer, but your page will stay reactive."),d("pre",null,d("code",{className:"language-javascript"},"<CSVReader\n  inputRef={this.fileInput}\n  style={{display: 'none'}}\n  onError={this.handleOnError}\n  configOptions={\n    worker: true,\n    step: function(row) {\n      console.log(\"Row:\", row.data);\n    }\n  }\n/>"))))),d("section",{id:"header"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Header Row"),d("h5",null,'"Great! Now I want data keyed by field name."'),d("p",null,"If you tell react-papaparse there is a header row, each row will be organized by field name instead of index."),d("pre",null,d("code",{className:"language-javascript"},"// Key data by field name instead of index/position\nvar results = readString(csvString {\n  header: true\n})"))))),d("section",{id:"type-conversion"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Type Conversion"),d("h5",null,'"Hey, these numbers are parsed as strings."'),d("p",null,d("i",null,"Everything")," is parsed as strings. If you want numbers and booleans, you can enable dynamic typing to do the conversion for you."),d("pre",null,d("code",{className:"language-javascript"},"// Converts numeric/boolean data\nvar results = readString(csvString {\n  header: true\n})"))))),d("section",{id:"comments"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Comments"),d("h5",null,'"I forgot to mention: my CSV files have comments in them."'),d("p",null,"Okay, first off: that's really weird. But fortunately, you can skip those lines... just specify the comment string."),d("pre",null,d("code",{className:"language-javascript"},'// Mostly found in academia, some CSV files\n// may have commented lines in them\nvar results = readString(csvString {\n  comments: "#"\n})'))))),d("section",{id:"errors"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Error Handling"),d("h5",null,'"Aw, shoot. Errors."'),d("p",null,"react-papaparse handles errors pretty well. The ",d("a",{href:"http://tools.ietf.org/html/rfc4180"},"CSV standard")," is somewhat ",d("strike",null,"loose")," ambiguous, so react-papaparse is designed for edge cases. For example, mismatched fields won't break parsing."),d("pre",null,d("code",{className:"language-javascript"},'// Example error:\n{\n  type: "FieldMismatch",\n  code: "TooManyFields",\n  message: "Expected 3 fields, but parsed 4",\n  row: 1\n}'))))),d("section",{id:"unparse"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"JSON to CSV"),d("h5",null,'"Last thing: what about converting JSON to CSV?"'),d("p",null,"Use ",d("code",null,"jsonToCSV()")," function, passing in your array of arrays or array of objects. react-papaparse will figure it out."),d("pre",null,d("code",{className:"language-javascript"},"// Output is a properly-formatted CSV string.\nvar csv = jsonToCSV(jsonData)\n"))))),d("section",{id:"download"},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h3",null,"Install")),d("div",{className:"prefix-30 grid-40 suffix-30"},d("b",{style:{display:"block",textAlign:"center"}},"npm"),d("pre",null,d("code",{className:"language-bash"},"$ npm install --save react-papaparse")),d("br",null),d("b",{style:{display:"block",textAlign:"center"}},"yarn"),d("pre",null,d("code",{className:"language-bash"},"$ yarn add react-papaparse"))),d("div",{className:"clear"}),d("div",{className:"grid-100 text-center"},d("br",null),d("br",null),d("a",{href:"https://github.com/themodernjavascript/react-papaparse",className:"button"},d("i",{className:"fa fa-github"}),"\xa0 GitHub"),d("a",{href:"/demo",className:"button red"},d("i",{className:"fa fa-magic"}),"\xa0 Demo"),d("a",{href:"/docs",className:"button gray"},d("i",{className:"fa fa-book"}),"\xa0 Documentation"))))))}}]),a}(l.Component)},Tit0:function(e,a,n){"use strict";var r=n("SqZg"),t=n.n(r),i=n("TRZx"),s=n.n(i);function o(e,a){return(o=s.a||function(e,a){return e.__proto__=a,e})(e,a)}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=t()(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&o(e,a)}n.d(a,"a",(function(){return l}))},a7VT:function(e,a,n){"use strict";n.d(a,"a",(function(){return o}));var r=n("Bhuq"),t=n.n(r),i=n("TRZx"),s=n.n(i);function o(e){return(o=s.a?t.a:function(e){return e.__proto__||t()(e)})(e)}},sLSF:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));var r=n("hfKm"),t=n.n(r);function i(e,a){for(var n=0;n<a.length;n++){var r=a[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),t()(e,r.key,r)}}function s(e,a,n){return a&&i(e.prototype,a),n&&i(e,n),e}},vlRD:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);