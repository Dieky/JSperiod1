function hoisting1(){
    console.log("Value of mycoolobject " + myCoolObject);

    if(!myCoolObject){
        var myCoolObject = {value: "Wau I am cool"}
        // let myCoolObject = {value: "Wau I am cool"}
        console.log(myCoolObject.value)
    }
}
hoisting1();

/*
var bliver altid løftet op og declared inden koden kører. Men ikke assigned. Derfor er myCoolObject undefined til at starte med

Hvis man bruger let istedet for var så vil programmet crashe
*/