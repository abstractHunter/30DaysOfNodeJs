const assert = require("assert");

const a = 10;
const b = 20;
const c = a + b;

// assert(a > b);
assert(c === 17, "message to be printed if the condition is false");