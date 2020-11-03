_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{IYmA:function(e,l,n){"use strict";n.r(l);var a=n("q1tI"),t=n.n(a),o=t.a.createElement,r=function(){return o("header",null,o("div",{className:"grid-container"},o("div",{className:"grid-40 mobile-grid-50"},o("div",{className:"links"},o("a",{href:"/"},o("i",{className:"fa fa-home fa-lg"})," Home"),o("a",{href:"/demo"},o("i",{className:"fa fa-magic fa-lg"})," Demo"),o("a",{href:"/docs"},o("i",{className:"fa fa-book fa-lg"})," Docs"))),o("div",{className:"grid-20 hide-on-mobile text-center"},o("a",{href:"/",className:"text-logo"},"react-papaparse 3")),o("div",{className:"grid-40 mobile-grid-50 text-right"},o("div",{className:"links"},o("a",{href:"https://github.com/Bunlong/react-papaparse"},o("i",{className:"fa fa-github fa-lg"})," GitHub")))))},i=t.a.createElement,s=function(){return i(t.a.Fragment,null,i("h1",null,"Documentation"),i("div",{className:"grid-container"},i("div",{className:"prefix-33 grid-33 suffix-33"},i("ol",null,i("li",null,i("a",{href:"#csv-to-json"},"Convert CSV to JSON"),i("ul",null,i("li",null,i("a",{href:"#strings"},"readString")),i("li",null,i("a",{href:"#local-files"},"Parse local file")),i("li",null,i("a",{href:"#remote-files"},"readRemoteFile")))),i("li",null,i("a",{href:"#json-to-csv"},"Convert JSON to CSV")),i("li",null,i("a",{href:"#config"},"Config")),i("li",null,i("a",{href:"#results"},"Results"),i("ul",null,i("li",null,i("a",{href:"#data"},"Data")),i("li",null,i("a",{href:"#errors"},"Errors")),i("li",null,i("a",{href:"#meta"},"Meta")))),i("li",null,i("a",{href:"#extras"},"Extras"))))))},d=t.a.createElement,u=function(){return d("section",null,d("div",{className:"grid-container"},d("div",{className:"grid-100"},d("h4",{id:"csv-to-json"},"Convert CSV to JSON"),d("p",null,"Delimited data can be parsed out of strings or files. Files that are parsed can be local. Local files are used with CSVReader component.")),d("div",{className:"grid-100"},d("h5",{id:"strings"},"Parse string")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"readString(csvString",d("i",null,"[, ",d("a",{href:"#config"},"config"),"]"),")"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"csvString")," is a string of delimited text to be parsed."),d("li",null,d("code",null,"config")," is an optional"," ",d("a",{href:"#config"},"config object"),"."),d("li",null,"Returns a ",d("a",{href:"#results"},"parse results")," object (if not streaming or using worker)."))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"local-files"},"Parse local files")),d("div",{className:"grid-100"},d("p",{id:"basic-upload",style:{fontSize:20}},"Basic Upload")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"<CSVReader\n  ref={buttonRef}\n  onFileLoad={this.handleOnDrop}\n  onError={this.handleOnError}\n  noClick\n  noDrag\n  config={{}}\n  style={{}}\n  onRemoveFile={this.handleOnRemoveFile}\n  >\n  {({ file }) => (\n    <aside>\n      <button\n        type='button'\n        onClick={this.handleOpenDialog}\n      >\n          Browe file\n      </button>\n      <div>\n        {file && file.name}\n      </div>\n      <button onClick={this.handleRemoveFile}>Remove</button>\n    </aside>\n  )}\n</CSVReader>\n")),d("span",{style:{float:"right",marginBottom:14,textAlignLast:"end"}},d("a",{href:"https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader1.js"},"Source code"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"accept"),"is a property to be used to set MIME type for CSV. Default is"," ",d("code",null,"'text/csv, .csv, application/vnd.ms-excel'"),"."),d("li",null,d("code",null,d("a",{href:"https://reactjs.org/docs/refs-and-the-dom.html",target:"_blank"},"ref"))," ","is a way to access/get files from"," ",d("code",null,'<input type="file">')," element."),d("li",null,d("code",null,"onFileLoad")," is the function to be called passing loaded results."),d("li",null,d("code",null,"onError")," is error handling function."),d("li",null,d("code",null,"isReset")," If true, reset CSVReader."),d("li",null,d("code",null,"noClick")," If true, disables click to open the native file selection dialog."),d("li",null,d("code",null,"noDrag")," If true, disables drag 'n' drop."),d("li",null,d("code",null,"noProgressBar")," If true, disables progress bar."),d("li",null,d("code",null,"progressBarColor")," is a property to be used to set the color of progress bar (for example,"," ",d("code",null,"progressBarColor='#659cef'"),")."),d("li",null,d("code",null,"style")," is some styles to be applied to the"," ",d("code",null,"<input>")," element."),d("li",null,d("code",null,"config")," is a ",d("a",{href:"#config"},"config object")," which contains a callback."),d("li",null,"Doesn't return anything. Results are provided asynchronously to a callback function."))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("p",{id:"click-and-drag-upload",style:{fontSize:20,marginTop:50}},"Click and Drag Upload")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"<CSVReader\n  onDrop={this.handleOnDrop}\n  onError={this.handleOnError}\n  style={{}}\n  config={{}}\n  addRemoveButton\n  onRemoveFile={this.handleOnRemoveFile}\n>\n  <span>Drop CSV file here or click to upload.</span>\n</CSVReader>\n")),d("span",{style:{float:"right",marginBottom:14,textAlignLast:"end"}},d("a",{href:"https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader2.js"},"Source code"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"accept"),"is a property to be used to set MIME type for CSV. Default is"," ",d("code",null,"'text/csv, .csv, application/vnd.ms-excel'"),"."),d("li",null,d("code",null,"onDrop")," is the function to be called passing loaded results."),d("li",null,d("code",null,"onError")," is error handling function."),d("li",null,d("code",null,"isReset")," If true, reset CSVReader."),d("li",null,d("code",null,"noProgressBar")," If true, disables progress bar."),d("li",null,d("code",null,"progressBarColor")," is a property to be used to set the color of progress bar (for example,"," ",d("code",null,"progressBarColor='#659cef'"),")."),d("li",null,d("code",null,"style")," is some styles to be applied to the"," ",d("code",null,"<input>")," element."),d("li",null,d("code",null,"addRemoveButton")," If true, this will add a button to remove or cancel (if already uploading) the file."),d("li",null,d("code",null,"removeButtonColor")," is a property to be used to set the color of remove button (for example,"," ",d("code",null,"removeButtonColor='#659cef'"),")."),d("li",null,d("code",null,"config")," is a ",d("a",{href:"#config"},"config object")," which contains a callback."),d("li",null,"Doesn't return anything. Results are provided asynchronously to a callback function."),d("li",null,d("a",{href:"https://github.com/Bunlong/react-papaparse/wiki/CSVReader-(Drag-to-Upload)-Style",target:"_blank"},"How to customize CSVReader (Drag to upload) style?")))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("p",{id:"drag-no-click-upload",style:{fontSize:20,marginTop:50}},"Drag ( No Click ) Upload")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"<CSVReader\n  onDrop={this.handleOnDrop}\n  onError={this.handleOnError}\n  noClick\n  style={{}}\n  config={{}}\n  addRemoveButton\n  onRemoveFile={this.handleOnRemoveFile}\n>\n  <span>Drop CSV file here to upload.</span>\n</CSVReader>\n")),d("span",{style:{float:"right",marginBottom:14,textAlignLast:"end"}},d("a",{href:"https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader3.js"},"Source code"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"accept"),"is a property to be used to set MIME type for CSV. Default is"," ",d("code",null,"'text/csv, .csv, application/vnd.ms-excel'"),"."),d("li",null,d("code",null,"onDrop")," is the function to be called passing loaded results."),d("li",null,d("code",null,"onError")," is error handling function."),d("li",null,d("code",null,"isReset")," If true, reset CSVReader."),d("li",null,d("code",null,"noClick")," If true, disables click to open the native file selection dialog."),d("li",null,d("code",null,"noProgressBar")," If true, disables progress bar."),d("li",null,d("code",null,"progressBarColor")," is a property to be used to set the color of progress bar (for example,"," ",d("code",null,"progressBarColor='#659cef'"),")."),d("li",null,d("code",null,"style")," is some styles to be applied to the"," ",d("code",null,"<input>")," element."),d("li",null,d("code",null,"addRemoveButton")," If true, this will add a button to remove or cancel (if already uploading) the file."),d("li",null,d("code",null,"removeButtonColor")," is a property to be used to set the color of remove button (for example,"," ",d("code",null,"removeButtonColor='#659cef'"),")."),d("li",null,d("code",null,"config")," is a ",d("a",{href:"#config"},"config object")," which contains a callback."),d("li",null,"Doesn't return anything. Results are provided asynchronously to a callback function."),d("li",null,d("a",{href:"https://github.com/Bunlong/react-papaparse/wiki/CSVReader-(Drag-to-Upload)-Style",target:"_blank"},"How to customize CSVReader (Drag to upload) style?")))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("p",{id:"click-no-drag-upload",style:{fontSize:20,marginTop:50}},"Click ( No Drag ) Upload")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"<CSVReader \n  onDrop={this.handleOnDrop}\n  onError={this.handleOnError}\n  noDrag\n  style={{}}\n  config={{}}\n  addRemoveButton\n  onRemoveFile={this.handleOnRemoveFile}\n>\n  <span>Click to upload.</span>\n</CSVReader>\n")),d("span",{style:{float:"right",marginBottom:14,textAlignLast:"end"}},d("a",{href:"https://github.com/Bunlong/react-papaparse/blob/master/demo/CSVReader4.js"},"Source code"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"accept"),"is a property to be used to set MIME type for CSV. Default is"," ",d("code",null,"'text/csv, .csv, application/vnd.ms-excel'"),"."),d("li",null,d("code",null,"onDrop")," is the function to be called passing loaded results."),d("li",null,d("code",null,"onError")," is error handling function."),d("li",null,d("code",null,"isReset")," If true, reset CSVReader."),d("li",null,d("code",null,"noDrag")," If true, disables drag 'n' drop."),d("li",null,d("code",null,"noProgressBar")," If true, disables progress bar."),d("li",null,d("code",null,"progressBarColor")," is a property to be used to set the color of progress bar (for example,"," ",d("code",null,"progressBarColor='#659cef'"),")."),d("li",null,d("code",null,"style")," is some styles to be applied to the"," ",d("code",null,"<input>")," element."),d("li",null,d("code",null,"addRemoveButton")," If true, this will add a button to remove or cancel (if already uploading) the file."),d("li",null,d("code",null,"removeButtonColor")," is a property to be used to set the color of remove button (for example,"," ",d("code",null,"removeButtonColor='#659cef'"),")."),d("li",null,d("code",null,"config")," is a ",d("a",{href:"#config"},"config object")," which contains a callback."),d("li",null,"Doesn't return anything. Results are provided asynchronously to a callback function."),d("li",null,d("a",{href:"https://github.com/Bunlong/react-papaparse/wiki/CSVReader-(Drag-to-Upload)-Style",target:"_blank"},"How to customize CSVReader (Drag to upload) style?")))),d("div",{className:"clear"}),d("div",{className:"grid-100"},d("h5",{id:"remote-files"},"Parse remote file")),d("div",{className:"grid-50"},d("pre",null,d("code",{className:"language-javascript"},"readRemoteFile(url, {\n  // rest of config ...\n})"))),d("div",{className:"grid-50"},d("ul",null,d("li",null,d("code",null,"url")," is the path or URL to the file to download."),d("li",null,"The second argument is a ",d("a",{href:"#config"},"config object"),"."),d("li",null,"Doesn't return anything. Results are provided asynchronously to a callback function.")))))},c=t.a.createElement,h=function(){return c("section",null,c("div",{className:"grid-container"},c("div",{className:"grid-100"},c("h4",{id:"json-to-csv"},"Convert JSON to CSV"),c("p",null,"react-papaparse ",c("code",null,"unparse")," utility writes out correct delimited text strings given an array of arrays or an array of objects using ",c("code",null,"jsonToCSV()")," function.")),c("div",{className:"grid-50"},c("pre",null,c("code",{className:"language-javascript"},"jsonToCSV(jsonData",c("i",null,"[, ",c("a",{href:"#unparse-config-default"},"config"),"]"),")"))),c("div",{className:"grid-50"},c("ul",null,c("li",null,"Returns the resulting delimited text as a string."),c("li",null,c("code",null,"data")," can be one of:",c("ul",null,c("li",null,"An array of arrays"),c("li",null,"An array of objects"),c("li",null,"An object explicitly defining ",c("code",null,"fields")," and"," ",c("code",null,"data")))),c("li",null,c("code",null,"config")," is an optional"," ",c("a",{href:"#unparse-config-default"},"config object")))),c("div",{className:"clear"}),c("div",{className:"grid-100"},c("h5",{id:"unparse-config-default"},"Default Unparse Config with all options")),c("div",{className:"prefix-25 grid-50 suffix-25"},c("pre",null,c("code",{className:"language-javascript"},'\n{\n  quotes: false, //or array of booleans\n  quoteChar: \'"\',\n  escapeChar: \'"\',\n  delimiter: ",",\n  header: true,\n  newline: "',c("span",{dangerouslySetInnerHTML:{__html:"&bsol;r&bsol;n"}}),"\",\n  skipEmptyLines: false, //or 'greedy',\n  columns: null //or array of strings\n}"))),c("div",{className:"clear"}),c("div",{className:"grid-100"},c("h5",null,"Unparse Config")),c("div",{className:"grid-100",style:{overflowX:"auto"}},c("table",null,c("thead",null,c("tr",null,c("th",{style:{width:"20%"}},"Option"),c("th",{style:{width:"80% "}},"Explanation"))),c("tbody",null,c("tr",null,c("td",null,c("code",null,"quotes")),c("td",null,"If ",c("code",null,"true"),", forces all fields to be enclosed in quotes. If an array of ",c("code",null,"true/false")," values, specifies which fields should be force-quoted (first boolean is for the first column, second boolean for the second column, ...). A function that returns a boolean values can be used to determine the quotes value of a cell. This function accepts the cell value and column index as parameters.")),c("tr",null,c("td",null,c("code",null,"quoteChar")),c("td",null,"The character used to quote fields.")),c("tr",null,c("td",null,c("code",null,"escapeChar")),c("td",null,"The character used to escape ",c("code",null,"quoteChar")," inside field values.")),c("tr",null,c("td",null,c("code",null,"delimiter")),c("td",null,"The delimiting character. It must not be found in"," ",c("a",{href:"#readonly"},"BAD_DELIMITERS"),".")),c("tr",null,c("td",null,c("code",null,"header")),c("td",null,"If ",c("code",null,"false"),", will omit the header row. If"," ",c("code",null,"data")," is an array of arrays this option is ignored. If ",c("code",null,"data")," is an array of objects the keys of the first object are the header row. If ",c("code",null,"data")," ","is an object with the keys ",c("code",null,"fields")," and"," ",c("code",null,"data")," the ",c("code",null,"fields")," are the header row.")),c("tr",null,c("td",null,c("code",null,"newline")),c("td",null,"The character used to determine newline sequence. It defaults to ",c("code",null,'"\\r\\n"'),".")),c("tr",null,c("td",null,c("code",null,"skipEmptyLines")),c("td",null,"If ",c("code",null,"true"),", lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to"," ",c("code",null,"'greedy'"),", lines that don't have any content (those which have only whitespace after parsing) will also be skipped.")),c("tr",null,c("td",null,c("code",null,"columns")),c("td",null,"If ",c("code",null,"data")," is an array of objects this option can be used to manually specify the keys (columns) you expect in the objects. If not set the keys of the first objects are used as column."))))),c("div",{className:"clear"}),c("div",{className:"grid-100"},c("h5",{id:"unparse-examples"},"Examples")),c("div",{className:"grid-33"},c("pre",null,c("code",{className:"language-javascript"},'// Two-line, comma-delimited file\nconst csv = jsonToCSV([\n  ["1-1", "1-2", "1-3"],\n  ["2-1", "2-2", "2-3"]\n])'))),c("div",{className:"grid-33"},c("pre",null,c("code",{className:"language-javascript"},'// With implicit header row\n// (keys of first object populate header row)\nconst csv = jsonToCSV([\n  {\n    "Column 1": "foo",\n    "Column 2": "bar"\n  },\n  {\n    "Column 1": "abc",\n    "Column 2": "def"\n  }\n])'))),c("div",{className:"grid-33"},c("pre",null,c("code",{className:"language-javascript"},'// Specifying fields and data explicitly\nconst csv = jsonToCSV({\n  "fields": ["Column 1", "Column 2"],\n  "data": [\n    ["foo", "bar"],\n    ["abc", "def"]\n  ]\n})'))),c("div",{className:"clear"})))},f=t.a.createElement,p=function(){return f("section",null,f("div",{className:"grid-container"},f("div",{className:"grid-100"},f("h4",{id:"config"},"The Parse Config Object"),f("p",null,"The ",f("code",null,"readString")," function and ",f("code",null,"CSVReader")," ","component may be passed a configuration object. It defines settings, behavior, and callbacks used during parsing. Any properties left unspecified will resort to their default values."),f("h5",null,"Warning"),f("p",null,"Setting the ",f("code",null,"complete")," callback function on the config object will disable the ",f("code",null,"onDrop")," and/or"," ",f("code",null,"onFileLoad")," functions you pass to the"," ",f("code",null,"CSVReader")," component."),f("p",null,"Setting the ",f("code",null,"step")," callback function on the config object will disable the ",f("code",null,"onDrop")," and/or ",f("code",null,"onFileLoad")," ","functions you pass to the ",f("code",null,"CSVReader")," component and will disable the progress bar.")),f("div",{className:"grid-100"},f("h5",{id:"config-default"},"Default Config With All Options")),f("div",{className:"prefix-25 grid-50 suffix-25"},f("pre",null,f("code",{className:"language-javascript"},"{\n  delimiter: \"\",  // auto-detect\n  newline: \"\",  // auto-detect\n  quoteChar: '\"',\n  escapeChar: '\"',\n  header: false,\n  transformHeader: undefined,\n  dynamicTyping: false,\n  preview: 0,\n  encoding: \"\",\n  worker: false,\n  comments: false,\n  step: undefined,\n  complete: undefined,\n  error: undefined,\n  download: false,\n  downloadRequestHeaders: undefined,\n  skipEmptyLines: false,\n  chunk: undefined,\n  fastMode: undefined,\n  beforeFirstChunk: undefined,\n  withCredentials: undefined,\n  transform: undefined,\n  delimitersToGuess: [',', '\t', '|', ';',"," ",f("a",{href:"#readonly"},"RECORD_SEP"),","," ",f("a",{href:"#readonly"},"UNIT_SEP"),"]\n}"))),f("div",{className:"clear"}),f("div",{className:"grid-100"},f("h5",{id:"config-details"},"Config")),f("div",{className:"grid-100",style:{overflowX:"auto"}},f("table",null,f("thead",null,f("tr",null,f("th",{style:{width:"20%"}},"Option"),f("th",{style:{width:"80%"}},"Explanation"))),f("tbody",null,f("tr",null,f("td",null,f("code",null,"delimiter")),f("td",null,"The delimiting character. Leave blank to auto-detect from a list of most common delimiters, or any values passed in through ",f("code",null,"delimitersToGuess"),". It can be a string or a function. If string, it must be one of length 1. If a function, it must accept the input as first parameter and it must return a string which will be used as delimiter. In both cases it cannot be found in"," ",f("a",{href:"#readonly"},"BAD_DELIMITERS"),".")),f("tr",null,f("td",null,f("code",null,"newline")),f("td",null,"The newline sequence. Leave blank to auto-detect. Must be one of \\r, \\n, or \\r\\n.")),f("tr",null,f("td",null,f("code",null,"quoteChar")),f("td",null,"The character used to quote fields. The quoting of all fields is not mandatory. Any field which is not quoted will correctly read.")),f("tr",null,f("td",null,f("code",null,"escapeChar")),f("td",null,"The character used to escape the quote character within a field. If not set, this option will default to the value of"," ",f("code",null,"quoteChar"),", meaning that the default escaping of quote character within a quoted field is using the quote character two times. (e.g."," ",f("code",null,'"column with ""quotes"" in text"'),")")),f("tr",null,f("td",null,f("code",null,"header")),f("td",null,"If true, the first row of parsed data will be interpreted as field names. An array of field names will be returned in"," ",f("a",{href:"#meta"},"meta"),", and each row of data will be an object of values keyed by field name instead of a simple array. Rows with a different number of fields from the header row will produce an error. Warning: Duplicate field names will overwrite values in previous fields having the same name.")),f("tr",null,f("td",null,f("code",null,"transformHeader")),f("td",null,"A function to apply on each header. Requires"," ",f("code",null,"header")," to be ",f("code",null,"true"),". The function receives the header as its first argument.")),f("tr",null,f("td",null,f("code",null,"dynamicTyping")),f("td",null,"If true, numeric and boolean data will be converted to their type instead of remaining strings. Numeric data must conform to the definition of a decimal literal. Numerical values greater than ",f("code",null,"2^53")," or less than ",f("code",null,"-2^53")," ","will not be converted to numbers to preserve precision. European-formatted numbers must have commas and dots swapped. If also accepts an object or a function. If object it's values should be a boolean to indicate if dynamic typing should be applied for each column number (or header name if using headers). If it's a function, it should return a boolean value for each field number (or name if using headers) which will be passed as first argument.")),f("tr",null,f("td",null,f("code",null,"preview")),f("td",null,"If > 0, only that many rows will be parsed.")),f("tr",null,f("td",null,f("code",null,"encoding")),f("td",null,"The encoding to use when opening local files. If specified, it must be a value supported by the FileReader API.")),f("tr",null,f("td",null,f("code",null,"worker")),f("td",null,"Whether or not to use a worker thread. Using a worker will keep your page reactive, but may be slightly slower.")),f("tr",null,f("td",null,f("code",null,"comments")),f("td",null,'A string that indicates a comment (for example, "#" or "//"). When react-papaparse encounters a line starting with this string, it will skip the line.')),f("tr",null,f("td",null,f("code",null,"step")),f("td",null,"To ",f("a",{href:"/faq#streaming"},"stream")," the input, define a callback function:",f("pre",null,f("code",{className:"language-javascript"},"step: (",f("a",{href:"#results"},"results"),', parser) => {\n  console.log("Row data:", results.data)\n  console.log("Row errors:", results.errors)\n}')),"Streaming is necessary for large files which would otherwise crash the browser. You can call ",f("code",null,"parser.abort()")," to abort parsing. And, except when using a"," ",f("a",{href:"/faq#worker"},"Web Worker"),", you can call"," ",f("code",null,"parser.pause()")," to pause it, and"," ",f("code",null,"parser.resume()")," to resume.")),f("tr",null,f("td",null,f("code",null,"complete")),f("td",null,"The callback to execute when parsing is complete. It receives the parse ",f("a",{href:"#results"},"results"),". If parsing a local file, the"," ",f("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File")," ","is passed in, too:",f("pre",null,f("code",{className:"language-javascript"},'complete: (results, file) => {\n  console.log("Parsing complete:", results, file)\n}')),"When streaming, parse results are ",f("i",null,"not")," available in this callback.")),f("tr",null,f("td",null,f("code",null,"error")),f("td",null,"A callback to execute if FileReader encounters an error. The function is passed two arguments: the error and the File.")),f("tr",null,f("td",null,f("code",null,"downloadRequestHeaders")),f("td",null,"If defined, should be an object that describes the headers, example:",f("pre",null,f("code",{className:"language-javascript"},"downloadRequestHeaders: {\n  'Authorization': 'token 123345678901234567890',\n}")))),f("tr",null,f("td",null,f("code",null,"skipEmptyLines")),f("td",null,"If true, lines that are completely empty (those which evaluate to an empty string) will be skipped. If set to"," ",f("code",null,"'greedy'"),", lines that don't have any content (those which have only whitespace after parsing) will also be skipped.")),f("tr",null,f("td",null,f("code",null,"chunk")),f("td",null,"A callback function, identical to step, which activates streaming. However, this function is executed after every"," ",f("i",null,"chunk")," of the file is loaded and parsed rather than every row. Works only with local and remote files. Do not use both chunk and step callbacks together. For the function signature, see the documentation for the step function.")),f("tr",null,f("td",null,f("code",null,"fastMode")),f("td",null,"Fast mode speeds up parsing significantly for large inputs. However, it only works when the input has no quoted fields. Fast mode will automatically be enabled if no ",f("code",null,'"')," ","characters appear in the input. You can force fast mode either way by setting it to ",f("code",null,"true")," or ",f("code",null,"false"),".")),f("tr",null,f("td",null,f("code",null,"beforeFirstChunk")),f("td",null,"A function to execute before parsing the first chunk. Can be used with chunk or step streaming modes. The function receives as an argument the chunk about to be parsed, and it may return a modified chunk to parse. This is useful for stripping header lines (as long as the header fits in a single chunk).")),f("tr",null,f("td",null,f("code",null,"withCredentials")),f("td",null,'A boolean value passed directly into XMLHttpRequest\'s "withCredentials" property.')),f("tr",null,f("td",null,f("code",null,"transform")),f("td",null,"A function to apply on each value. The function receives the value as its first argument and the column number or header name when enabled as its second argument. The return value of the function will replace the value it received. The transform function is applied before dynamicTyping.")),f("tr",null,f("td",null,f("code",null,"delimitersToGuess")),f("td",null,"An array of delimiters to guess from if the"," ",f("code",null,"delimiter")," option is not set.")))))))},m=t.a.createElement,g=function(){return m("section",null,m("div",{className:"grid-container"},m("div",{className:"grid-100"},m("h4",{id:"results"},"The Parse Result Object"),m("p",null,"A parse result always contains three objects: data, errors, and meta. Data and errors are arrays, and meta is an object. In the step callback, the data array will only contain one element.")),m("div",{className:"grid-100"},m("h5",{id:"results-structure"},"Result Structure")),m("div",{className:"grid-50"},m("pre",null,m("code",{className:"language-javascript"},"{\n  data:   // array of parsed data\n  errors: // array of errors\n  meta:   // object with extra info\n}"))),m("div",{className:"grid-50"},m("ul",null,m("li",null,m("code",null,"data")," is an array of rows. If header is false, rows are arrays; otherwise they are objects of data keyed by the field name."),m("li",null,m("code",null,"errors")," is an array of ",m("a",{href:"#errors"},"errors"),"."),m("li",null,m("code",null,"meta")," contains extra information about the parse, such as delimiter used, the newline sequence, whether the process was aborted, etc. Properties in this object are not guaranteed to exist in all situations."))),m("div",{className:"clear"}),m("div",{className:"grid-100"},m("h5",{id:"data"},"Data")),m("div",{className:"grid-50"},m("pre",null,m("code",{className:"language-javascript"},'// Example (header: false)\n[\n  ["Column 1", "Column 2"],\n  ["foo", "bar"],\n  ["abc", "def"]\n]\n\n// Example (header: true)\n[\n  {\n    "Column 1": "foo",\n    "Column 2": "bar"\n  },\n  {\n    "Column 1": "abc",\n    "Column 2": "def"\n  }\n]'))),m("div",{className:"grid-50"},m("ul",null,m("li",null,"If header row is enabled and more fields are found on a row of data than in the header row, an extra field will appear in that row called ",m("code",null,"__parsed_extra"),". It contains an array of all data parsed from that row that extended beyond the header row."))),m("div",{className:"clear"}),m("div",{className:"grid-100"},m("h5",{id:"errors"},"Errors")),m("div",{className:"grid-50"},m("pre",null,m("code",{className:"language-javascript"},'// Error structure\n{\n  type: "",     // A generalization of the error\n  code: "",     // Standardized error code\n  message: "",  // Human-readable details\n  row: 0,       // Row index of parsed data where error is\n}'))),m("div",{className:"grid-50"},m("ul",null,m("li",null,"The error ",m("code",null,"type"),' will be one of "Quotes", "Delimiter", or "FieldMismatch".'),m("li",null,"The ",m("code",null,"code"),' may be "MissingQuotes", "UndetectableDelimiter", "TooFewFields", or "TooManyFields" (depending on the error type).'),m("li",null,"Just because errors are generated does not necessarily mean that parsing failed. The worst error you can get is probably MissingQuotes."))),m("div",{className:"clear"}),m("div",{className:"grid-100"},m("h5",{id:"meta"},"Meta")),m("div",{className:"grid-50"},m("pre",null,m("code",{className:"language-javascript"},"{\n  delimiter: // Delimiter used\n  linebreak: // Line break sequence used\n  aborted:   // Whether process was aborted\n  fields:    // Array of field names\n  truncated: // Whether preview consumed all input\n}"))),m("div",{className:"grid-50"},m("ul",null,m("li",null,"Not all meta properties will always be available. For instance,"," ",m("code",null,"fields")," is only given when header row is enabled."))),m("div",{className:"clear"})))},b=t.a.createElement,v=function(){return b("section",{style:{borderBottom:0,paddingBottom:0}},b("div",{className:"grid-container"},b("div",{className:"grid-100"},b("h4",{id:"extras"},"Extras"),b("p",null,"There's a few other things that react-papaparse exposes to you that weren't explained above.")),b("div",{className:"grid-100"},b("h5",{id:"readonly"},"Read-Only")),b("div",{className:"grid-100"},b("table",null,b("thead",null,b("tr",null,b("th",null,"Read-Only Property"),b("th",null,"Explanation"))),b("tbody",null,b("tr",null,b("td",null,b("code",null,"BAD_DELIMITERS")),b("td",null,"An array of characters that are not allowed as delimiters.")),b("tr",null,b("td",null,b("code",null,"RECORD_SEP")),b("td",null,"The true delimiter. Invisible. ASCII code 30. Should be doing the job we strangely rely upon commas and tabs for.")),b("tr",null,b("td",null,b("code",null,"UNIT_SEP")),b("td",null,"Also sometimes used as a delimiting character. ASCII code 31.")),b("tr",null,b("td",null,b("code",null,"WORKERS_SUPPORTED")),b("td",null,"Whether or not the browser supports HTML5 Web Workers. If false, ",b("code",null,"worker: true")," will have no effect."))))),b("div",{className:"grid-100"},b("h5",{id:"configurable"},"Configurable")),b("div",{className:"grid-100"},b("table",null,b("thead",null,b("tr",null,b("th",null,"Configurable Property"),b("th",null,"Explanation"))),b("tbody",null,b("tr",null,b("td",null,b("code",null,"LocalChunkSize")),b("td",null,"The size in bytes of each file chunk. Used when streaming files obtained from the DOM that exist on the local computer. Default 10 MB.")),b("tr",null,b("td",null,b("code",null,"DefaultDelimiter")),b("td",null,"The delimiter used when it is left unspecified and cannot be detected automatically. Default is comma."))))),b("div",{className:"clear"})))},y=t.a.createElement;l.default=function(){return y("main",null,y(r,null),y(s,null),y("main",null,y(u,null),y(h,null),y(p,null),y(g,null),y(v,null)))}},Qetd:function(e,l,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},zYe7:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n("IYmA")}])}},[["zYe7",1,0]]]);