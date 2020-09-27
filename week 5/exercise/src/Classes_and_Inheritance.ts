import { stringify } from "querystring";

abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }

    abstract get area(): number;
    abstract get perimeter(): number;
    //A Provide the class with a nice (using template literals) toString() method  + a getter/setter for the colour property. 

    get color(): string {
        return this._color;
    }

    set color(newColor: string) {
        this._color = newColor;
    }

    public toString = (): string => {
        return `This shape's color: ${this._color}`
    };
}
// Verify that you cannot (why) make an instance of this class.
//   let res = new Shape("red"); // cannot create instance of an abstract class

class Circle extends Shape {
    private _radius: number;
    constructor(colour: string, radius: number) {
        super(colour);
        this._radius = radius;
    }

    get area(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }

    get perimeter(): number {
        return Math.PI * this._radius * 2;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(newRadius: number) {
        this._radius = newRadius;
    }
}

let circle: Circle = new Circle("Red", 10);
console.log(`Circle toString(): --> ${circle.toString()}`)
console.log(`Area: --> ${circle.area}`)
console.log(`Perimeter: --> ${circle.perimeter}`)
console.log(`Radius: --> ${circle.radius}`)
console.log(`Color: --> ${circle.color}`)
console.log(`Changed values of radius and color through set method`)
// når der assignes værdi bruges klassen set metode. get metode bruges per default hvis man fx skriver circle.color
circle.color = "blue";
circle.radius = 15;
console.log(`Radius: --> ${circle.radius}`)
console.log(`Color: --> ${circle.color}`)



class Cylinder extends Circle {
    private _height: number;
    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this._height = height;
    }

    get perimeter(): number {
        throw "not implemented";
    }

    get height(): number {
        return this._height;
    }

    set height(newHeight: number) {
        this._height = newHeight;
    }

    get area(): number {
        return  2*Math.PI*this.radius*(this._height + this.radius);
    }

    get volume(): number {
        return Math.PI * Math.pow(this.radius, 2) * this._height;
    }

}

let cylinder: Cylinder = new Cylinder("Red", 10, 40)
console.log(`Cylinder toString(): --> ${cylinder.toString()}`)
console.log(`Area: ${cylinder.area}`)
console.log(`Radius: ${cylinder.radius}`)
console.log(`Height: ${cylinder.height}`)
console.log(`Color: ${cylinder.color}`)