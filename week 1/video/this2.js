class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
        this.show = this.show.bind(this);
    }

    show = function () {
        console.log(`${this._make}`, `${this._model}`);
    }
    /*
    arrow funktion for at løse this problem. ELLER bind som vist i constructor
    show = () => {
        console.log(`${this._make}`, `${this._model}`);
    }
    */

    showAsync = function () {
        setTimeout(this.show, 1000);
    }

    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }
}

const car1 = new Car("Volvo", "v70");
const car2 = new Car("WW", "golf");
car1.showAsync();
car2.showAsync();