const fetch = require("node-fetch");

const myPromise = (id) =>
    new Promise(function (resolve, reject) {
        fetch(id)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err))
    });

try {
    myPromise("https://swapi.dev/api/people/100").then(r => console.log(r))
} catch (error) {
    console.log(error)
}
