function Car(make,model){
    this.make = make;
    this.model = model;
    this.showThis = function(){
        console.log(this);
    };
    this.show = function(){
        console.log(`${this.make}`,`${this.model}`);
    }
    /*
    arrow function kan løse problemet og ændrer måden this fungerer på til noget der er mere normal opførsel for "this"
    this.showAsync = function(){
        setTimeout(()=>{
            console.log(this.make + ", " +this.model);
        },0);
    }
    */
   
   /*
   før ES6 ville man løse problemet med this således
   const self = this;
   this.showAsync = function(){
       setTimeout(()=>{
           console.log(self.make + ", " +self.model);
        },0);
    }
    */
    
}
const car1 = new Car("Volvo","v70");
const car2 = new Car("WW","golf");
car1.showAsync();
car2.showAsync();
// car1.showThis();
// car2.showThis();
