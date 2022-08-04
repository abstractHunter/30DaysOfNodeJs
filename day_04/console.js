const { Console } = require("console");
var fs = require("fs");

// creating files where to write outputs
var output = fs.createWriteStream("./output.log");
var errOutput = fs.createWriteStream("./errOutput.log");

// my new console
const display = new Console(output, errOutput);


// ############################ log / error / warn / clear
display.log("Hello to log file");
display.error("Hello to error file");
display.warn("Warning messaes goes to error file");

display.clear(); // does nothing since output is not a tty
display.log("Another text !");


// ############################ count / countReset
console.count("hello");
console.count("hello");
console.count("hello"); // => hello : 1
console.countReset("hello"); // => hello : 1
console.count("hello");

console.clear(); // clears the console


// ########################### time / timeEnd
// used to start a timer which can be used to compute the duration of an operation
display.time("Arielle");
var x = 18;
var y = 7;
var result = (18 * 7) / (18 - 7);

display.log("Result : " + result);
display.timeEnd("Arielle");