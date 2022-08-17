const stringDecoder = require("string_decoder").StringDecoder;

const decoder = new stringDecoder("utf-8");
const buff = Buffer.from("Hello Arielle");

console.log(buff); // buffered data
console.log(decoder.write(buff)); //decoded buffer


// returns the remaining of the input stored in internal buffer
console.log(decoder.end(buff));