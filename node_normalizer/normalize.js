var normalizeJs = require("normalize-javascript");
var fs = require("fs");
var util = require("util");

var myArgs = process.argv.slice(2);
var rename = myArgs[0] === 'true'

// var fpath = myArgs[1]
// var code = fs.readFileSync(fpath, "utf8");

var stdin = process.openStdin();

var code = "";

stdin.on('data', function(chunk) {
  code += chunk;
  
});

stdin.on('end', function() {
  var s = normalizeJs(code, rename);
  console.log(s)
});