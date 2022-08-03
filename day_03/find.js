var fs = require("fs");

var filename = "data.html";
var content = fs.readFileSync(filename).toString();


// find string "they"
var pattern1 = /they/gim; // g:lobal, case i:nsensitive, m:ultiline match

// find all tags
var pattern2 = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;


var myarr = content.match(pattern2);
var len = myarr.length;

console.log("Matches found : " + len);