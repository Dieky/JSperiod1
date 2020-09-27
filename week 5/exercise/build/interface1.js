"use strict";
/*
a) Create a TypeScript interface IBook, which should encapsulate information about a book, including:
title, author:  all strings
published: Date
pages: number
interface Ibook {
    title: String;
    author: String;
    published: Date;
    pages: number;
}
*/
let Harry_potter = {
    title: "Harry Potter",
    author: "J.K Rowling",
    published: new Date(1997, 7, 26),
    pages: 500,
};
function tester(book) {
    console.log(book.title);
    console.log(book.author);
    console.log(book.published);
    console.log(book.pages);
}
tester(Harry_potter);
/*
https://www.javatpoint.com/typescript-duck-typing
c) Given the example above, explain what is meant by the term Duck Typing, when TypeScript interfaces are discussed.

TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not.
It means we cannot change the signature of a variable. For example, if we assign an object that has two properties like name, address
and next time we assign an object which contains more properties or fewer properties or both properties are not (name, address)
then the TypeScript compiler will generate the compile-time error. The concept is known as Duck typing.


class Dog {
    sound = "barking";
}
class Lion {
    sound = "roaring";
}
class Goat {
    sound = "bleat";
    swim(){
        console.log("Cannot Swim!");
    }
}

let lion: Lion = new Dog(); // Virker fordi både Lion og Dog har en sound, værdien er ikke den samme men den opfylder jo kravet om at have en property der hedder sound
let dog: Dog = new Lion(); // Virker fordi både Lion og Dog har en sound, værdien er ikke den samme men den opfylder jo kravet om at have en property der hedder sound
let lionTwo: Lion = new Goat();
// IDE & compiler error på næste linje --> Fordi goat variablen skal være af typen Goat og Lion() ikke opfylder kravene for en Goat ( mangler swim() metoden)
let goat: Goat = new Lion();
*/ 
//# sourceMappingURL=interface1.js.map