var makeCounter = function (){
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        inc: () => {changeBy(1);},
        dec: () => {changeBy(-1);},
        value: () => {return privateCounter;}
    }
};

var counter1 = makeCounter();
module.exports = counter1;

/*
module.exports = makeCounter;
Skal bruges istedet for ovenstående export, til at vise næste eksempel i closureUser.js
*/

var counter2 = makeCounter();
counter1.inc();
counter1.inc();
counter1.inc();
counter1.inc();
counter1.dec();
counter2.inc();
console.log("This is counter 1's value: " + counter1.value());
console.log("This is counter 2's value: " + counter2.value());