const count = require("./closures2");
/*
skal bruges når closures2.js export = makeCounter og ikke en variabel
const count = require("./closures2")();
const count2 = require("./closures2")();
const count3 = require("./closures2")();
console.log(count2.value());
console.log(count3.value());
*/

count.inc();
count.inc();

console.log(count.value());