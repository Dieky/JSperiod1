const { time } = require("console");
const fetch = require("node-fetch");

async function serial(count) {
  const swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe the await 
      await fetch("https://swapi.dev/api/people/" + i)
        .then(res => { return res.json() }));
  }
  console.log(swappiPeople.map(p=>p.name).join(", "));
}

async function parallel(count) {
  const swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe no await
      fetch("https://swapi.dev/api/people/" + i)
        .then(res => { return res.json() }));
  }
  const allEntries = await Promise.all(swappiPeople);
  console.log(allEntries.map(p=>p.name).join(", "));  
  
}

//Time each of the two strategies

console.time("serial")
serial(8);
console.timeEnd("serial")


console.time("parallel")
parallel(8);
console.timeEnd("parallel")