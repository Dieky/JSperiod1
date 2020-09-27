import "core-js/proposals/promise-any";
import fetch from "node-fetch";

const URL = "https://swapi.dev/api/people/";


const myPromise = (id) =>
    new Promise(function (resolve, reject) {
        fetch(URL + id)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    });

Promise.all([myPromise(1), myPromise(2),myPromise(3)]).then(res => {
    console.log("Promise.all:");
    res.map(result => {
        console.log(result.name);
    });
});

console.log();

Promise.any([myPromise(1), myPromise(2),myPromise(3)]).then(res => {
    console.log("Promise.any:");
    console.log(res.name);
    console.log();
});