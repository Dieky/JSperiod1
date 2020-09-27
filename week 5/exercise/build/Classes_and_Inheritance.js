"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(color) {
        this.toString = () => {
            return `This shape's color: ${this._color}`;
        };
        this._color = color;
    }
    //A Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property. 
    get color() {
        return this._color;
    }
    set color(newColor) {
        this._color = newColor;
    }
}
// Verify that you cannot (why) make an instance of this class.
//   let res = new Shape("red"); // cannot create instance of an abstract class
class Circle extends Shape {
    constructor(colour, radius) {
        super(colour);
        this._radius = radius;
    }
    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get perimeter() {
        return Math.PI * this._radius * 2;
    }
    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }
}
let circle = new Circle("Red", 10);
console.log(`Circle toString(): --> ${circle.toString()}`);
console.log(`Area: --> ${circle.area}`);
console.log(`Perimeter: --> ${circle.perimeter}`);
console.log(`Radius: --> ${circle.radius}`);
console.log(`Color: --> ${circle.color}`);
console.log(`Changed values of radius and color through set method`);
// når der assignes værdi bruges klassen set metode. get metode bruges per default hvis man fx skriver circle.color
circle.color = "blue";
circle.radius = 15;
console.log(`Radius: --> ${circle.radius}`);
console.log(`Color: --> ${circle.color}`);
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get perimeter() {
        throw "not implemented";
    }
    get height() {
        return this._height;
    }
    set height(newHeight) {
        this._height = newHeight;
    }
    get area() {
        return 2 * Math.PI * this.radius * (this._height + this.radius);
    }
    get volume() {
        return Math.PI * Math.pow(this.radius, 2) * this._height;
    }
}
let cylinder = new Cylinder("Red", 10, 40);
console.log(`Cylinder toString(): --> ${cylinder.toString()}`);
console.log(`Area: ${cylinder.area}`);
console.log(`Radius: ${cylinder.radius}`);
console.log(`Height: ${cylinder.height}`);
console.log(`Color: ${cylinder.color}`);
//# sourceMappingURL=Classes_and_Inheritance.js.map