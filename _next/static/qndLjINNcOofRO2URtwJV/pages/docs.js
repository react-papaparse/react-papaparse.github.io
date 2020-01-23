(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0iUn":function(e,l,n){"use strict";function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}n.d(l,"a",(function(){return a}))},"AT/M":function(e,l,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(l,"a",(function(){return a}))},IYmA:function(e,l,n){"use strict";n.r(l),n.d(l,"default",(function(){return c}));var a=n("0iUn"),t=n("sLSF"),r=n("MI3g"),o=n("a7VT"),i=n("Tit0"),s=n("q1tI"),u=n.n(s),d=u.a.createElement,c=function(e){function l(){return Object(a.a)(this,l),Object(r.a)(this,Object(o.a)(l).apply(this,arguments))}return Object(i.a)(l,e),Object(t.a)(l,[{key:"render",value:function(){return d(u.a.Fragment,null,d("main",null,d("header",null,d("div",{className:"grid-container"},d("div",{className:"grid-40 mobile-grid-50"},d("div",{className:"links"},d("a",{href:"/"},d("i",{className:"fa fa-home fa-lg"})," Home"),d("a",{href:"/demo"},d("i",{className:"fa fa-magic fa-lg"})," Demo"),d("a",{href:"/docs"},d("i",{className:"fa fa-book fa-lg"})," Docs"))),d("div",{className:"grid-20 hide-on-mobile text-center"},d("a",{href:"/",className:"text-logo"},"react-papaparse 2")),d("div",{className:"grid-40 mobile-grid-50 text-right"},d("div",{className:"links"},d("a",{href:"https://github.com/themodernjavascript/react-papaparse"},d("i",{className:"fa fa-github fa-lg"})," GitHub"))))),d("h1",null,"Documentation"),d("div",{className:"grid-container"},d("div",{className:"prefix-33 grid-33 suffix-33"},d("ol",null,d("li",null,d("a",{href:"#csv-to-json"},"Convert CSV to JSON"),d("ul",null,d("li",null,d("a",{href:"#strings"},"readString")),d("li",null,d("a",{href:"#local-files"},"Parse local file")))),d("li",null,d("a",{href:"#json-to-csv"},"Convert JSON to CSV")),d("li",null,d("a",{href:"#config"},"Config")),d("li",null,d("a",{href:"#results"},"Results"),d("ul",null,d("li",null,d("a",{href:"#data"},"Data")),d("li",null,d("a",{href:"#errors"},"Errors")),d("li",null,d("a",{href:"#meta"},"Meta")))),d("li",null,d("a",{href:"#extras"},"Extras"))))),d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h4",{id:"csv-to-json"},"Convert CSV to JSON"),d("p",null,"Delimited data can be parsed out of strings or files. Files that are parsed can be local. Local files are used with CSVReader component.")),d("div",{className:"grid-100"},d("h5",{id:"strings"},"Parse string")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"readString(csvString",d("i",null,"[, ",d("a",{href:"#config"},"config"),"]"),")"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"csvString")," is a string of delimited text to be parsed."),d("li",null,d("code",null,"config")," is an optional ",d("a",{href:"#config"},"config object"),"."),d("li",null,"Returns a ",d("a",{href:"#results"},"parse results")," object (if not streaming or using worker)."))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"local-files"},"Parse local files")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"<CSVReader\n  onFileLoaded={this.handleReadCSV}\n  inputRef={this.fileInput}\n  style={{display: 'none'}}\n  onError={this.handleOnError}\n  configOptions={",d("a",{href:"#config"},"config"),"}\n/>\n"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"onFileLoaded")," is the function to be called passing loaded results."),d("li",null,d("code",null,"onError")," is error handling function."),d("li",null,d("code",null,"configOptions")," is a ",d("a",{href:"#config"},"config object")," which contains a callback."),d("li",null,d("code",null,d("a",{href:"https://reactjs.org/docs/refs-and-the-dom.html",target:"_blank"},"inputRef"))," is a way to access/get files from ",d("code",null,'<input type="file">')," element."),d("li",null,d("code",null,"style")," is some styles to be applied to the ",d("code",null,"<input>")," element."),d("li",null,"Doesn't return anything. Results are provided asynchronously to a callback function."))))),d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h4",{id:"json-to-csv"},"Convert JSON to CSV"),d("p",null,"react-papaparse ",d("code",null,"unparse")," utility writes out correct delimited text strings given an array of arrays or an array of objects using ",d("code",null,"jsonToCSV()")," function.")),d("div",{className:"grid-100"},d("h5",{id:"unparse"},"Unparse")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"jsonToCSV(jsonData",d("i",null,"[, ",d("a",{href:"#unparse-config-default"},"config"),"]"),")"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,"Returns the resulting delimited text as a string."),d("li",null,d("code",null,"data")," can be one of:",d("ul",null,d("li",null,"An array of arrays"),d("li",null,"An array of objects"),d("li",null,"An object explicitly defining ",d("code",null,"fields")," and ",d("code",null,"data")))),d("li",null,d("code",null,"config")," is an optional ",d("a",{href:"#unparse-config-default"},"config object")))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"unparse-config-default"},"Default Unparse Config with all options")),d("div",{className:"prefix-25 grid-50 suffix-25"},d("pre",null,d("code",{className:"language-javascript"},'\n{\n  quotes: false, //or array of booleans\n  quoteChar: \'"\',\n  escapeChar: \'"\',\n  delimiter: ",",\n  header: true,\n  newline: "',d("span",{dangerouslySetInnerHTML:{__html:"&bsol;r&bsol;n"}}),"\",\n  skipEmptyLines: false, //or 'greedy',\n  columns: null //or array of strings\n}"))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",null,"Unparse Config Options")),d("div",{className:"grid-100",style:{overflowX:"auto"}},d("table",null,d("thead",null,d("tr",null,d("th",{style:{width:"20%"}},"Option"),d("th",{style:{width:"80%"}},"Explanation"))),d("tbody",null,d("tr",null,d("td",null,d("code",null,"quotes")),d("td",null,"If ",d("code",null,"true"),", forces all fields to be enclosed in quotes. If an array of ",d("code",null,"true/false")," values, specifies which fields should be force-quoted (first boolean is for the first column, second boolean for the second column, ...). A function that returns a boolean values can be used to determine the quotes value of a cell. This function accepts the cell value and column index as parameters.")),d("tr",null,d("td",null,d("code",null,"quoteChar")),d("td",null,"The character used to quote fields.")),d("tr",null,d("td",null,d("code",null,"escapeChar")),d("td",null,"The character used to escape ",d("code",null,"quoteChar")," inside field values.")),d("tr",null,d("td",null,d("code",null,"delimiter")),d("td",null,"The delimiting character. It must not be found in ",d("a",{href:"#readonly"},"BAD_DELIMITERS"),".")),d("tr",null,d("td",null,d("code",null,"header")),d("td",null,"If ",d("code",null,"false"),", will omit the header row. If ",d("code",null,"data")," is an array of arrays this option is ignored. If ",d("code",null,"data")," is an array of objects the keys of the first object are the header row. If ",d("code",null,"data")," is an object with the keys ",d("code",null,"fields")," and ",d("code",null,"data")," the ",d("code",null,"fields")," are the header row.")),d("tr",null,d("td",null,d("code",null,"newline")),d("td",null,"The character used to determine newline sequence. It defaults to ",d("code",null,'"\\r\\n"'),".")),d("tr",null,d("td",null,d("code",null,"skipEmptyLines")),d("td",null,"If ",d("code",null,"true"),", lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to ",d("code",null,"'greedy'"),", lines that don't have any content (those which have only whitespace after parsing) will also be skipped.")),d("tr",null,d("td",null,d("code",null,"columns")),d("td",null,"If ",d("code",null,"data")," is an array of objects this option can be used to manually specify the keys (columns) you expect in the objects. If not set the keys of the first objects are used as column."))))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"unparse-examples"},"Examples")),d("div",{className:"grid-33"},d("pre",null,d("code",{className:"language-javascript"},'// Two-line, comma-delimited file\nvar csv = jsonToCSV([\n  ["1-1", "1-2", "1-3"],\n  ["2-1", "2-2", "2-3"]\n])'))),d("div",{className:"grid-33"},d("pre",null,d("code",{className:"language-javascript"},'// With implicit header row\n// (keys of first object populate header row)\nvar csv = jsonToCSV([\n  {\n    "Column 1": "foo",\n    "Column 2": "bar"\n  },\n  {\n    "Column 1": "abc",\n    "Column 2": "def"\n  }\n])'))),d("div",{className:"grid-33"},d("pre",null,d("code",{className:"language-javascript"},'// Specifying fields and data explicitly\nvar csv = jsonToCSV({\n  "fields": ["Column 1", "Column 2"],\n  "data": [\n    ["foo", "bar"],\n    ["abc", "def"]\n  ]\n})'))),d("div",{className:"clear"}))),d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h4",{id:"config"},"The Parse Config Object"),d("p",null,"The ",d("code",null,"readString")," function ",d("code",null,"CSVReader")," component may be passed a configuration object. It defines settings, behavior, and callbacks used during parsing. Any properties left unspecified will resort to their default values.")),d("div",{className:"grid-100"},d("h5",{id:"config-default"},"Default Config With All Options")),d("div",{className:"prefix-25 grid-50 suffix-25"},d("pre",null,d("code",{className:"language-javascript"},"{\n  delimiter: \"\",  // auto-detect\n  newline: \"\",  // auto-detect\n  quoteChar: '\"',\n  escapeChar: '\"',\n  header: false,\n  transformHeader: undefined,\n  dynamicTyping: false,\n  preview: 0,\n  encoding: \"\",\n  worker: false,\n  comments: false,\n  step: undefined,\n  complete: undefined,\n  error: undefined,\n  download: false,\n  downloadRequestHeaders: undefined,\n  skipEmptyLines: false,\n  chunk: undefined,\n  fastMode: undefined,\n  beforeFirstChunk: undefined,\n  withCredentials: undefined,\n  transform: undefined,\n  delimitersToGuess: [',', '\t', '|', ';',"," ",d("a",{href:"#readonly"},"RECORD_SEP"),", ",d("a",{href:"#readonly"},"UNIT_SEP"),"]\n}"))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"config-details"},"Config Options")),d("div",{className:"grid-100",style:{overflowX:"auto"}},d("table",null,d("thead",null,d("tr",null,d("th",{style:{width:"20%"}},"Option"),d("th",{style:{width:"80%"}},"Explanation"))),d("tbody",null,d("tr",null,d("td",null,d("code",null,"delimiter")),d("td",null,"The delimiting character. Leave blank to auto-detect from a list of most common delimiters, or any values passed in through ",d("code",null,"delimitersToGuess"),". It can be a string or a function. If string, it must be one of length 1. If a function, it must accept the input as first parameter and it must return a string which will be used as delimiter. In both cases it cannot be found in ",d("a",{href:"#readonly"},"BAD_DELIMITERS"),".")),d("tr",null,d("td",null,d("code",null,"newline")),d("td",null,"The newline sequence. Leave blank to auto-detect. Must be one of \\r, \\n, or \\r\\n.")),d("tr",null,d("td",null,d("code",null,"quoteChar")),d("td",null,"The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.")),d("tr",null,d("td",null,d("code",null,"escapeChar")),d("td",null,"The character used to escape the quote character within a field. If not set, this option will default to the value of ",d("code",null,"quoteChar"),", meaning that the default escaping of quote character within a quoted field is using the quote character two times. (e.g. ",d("code",null,'"column with ""quotes"" in text"'),")")),d("tr",null,d("td",null,d("code",null,"header")),d("td",null,"If true, the first row of parsed data will be interpreted as field names. An array of field names will be returned in ",d("a",{href:"#meta"},"meta"),", and each row of data will be an object of values keyed by field name instead of a simple array. Rows with a different number of fields from the header row will produce an error. Warning: Duplicate field names will overwrite values in previous fields having the same name.")),d("tr",null,d("td",null,d("code",null,"transformHeader")),d("td",null,"A function to apply on each header. Requires ",d("code",null,"header")," to be ",d("code",null,"true"),". The function receives the header as its first argument.")),d("tr",null,d("td",null,d("code",null,"dynamicTyping")),d("td",null,"If true, numeric and boolean data will be converted to their type instead of remaining strings. Numeric data must conform to the definition of a decimal literal. Numerical values greater than ",d("code",null,"2^53")," or less than ",d("code",null,"-2^53")," will not be converted to numbers to preserve precision. European-formatted numbers must have commas and dots swapped. If also accepts an object or a function. If object it's values should be a boolean to indicate if dynamic typing should be applied for each column number (or header name if using headers). If it's a function, it should return a boolean value for each field number (or name if using headers) which will be passed as first argument.")),d("tr",null,d("td",null,d("code",null,"preview")),d("td",null,"If > 0, only that many rows will be parsed.")),d("tr",null,d("td",null,d("code",null,"encoding")),d("td",null,"The encoding to use when opening local files. If specified, it must be a value supported by the FileReader API.")),d("tr",null,d("td",null,d("code",null,"worker")),d("td",null,"Whether or not to use a worker thread. Using a worker will keep your page reactive, but may be slightly slower.")),d("tr",null,d("td",null,d("code",null,"comments")),d("td",null,'A string that indicates a comment (for example, "#" or "//"). When react-papaparse encounters a line starting with this string, it will skip the line.')),d("tr",null,d("td",null,d("code",null,"step")),d("td",null,"To ",d("a",{href:"/faq#streaming"},"stream")," the input, define a callback function:",d("pre",null,d("code",{className:"language-javascript"},"step: function(",d("a",{href:"#results"},"results"),', parser) {\n    console.log("Row data:", results.data)\n    console.log("Row errors:", results.errors)\n  }')),"Streaming is necessary for large files which would otherwise crash the browser. You can call ",d("code",null,"parser.abort()")," to abort parsing. And, except when using a ",d("a",{href:"/faq#worker"},"Web Worker"),", you can call ",d("code",null,"parser.pause()")," to pause it, and ",d("code",null,"parser.resume()")," to resume.")),d("tr",null,d("td",null,d("code",null,"complete")),d("td",null,"The callback to execute when parsing is complete. It receives the parse ",d("a",{href:"#results"},"results"),". If parsing a local file, the ",d("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File")," is passed in, too:",d("pre",null,d("code",{className:"language-javascript"},'complete: function(results, file) {\n    console.log("Parsing complete:", results, file)\n  }')),"When streaming, parse results are ",d("i",null,"not")," available in this callback.")),d("tr",null,d("td",null,d("code",null,"error")),d("td",null,"A callback to execute if FileReader encounters an error. The function is passed two arguments: the error and the File.")),d("tr",null,d("td",null,d("code",null,"downloadRequestHeaders")),d("td",null,"If defined, should be an object that describes the headers, example:",d("pre",null,d("code",{className:"language-javascript"},"downloadRequestHeaders: {\n    'Authorization': 'token 123345678901234567890',\n  }")))),d("tr",null,d("td",null,d("code",null,"skipEmptyLines")),d("td",null,"If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to ",d("code",null,"'greedy'"),", lines that don't have any content (those which have only whitespace after parsing) will also be skipped.")),d("tr",null,d("td",null,d("code",null,"chunk")),d("td",null,"A callback function, identical to step, which activates streaming. However, this function is executed after every ",d("i",null,"chunk")," of the file is loaded and parsed rather than every row. Works only with local and remote files. Do not use both chunk and step callbacks together. For the function signature, see the documentation for the step function.")),d("tr",null,d("td",null,d("code",null,"fastMode")),d("td",null,"Fast mode speeds up parsing significantly for large inputs. However, it only works when the input has no quoted fields. Fast mode will automatically be enabled if no ",d("code",null,'"')," characters appear in the input. You can force fast mode either way by setting it to ",d("code",null,"true")," or ",d("code",null,"false"),".")),d("tr",null,d("td",null,d("code",null,"beforeFirstChunk")),d("td",null,"A function to execute before parsing the first chunk. Can be used with chunk or step streaming modes. The function receives as an argument the chunk about to be parsed, and it may return a modified chunk to parse. This is useful for stripping header lines (as long as the header fits in a single chunk).")),d("tr",null,d("td",null,d("code",null,"withCredentials")),d("td",null,'A boolean value passed directly into XMLHttpRequest\'s "withCredentials" property.')),d("tr",null,d("td",null,d("code",null,"transform")),d("td",null,"A function to apply on each value. The function receives the value as its first argument and the column number or header name when enabled as its second argument. The return value of the function will replace the value it received. The transform function is applied before dynamicTyping.")),d("tr",null,d("td",null,d("code",null,"delimitersToGuess")),d("td",null,"An array of delimiters to guess from if the ",d("code",null,"delimiter")," option is not set."))))))),d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h4",{id:"results"},"The Parse Result Object"),d("p",null,"A parse result always contains three objects: data, errors, and meta. Data and errors are arrays, and meta is an object. In the step callback, the data array will only contain one element.")),d("div",{className:"grid-100"},d("h5",{id:"results-structure"},"Result Structure")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"{\n  data:   // array of parsed data\n  errors: // array of errors\n  meta:   // object with extra info\n}"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"data")," is an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name."),d("li",null,d("code",null,"errors")," is an array of ",d("a",{href:"#errors"},"errors"),"."),d("li",null,d("code",null,"meta")," contains extra information about the parse, such as delimiter used, the newline sequence, whether the process was aborted, etc. Properties in this object are not guaranteed to exist in all situations."))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"data"},"Data")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},'// Example (header: false)\n[\n  ["Column 1", "Column 2"],\n  ["foo", "bar"],\n  ["abc", "def"]\n]\n\n// Example (header: true)\n[\n  {\n    "Column 1": "foo",\n    "Column 2": "bar"\n  },\n  {\n    "Column 1": "abc",\n    "Column 2": "def"\n  }\n]'))),d("div",{className:"grid-50"},d("ul",null,d("li",null,"If header row is enabled and more fields are found on a row of data than in the header row, an extra field will appear in that row called ",d("code",null,"__parsed_extra"),". It contains an array of all data parsed from that row that extended beyond the header row."))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"errors"},"Errors")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},'// Error structure\n{\n  type: "",     // A generalization of the error\n  code: "",     // Standardized error code\n  message: "",  // Human-readable details\n  row: 0,       // Row index of parsed data where error is\n}'))),d("div",{className:"grid-50"},d("ul",null,d("li",null,"The error ",d("code",null,"type"),' will be one of "Quotes", "Delimiter", or "FieldMismatch".'),d("li",null,"The ",d("code",null,"code"),' may be "MissingQuotes", "UndetectableDelimiter", "TooFewFields", or "TooManyFields" (depending on the error type).'),d("li",null,"Just because errors are generated does not necessarily mean that parsing failed. The worst error you can get is probably MissingQuotes."))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"meta"},"Meta")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"{\n  delimiter: // Delimiter used\n  linebreak: // Line break sequence used\n  aborted:   // Whether process was aborted\n  fields:    // Array of field names\n  truncated: // Whether preview consumed all input\n}"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,"Not all meta properties will always be available. For instance, ",d("code",null,"fields")," is only given when header row is enabled."))),d("div",{className:"clear"}))),d("section",{style:{borderBottom:0,paddingBottom:0}},d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h4",{id:"extras"},"Extras"),d("p",null,"There's a few other things that react-papaparse exposes to you that weren't explained above.")),d("div",{className:"grid-100"},d("h5",{id:"readonly"},"Read-Only")),d("div",{className:"grid-100"},d("table",null,d("thead",null,d("tr",null,d("th",null,"Read-Only Property"),d("th",null,"Explanation"))),d("tbody",null,d("tr",null,d("td",null,d("code",null,"BAD_DELIMITERS")),d("td",null,"An array of characters that are not allowed as delimiters.")),d("tr",null,d("td",null,d("code",null,"RECORD_SEP")),d("td",null,"The true delimiter. Invisible. ASCII code 30. Should be doing the job we strangely rely upon commas and tabs for.")),d("tr",null,d("td",null,d("code",null,"UNIT_SEP")),d("td",null,"Also sometimes used as a delimiting character. ASCII code 31.")),d("tr",null,d("td",null,d("code",null,"WORKERS_SUPPORTED")),d("td",null,"Whether or not the browser supports HTML5 Web Workers. If false, ",d("code",null,"worker: true")," will have no effect."))))),d("div",{className:"grid-100"},d("h5",{id:"configurable"},"Configurable")),d("div",{className:"grid-100"},d("table",null,d("thead",null,d("tr",null,d("th",null,"Configurable Property"),d("th",null,"Explanation"))),d("tbody",null,d("tr",null,d("td",null,d("code",null,"LocalChunkSize")),d("td",null,"The size in bytes of each file chunk. Used when streaming files obtained from the DOM that exist on the local computer. Default 10 MB.")),d("tr",null,d("td",null,d("code",null,"DefaultDelimiter")),d("td",null,"The delimiter used when it is left unspecified and cannot be detected automatically. Default is comma."))))),d("div",{className:"clear"})))))}}]),l}(s.Component)},MI3g:function(e,l,n){"use strict";var a=n("XVgq"),t=n.n(a),r=n("Z7t5"),o=n.n(r);function i(e){return(i="function"===typeof o.a&&"symbol"===typeof t.a?function(e){return typeof e}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function s(e){return(s="function"===typeof o.a&&"symbol"===i(t.a)?function(e){return i(e)}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":i(e)})(e)}var u=n("AT/M");function d(e,l){return!l||"object"!==s(l)&&"function"!==typeof l?Object(u.a)(e):l}n.d(l,"a",(function(){return d}))},Tit0:function(e,l,n){"use strict";var a=n("SqZg"),t=n.n(a),r=n("TRZx"),o=n.n(r);function i(e,l){return(i=o.a||function(e,l){return e.__proto__=l,e})(e,l)}function s(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=t()(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&i(e,l)}n.d(l,"a",(function(){return s}))},a7VT:function(e,l,n){"use strict";n.d(l,"a",(function(){return i}));var a=n("Bhuq"),t=n.n(a),r=n("TRZx"),o=n.n(r);function i(e){return(i=o.a?t.a:function(e){return e.__proto__||t()(e)})(e)}},sLSF:function(e,l,n){"use strict";n.d(l,"a",(function(){return o}));var a=n("hfKm"),t=n.n(a);function r(e,l){for(var n=0;n<l.length;n++){var a=l[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),t()(e,a.key,a)}}function o(e,l,n){return l&&r(e.prototype,l),n&&r(e,n),e}},zYe7:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n("IYmA")}])}},[["zYe7",0,2,1]]]);