"use strict";
/*
b) Design a function "implementing" this interface which returns an array with the three strings
*/
let StringsToArray = function (s1, s2, s3) {
    let res = [s1, s2, s3];
    return res;
};
/*
c) Design another implementation that returns an array, with the three strings uppercased.
*/
let StringsToArrayUpper = function (s1, s2, s3) {
    let res = [s1.toUpperCase(), s2.toUpperCase(), s3.toUpperCase()];
    return res;
};
let res = StringsToArray("hej", "med", "dig");
let res2 = StringsToArrayUpper("hej", "med", "dig");
// console.log(res)
// console.log(res2)
/*
d) The function, given below, uses the ES-6 (and TypeScript) feature for destructuring Arrays into individual variables, to simulate a method that uses the interface.
*/
let f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
};
function failFunction(n1, n2, n3) {
    let res = [n1, n2, n3];
    return res;
}
// f2(failFunction) //Read typescript error message. Myfunc er interface er ikke overholdt da det er numbers istedet for string
f2(StringsToArray);
f2(StringsToArrayUpper);
//# sourceMappingURL=interface2.js.map