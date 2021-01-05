// https://docs.google.com/document/d/1ad-D5zPpobOUAG5cdcFt1YU3yCAqilN2KOGzrjvWnq8/edit#


const numbers = [-1, -3, 1, 3, 5, 7, 9, 11, 13, 15];
const numbers2 = [2, 3, 67, 33];



function myFilter(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        let element = callback(array[index]);
        if (element == true) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}

function myMap(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(callback(array[index]));
    }
    return newArray;
}

//opgave 2
//a) FILTER
/*
console.log("array filter method");
console.log(numbers.filter(x => x < 0));
console.log("");
console.log("Homemade filter");
let res = myFilter(numbers, (x) => x < 0);
console.log(res);
*/

//b) MAP
/*
console.log("array map filter method");
console.log(myMap(numbers,(x)=> x*x));
console.log("");
console.log("homemade filter method");
console.log(numbers.map(x=>x*x));
*/


function myFilter2(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        let element = callback(this[index]);
        if (element == true) {
            newArray.push(this[index]);
        }
    }
    return newArray;
}

function myMap2(callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index]));
    }
    return newArray;
}
//Opgave 3
/*
Array.prototype.myMap = myMap;
Array.prototype.myFilter = myFilter;
console.log(numbers.myFilter2(x => x < 5));
console.log(numbers.myMap2(x => x*x ));
*/


//Opgave 4
//a) join
/*
var names = ["Lars", "Peter", "Jan", "Bo"];
console.log(names.join(","))
console.log(names.join(" "))
console.log(names.join("#"))
*/

function reducer(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}

let members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
]


function reducer2(array) {
    let average = 0;
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        average += array[index].age;
        counter++;
    }
    return average / counter;
}
//b) reduce
// console.log(reducer(numbers2));

//c) reduce
// console.log(reducer2(members));

function votes(array) {
    let votes_result = {}
    let clinton = 1;
    let trump = 1;
    for (let index = 0; index < array.length; index++) {
        if(array[index] == "Clinton")votes_result["Clinton"] = clinton; clinton++;
        if(array[index] == "Trump")votes_result["Trump"] = trump; trump++;
    }
    return votes_result;
}


// d) Imagine you were to create a system that could count votes for the presidential election in USA.
/*
var array_of_votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];
console.log(votes(array_of_votes));
*/



