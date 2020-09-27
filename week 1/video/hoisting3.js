function hoisting2() {
    f1();
    f2();

    function f1() {
        console.log("I'm f1");
    }

    var f2 = function () {
        console.log("I'm f2");
    };

    // function f2(){
    //     console.log("I'm f2");
    // }
    // Dette vil gå godt
}

// function f1() {
//     console.log("I'm f1");
// }
// Virker også uden for hoisting2()

hoisting2();

/*
Inden programmet kører vil compileren altid køre koden igennem og finde de funktioner der er til rådighed. Derfor går det godt med f1.
f2 derimod bliver bare assigned som en variabel uden værdi. Når vi prøver at køre f2 som en funktion, så ved compileren ikke at f2 er en funktion

Har også hevet f1 ud for at vise at dette vil virke uden for den første function hoisting2()
*/