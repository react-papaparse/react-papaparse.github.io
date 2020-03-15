(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1OyB":function(e,n,a){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}a.d(n,"a",(function(){return r}))},JX7q:function(e,n,a){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(n,"a",(function(){return r}))},Ji7U:function(e,n,a){"use strict";function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function t(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}a.d(n,"a",(function(){return t}))},Qetd:function(e,n,a){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return p}));var r=a("1OyB"),t=a("vuIU"),o=a("md7G"),i=a("foSv"),l=a("Ji7U"),s=a("q1tI"),c=a.n(s),d=c.a.createElement,p=function(e){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){return d(c.a.Fragment,null,d("div",{id:"skrollr-body"},d("div",{id:"top","data-top":"bottom: 0px; opacity: 1;","data-top-bottom":"bottom: -350px; opacity: .3;"},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("div",{id:"title-main"},d("h1",null,"react-papaparse"),d("h2",null,"The powerful, in-browser React CSV parser for big boys and girls"),d("a",{href:"#download",className:"button"},d("i",{className:"fa fa-download"}),"\xa0 Install"),d("a",{href:"/demo",className:"button red"},d("i",{className:"fa fa-magic"}),"\xa0 Demo"),d("a",{href:"/docs",className:"button gray"},d("i",{className:"fa fa-book"}),"\xa0 Documentation")),d("div",{id:"title-code"},d("pre",null,d("code",{className:"language-javascript"},"// Parse CSV string\nvar data = readString(csvString)\n\n// Convert back to CSV\nvar csv = jsonToCSV(jsonData)\n\n// Parse local CSV file\n<CSVReader \n  onDrop={this.onDrop}\n  onError={this.onError}\n  noDrag\n>\n  <span>Click to upload.</span>\n</CSVReader>\n\n// Stream big file in worker thread\nreadRemoteFile(bigFileURL, {\n  worker: true,\n  step: function(results) {\n    console.log('Row:', results.data)\n  }\n})"))))))),d("main",null,d("header",null,d("div",{className:"grid-container"},d("div",{className:"grid-40 mobile-grid-50"},d("div",{className:"links"},d("a",{href:"/demo"},d("i",{className:"fa fa-magic fa-lg"})," Demo"),d("a",{href:"/docs"},d("i",{className:"fa fa-book fa-lg"})," Docs"))),d("div",{className:"grid-20 hide-on-mobile text-center"},d("a",{href:"/",className:"text-logo"},"react-papaparse 3")),d("div",{className:"grid-40 mobile-grid-50 text-right"},d("div",{className:"links"},d("a",{href:"https://github.com/Bunlong/react-papaparse"},d("i",{className:"fa fa-github fa-lg"})," GitHub"))))),d("div",{className:"insignia"},d("div",{className:"firefox-hack"},d("div",{id:"version-intro"},"Version"),d("div",{id:"version"},"3"))),d("section",{style:{paddingTop:0}},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h3",null,"Features"))),d("div",{id:"ticker"},d("div",{className:"ticker-item current"},d("p",null,"Now the fastest React CSV parser for the browser")),d("div",{className:"ticker-item"},d("p",null,"The world's first multi-threaded CSV parser for the browser")),d("div",{className:"ticker-item"},d("p",null,"react-papaparse can handle files gigabytes in size without crashing")),d("div",{className:"ticker-item"},d("p",null,"Use react-papaparse when performance, privacy, and correctness matter to you")),d("div",{className:"ticker-item"},d("p",null,"react-papaparse alleviates privacy concerns related to uploading files")),d("div",{className:"ticker-item"},d("p",null,"Malformed CSV is handled gracefully with a detailed error report"))),d("div",{className:"grid-container"},d("div",{className:"grid-33"},d("li",null,"CSV\u2192JSON and ",d("a",{href:"#unparse"},"JSON\u2192CSV")),d("li",null,"Auto-detect ",d("a",{href:"#delimiter"},"delimiter")),d("li",null,d("a",{href:"#local-files"},"Open local files")),d("li",null,d("a",{href:"#remote-files"},"Download remote files"))),d("div",{className:"grid-33"},d("li",null,d("a",{href:"#stream"},"Stream")," local and remote files"),d("li",null,d("a",{href:"#worker"},"Multi-threaded")),d("li",null,d("a",{href:"#header"},"Header row")," support"),d("li",null,d("a",{href:"#type-conversion"},"Type conversion"))),d("div",{className:"grid-33"},d("li",null,"Skip ",d("a",{href:"#comments"},"commented lines")),d("li",null,"Fast mode"),d("li",null,"Graceful ",d("a",{href:"#errors"},"error")," handling"),d("li",null,"Easy to use")),d("div",{className:"clear"}),d("br",null),d("br",null),d("div",{className:"grid-100 text-center"},d("a",{href:"https://github.com/Bunlong/react-papaparse",className:"button"},d("i",{className:"fa fa-github"}),"\xa0 GitHub"),d("a",{href:"/docs",className:"button gray"},d("i",{className:"fa fa-book"}),"\xa0 Documentation")))),d("section",null,d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h3",null,"Frameworks"),d("p",null,"react-papaparse strongly support ",d("a",{href:"https://nextjs.org",target:"blank"},"Next"),", ",d("a",{href:"https://create-react-app.dev",target:"blank"},"Create React App")," and other React frameworks. react-papaparse is the fastest React CSV parser for the browser (only works in the browser), so you need to set the component with no SSR (server-side render) ",d("b",null,"in case you use ",d("code",null,"readRemoteFile")," function"),"."),d("p",null,d("ul",null,d("li",null,d("a",{href:"https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr",target:"blank"},"Next \u2014 component with no SSR"))))))),d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100 text-center"},d("h3",null,"People ",d("i",{className:"fa fa-heart"})," react-papaparse"),d("p",null,d("a",{href:"https://www.npmjs.com/package/react-papaparse"},d("img",{src:"https://img.shields.io/npm/dm/react-papaparse.svg",alt:"react-papaparse"})))))),d("section",{id:"parse"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"CSV Parsing"),d("h5",null,"\"Isn't parsing CSV just ",d("code",null,"String.split(',')"),'?"'),d("p",null,"react-papaparse does it right. Just pass in the CSV string with an optional ",d("a",{href:"/docs#config"},"configuration"),"."),d("pre",null,d("code",{className:"language-javascript"},"\nimport { readString } from 'react-papaparse'\n\nvar results = readString(csvString, config)\n\n/*\n  results = {\n    data: [ ... ],    // parsed data\n    errors: [ ... ],  // errors encountered\n    meta: { ... }     // extra parse info\n  }\n*/"))))),d("section",{id:"delimiter"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Delimiter Detection"),d("h5",null,'"But I don\'t know the delimiter..."'),d("p",null,"That's okay. react-papaparse will scan the first few rows to find the right delimiter."),d("pre",null,d("code",{className:"language-javascript"},"\nimport { readString } from 'react-papaparse'\n\nvar results = readString(csvString)\n\nconsole.log(results.meta.delimiter)\n\n","// ",d("span",{dangerouslySetInnerHTML:{__html:"&bsol;t"}})))))),d("section",{id:"local-files"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Local Files"),d("h5",null,'"Great, but I have a ',d("i",null,"file"),' to parse."'),d("p",null,"Then use CSVReader component instead of readString method. Since file parsing is asynchronous, don't forget callback methods."),d("div",{id:"drag-no-click-upload",style:{fontSize:20,marginTop:10}},"Basic Upload"),d("div",{style:{textAlign:"center",paddingTop:50,paddingBottom:50}},d("img",{src:"/static/images/csvreader1.png",alt:"Basic Upload",style:{maxWidth:"100%",height:"auto"}})),d("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:14}},d("a",{href:"/docs#basic-upload"},"Properties"),"\xa0 | \xa0",d("a",{href:"/demo"},"Demo")),d("pre",null,d("code",{className:"language-javascript"},"import React, { Component } from 'react'\n\nimport { CSVReader } from 'react-papaparse'\n\nconst buttonRef = React.createRef()\n\nexport default class CSVReader extends Component {\n\n  onFileLoad = (data) => {\n    console.log('--------------------------------------------------')\n    console.log(data)\n    console.log('--------------------------------------------------')\n  }\n\n  onError = (err, file, inputElem, reason) => {\n    console.log(err)\n  }\n\n  openDialog = (e) => {\n    // Note that the ref is set async, so it might be null at some point \n    if (buttonRef.current) {\n      buttonRef.current.open(e)\n    }\n  }\n\n  render() {\n    return (\n      <>\n        <CSVReader\n          ref={buttonRef}\n          onFileLoad={this.onFileLoad}\n          onError={this.onError}\n          noClick\n          noDrag\n        >\n          {({file}) => (\n            <>\n              <aside style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>\n                <button\n                  type=\"button\"\n                  onClick={this.openDialog}\n                  style={{\n                    width: '40%',\n                    borderRadius: 0,\n                    marginLeft: 0,\n                    marginRight: 0,\n                    paddingLeft: 0,\n                    paddingRight: 0,\n                  }}\n                >\n                  Browe file\n                </button>\n                <div\n                  style={{\n                    width: '60%',\n                    height: 45,\n                    borderWidth: 1,\n                    borderStyle: 'solid',\n                    borderColor: '#ccc',\n                    marginTop: 5,\n                    marginBottom: 5,\n                    paddingLeft: 13,\n                    paddingTop: 3,\n                    lineHeight: 2.2,\n                  }}\n                >\n                  {file.name}\n                </div>\n              </aside>\n            </>\n          )}\n        </CSVReader>\n      </>\n    )\n  }\n}\n")),d("div",{id:"drag-no-click-upload",style:{fontSize:20,marginTop:35}},"Click and Drag Upload"),d("div",{style:{textAlign:"center",paddingTop:50,paddingBottom:50}},d("img",{src:"/static/images/csvreader2.png",alt:"Click and Drag Upload",style:{maxWidth:"100%",height:"auto"}})),d("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:14}},d("a",{href:"/docs#click-and-drag-upload"},"Properties"),"\xa0 | \xa0",d("a",{href:"/demo"},"Demo")),d("pre",null,d("code",{className:"language-javascript"},"import React, { Component } from 'react'\n\nimport { CSVReader } from 'react-papaparse'\n\nexport default class CSVReader extends Component {\n\n  onDrop = (data) => {\n    console.log('--------------------------------------------------')\n    console.log(data)\n    console.log('--------------------------------------------------')\n  }\n\n  onError = (err, file, inputElem, reason) => {\n    console.log(err)\n  }\n\n  render() {\n    return (\n      <>\n        <CSVReader \n          onDrop={this.onDrop}\n          onError={this.onError}\n        >\n          <span>Drop CSV file here or click to upload.</span>\n        </CSVReader>\n      </>\n    )\n  }\n}\n")),d("div",{id:"drag-no-click-upload",style:{fontSize:20,marginTop:35}},"Drag ( No Click ) Upload"),d("div",{style:{textAlign:"center",paddingTop:50,paddingBottom:50}},d("img",{src:"/static/images/csvreader3.png",alt:"Drag ( No Click ) Upload",style:{maxWidth:"100%",height:"auto"}})),d("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:14}},d("a",{href:"/docs#drag-no-click-upload"},"Properties"),"\xa0 | \xa0",d("a",{href:"/demo"},"Demo")),d("pre",null,d("code",{className:"language-javascript"},"import React, { Component } from 'react'\n\nimport { CSVReader } from 'react-papaparse'\n\nexport default class CSVReader extends Component {\n\n  onDrop = (data) => {\n    console.log('--------------------------------------------------')\n    console.log(data)\n    console.log('--------------------------------------------------')\n  }\n\n  onError = (err, file, inputElem, reason) => {\n    console.log(err)\n  }\n\n  render() {\n    return (\n      <>\n        <CSVReader\n          onDrop={this.onDrop}\n          onError={this.onError}\n          noClick\n        >\n          <span>Drop CSV file here to upload.</span>\n        </CSVReader>\n      </>\n    )\n  }\n}\n")),d("div",{id:"drag-no-click-upload",style:{fontSize:20,marginTop:35}},"Click ( No Drag ) Upload"),d("div",{style:{textAlign:"center",paddingTop:50,paddingBottom:50}},d("img",{src:"/static/images/csvreader4.png",alt:"Click ( No Drag ) Upload",style:{maxWidth:"100%",height:"auto"}})),d("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:14}},d("a",{href:"/docs#click-no-drag-upload"},"Properties"),"\xa0 | \xa0",d("a",{href:"/demo"},"Demo")),d("pre",null,d("code",{className:"language-javascript"},"import React, { Component } from 'react'\n\nimport { CSVReader } from 'react-papaparse'\n\nexport default class CSVReader extends Component {\n\n  onDrop = (data) => {\n    console.log('--------------------------------------------------')\n    console.log(data)\n    console.log('--------------------------------------------------')\n  }\n\n  onError = (err, file, inputElem, reason) => {\n    console.log(err)\n  }\n\n  render() {\n    return (\n      <>\n        <CSVReader\n          onDrop={this.onDrop}\n          onError={this.onError}\n          noDrag\n        >\n          <span>Click to upload.</span>\n        </CSVReader>\n      </>\n    )\n  }\n}\n"))))),d("section",{id:"remote-files"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Remote Files"),d("h5",null,'"No \u2014 I mean, the file isn\'t on my computer."'),d("p",null,"Oh, well then just pass in the URL and \u2014 of course \u2014 a callback."),d("pre",null,d("code",{className:"language-javascript"},"readRemoteFile('http://example.com/file.csv', {\n  download: true,\n  complete: function(results) {\n    console.log(results)\n  }\n})"))))),d("section",{id:"stream"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Streaming"),d("h5",null,'"Did I mention the file is huge?"'),d("p",null,"That's what streaming is for. Specify a step callback to receive the results row-by-row. This way, you won't load the whole file into memory and crash the browser."),d("pre",null,d("code",{className:"language-javascript"},"readRemoteFile('http://example.com/big.csv', {\n  step: function(row) {\n    console.log('Row:', row.data)\n  },\n  complete: function() {\n    console.log('All done!')\n  }\n})"))))),d("section",{id:"worker"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Multi-Threading"),d("h5",null,'"Lovely. Now my web page locked up."'),d("p",null,"That happens when a long-running script is executing in the same thread as the page. Use a ",d("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Worker"},"Worker")," thread by specifying ",d("code",null,"worker: true"),". It may take slightly longer, but your page will stay reactive."),d("pre",null,d("code",{className:"language-javascript"},"readRemoteFile(bigFileURL, {\n  worker: true,\n  step: function(row) {\n    console.log('Row:', row.data)\n  },\n  complete: function() {\n    console.log('All done!')\n  }\n})"))))),d("section",{id:"header"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Header Row"),d("h5",null,'"Great! Now I want data keyed by field name."'),d("p",null,"If you tell react-papaparse there is a header row, each row will be organized by field name instead of index."),d("pre",null,d("code",{className:"language-javascript"},"// Key data by field name instead of index/position\nvar results = readString(csvString {\n  header: true\n})"))))),d("section",{id:"type-conversion"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Type Conversion"),d("h5",null,'"Hey, these numbers are parsed as strings."'),d("p",null,d("i",null,"Everything")," is parsed as strings. If you want numbers and booleans, you can enable dynamic typing to do the conversion for you."),d("pre",null,d("code",{className:"language-javascript"},"// Converts numeric/boolean data\nvar results = readString(csvString {\n  dynamicTyping: true\n})"))))),d("section",{id:"comments"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Comments"),d("h5",null,'"I forgot to mention: my CSV files have comments in them."'),d("p",null,"Okay, first off: that's really weird. But fortunately, you can skip those lines... just specify the comment string."),d("pre",null,d("code",{className:"language-javascript"},'// Mostly found in academia, some CSV files\n// may have commented lines in them\nvar results = readString(csvString {\n  comments: "#"\n})'))))),d("section",{id:"errors"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"Error Handling"),d("h5",null,'"Aw, shoot. Errors."'),d("p",null,"react-papaparse handles errors pretty well. The ",d("a",{href:"http://tools.ietf.org/html/rfc4180"},"CSV standard")," is somewhat ",d("strike",null,"loose")," ambiguous, so react-papaparse is designed for edge cases. For example, mismatched fields won't break parsing."),d("pre",null,d("code",{className:"language-javascript"},'// Example error:\n{\n  type: "FieldMismatch",\n  code: "TooManyFields",\n  message: "Expected 3 fields, but parsed 4",\n  row: 1\n}'))))),d("section",{id:"unparse"},d("div",{className:"grid-container narrow-grid"},d("div",{className:"grid-100"},d("h4",null,"JSON to CSV"),d("h5",null,'"Last thing: what about converting JSON to CSV?"'),d("p",null,"Use ",d("code",null,"jsonToCSV()")," function, passing in your array of arrays or array of objects. react-papaparse will figure it out."),d("pre",null,d("code",{className:"language-javascript"},"// Output is a properly-formatted CSV string.\nvar csv = jsonToCSV(jsonData)\n"))))),d("section",{id:"download"},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h3",null,"Install")),d("div",{className:"prefix-30 grid-40 suffix-30"},d("b",{style:{display:"block",textAlign:"center"}},"npm"),d("pre",null,d("code",{className:"language-bash"},"$ npm install --save react-papaparse")),d("br",null),d("b",{style:{display:"block",textAlign:"center"}},"yarn"),d("pre",null,d("code",{className:"language-bash"},"$ yarn add react-papaparse"))),d("div",{className:"clear"}),d("div",{className:"grid-100 text-center"},d("br",null),d("br",null),d("a",{href:"https://github.com/Bunlong/react-papaparse",className:"button"},d("i",{className:"fa fa-github"}),"\xa0 GitHub"),d("a",{href:"/demo",className:"button red"},d("i",{className:"fa fa-magic"}),"\xa0 Demo"),d("a",{href:"/docs",className:"button gray"},d("i",{className:"fa fa-book"}),"\xa0 Documentation"))))))}}]),n}(s.Component)},foSv:function(e,n,a){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(n,"a",(function(){return r}))},md7G:function(e,n,a){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e){return(t="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}a.d(n,"a",(function(){return i}));var o=a("JX7q");function i(e,n){return!n||"object"!==t(n)&&"function"!==typeof n?Object(o.a)(e):n}},vlRD:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])},vuIU:function(e,n,a){"use strict";function r(e,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,n,a){return n&&r(e.prototype,n),a&&r(e,a),e}a.d(n,"a",(function(){return t}))}},[["vlRD",1,0]]]);